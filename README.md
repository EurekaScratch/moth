# 🥰 Contribute extensions
1. Fork this repository
2. Open ``public/extensions/``.
3. Make your personal folder first if it doesn'tt exists.
4. Put your extension file and banner into your folder. There is no size limit for the banner, but it must be in .png format. The names of both files are extension ID.
5. Open ``public/extensions.json``, then add your extension. Here's a breif format description:

```typescript
// A pair of author's name and extension metadata
type Extension = Record<string, {
    name: string;
    // Must be the extension ID, otherwise it won't work.
    id: string;
    description: string;
    unsandboxed: boolean;
    // An optional array of platform abbreviation.
    // We recommend platforms where this fill-in has been tested by you yourself.
    // All platform abbreviation are below.
    compatible?: Platform[];
    // Same as compatible
    incompatible?: Platform[];
    // The minimum chibi version that extension requires. Should be an integer.
    minimum_chibi_version?: number;
}>

enum Platform {
    Scratch = 'sc',
    Codingclip = 'cc',
    Aerfaying = 'acamp',
    Gitblock = 'gitblock',
    Xiaomawang = 'xmw',
    ScratchCN = 'sccn',
    CodeLab = 'codelab',
    TurboWarp = 'tw',
    FortyCode = '40code',
    CCW = 'ccw',
    Cocrea = 'Cocrea',
    TurboWarpCN = 'twcn',
    rCodenow = 'rc',
    Xueersi = 'xueersi',
    CreatiCode = 'creaticode',
    Adacraft = 'ada',
    PenguinMod = 'pm'
}

```

6. Open a pull request, I will review it later. If passed, your extension will appear in the gallary.
