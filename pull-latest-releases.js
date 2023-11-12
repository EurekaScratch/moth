import { Octokit } from 'octokit';
import fs from 'node:fs/promises';
import path from 'node:path';

if (!process.env.ACCESS_TOKEN) {
    console.error('ACCESS_TOKEN is not specified in environment variables.');
    process.exit(1);
}

const octokit = new Octokit({ auth: process.env.ACCESS_TOKEN });
console.log('Pulling the latest Eureka release...');

octokit.request('GET /repos/{owner}/{repo}/releases', {
  owner: 'EurekaScratch',
  repo: 'eureka-loader'
}).then(async ({data}) => {
    const [ latestRelease ] = data;
    console.log(`Found tag ${latestRelease.tag_name}. Generating manifests...`);
    const manifest = {
        version: latestRelease.tag_name,
        publishTime: latestRelease.published_at
    };

    console.log(`Downloading assets...`);
    const assetPromises = [];
    for (const asset of latestRelease.assets) {
        assetPromises.push(downloadAsset(asset));
    }
    const files = await Promise.all(assetPromises);

    console.log('Saving to public directory...');
    const folderExists = await checkExistence(path.resolve('public/release'));
    if (!folderExists) {
        await fs.mkdir(path.resolve('public/release'));
    }
    await fs.writeFile(
        path.resolve('public/release/manifest.json'),
        JSON.stringify(manifest),
        {encoding: 'utf-8'}
    );
    for (const file of files) {
        console.log(`Saving ${file.name}...`);
        await fs.writeFile(
            path.resolve('public/release', file.name),
            toBuffer(file.buffer),
            {encoding: 'utf-8'}
        );
    }
    console.log('Done!');
});

async function checkExistence (path) {
    try {
        await fs.stat(path);
        return true;
    } catch (e) {
        return false;
    }
}

function toBuffer (arrayBuffer) {
    const buffer = Buffer.alloc(arrayBuffer.byteLength);
    const view = new Uint8Array(arrayBuffer);
    for (let i = 0; i < buffer.length; ++i) {
        buffer[i] = view[i];
    }
    return buffer;
}

async function downloadAsset (asset) {
    console.log(`Downloading ${asset.name}...`);
    const res = await fetch(asset.browser_download_url);
    console.log(`Downloaded ${asset.name}`);
    return {
        name: asset.name,
        buffer: await res.arrayBuffer()
    };
}
