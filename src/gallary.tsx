import type { ExtensionInfo, ClientInfo } from './App';
import { createSignal, onMount, createEffect, Show, For } from 'solid-js';
import {
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Button,
    Skeleton,
    Box,
    Stack,
    Chip,
    Typography,
    Alert,
    AlertTitle
} from '@suid/material';

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

interface GallaryInfo {
    name: string;
    id: string;
    author: string;
    description: string;
    unsandboxed: boolean;
    compatible?: (typeof Platform[keyof typeof Platform])[];
    incompatible?: (typeof Platform[keyof typeof Platform])[];
    minimum_chibi_version?: number;
}

interface GallaryProps {
    enabled(): ExtensionInfo[];
    clientInfo(): ClientInfo | null;
}

const platformMap = {
    [Platform.Scratch]: 'scratch.mit.edu',
    [Platform.Codingclip]: 'codingclip.com',
    [Platform.Aerfaying]: 'aerfaying.com',
    [Platform.Gitblock]: 'gitblock.cn',
    [Platform.Xiaomawang]: 'world.xiaomawang.com',
    [Platform.ScratchCN]: 'www.scratch-cn.cn',
    [Platform.CodeLab]: 'create.codelab.club',
    [Platform.TurboWarp]: 'turbowarp.org',
    [Platform.FortyCode]: 'www.40code.com',
    [Platform.CCW]: 'www.ccw.site',
    [Platform.Cocrea]: 'cocrea.world',
    [Platform.TurboWarpCN]: 'editor.turbowarp.cn',
    [Platform.rCodenow]: '0832.ink',
    [Platform.Xueersi]: 'code.xueersi.com',
    [Platform.CreatiCode]: 'play.creaticode.com',
    [Platform.Adacraft]: 'www.adacraft.org',
    [Platform.PenguinMod]: 'studio.penguinmod.com'
};

function isUnavailable (info: GallaryInfo, clientInfo: ClientInfo | null) {
    if (!clientInfo) return false;
    if (!info.incompatible) return false;
    // If current host is not in the official list, we assume it is supported
    if (!Object.values(platformMap).includes(clientInfo.url)) {
        return false;
    }
    for (const plat of info.incompatible) {
        if (platformMap[plat] === clientInfo.url) {
            return true;
        }
    }
    return false;
}

function isAvailable (info: GallaryInfo, clientInfo: ClientInfo | null) {
    if (!clientInfo) return false;
    if (!info.compatible) return false;
    // If current host is not in the official list, we assume it is supported
    if (!Object.values(platformMap).includes(clientInfo.url)) {
        return false;
    }
    for (const plat of info.compatible) {
        if (platformMap[plat] === clientInfo.url) {
            return true;
        }
    }
    return false;
}

function Gallary (props: GallaryProps) {
    const [gallaryData, setGallaryData] = createSignal<GallaryInfo[] | null>(null);
    const [enabledList, setEnabledList] = createSignal<string[]>([]);
    onMount(async () => {
        const res = await fetch('/extensions.json');
        const originalData = await res.json();
        const extensionList = [];
        for (const author in originalData) {
            for (const extensionId in originalData[author]) {
                extensionList.push(
                    Object.assign(originalData[author][extensionId], {
                        author: author,
                        id: extensionId
                    })
                );
            }
        }
        extensionList.sort(() =>Math.random() - 0.5);
        setGallaryData(extensionList as GallaryInfo[]);
    });

    createEffect(() => {
        const list: string[] = [];
        for (const extension of props.enabled()) {
            list.push(extension.name);
        }
        setEnabledList(list);
    });

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            flexDirection: 'row',
            gap: '1rem'
        }}>
            <Show
                when={gallaryData() !== null}
                fallback={(
                    <Stack spacing={2}>
                        <Skeleton variant='rectangular' sx={{borderRadius: '4px'}} width={345} height={340} />
                        <Skeleton variant='rectangular' sx={{borderRadius: '4px'}} width={345} height={340} />
                        <Skeleton variant='rectangular' sx={{borderRadius: '4px'}} width={345} height={340} />
                    </Stack>
                )}
            >
                <For each={gallaryData()}>
                    {(item) => (
                        <Card sx={{ width: 345 }}>
                            <CardMedia
                                component='img'
                                alt={`${item.name}'s banner`}
                                height='180'
                                image={`/extensions/${item.author}/${item.id}.png`}
                            />
                            <CardContent>
                                <Typography gutterBottom variant='h5' component='div'>
                                    {item.name}
                                    <Chip
                                        sx={{marginLeft: '0.5rem'}}
                                        color={item.unsandboxed ? 'error' : 'primary'}
                                        label={item.unsandboxed ? 'Unsandboxed' : 'Sandboxed'}
                                    />
                                </Typography>
                                <Typography variant='body2' color='text.secondary'>
                                    {`${item.description} (This extension is authored by ${item.author})`}
                                </Typography>
                                <Show when={isUnavailable(item, props.clientInfo())}>
                                    <Alert sx={{marginTop: '1rem'}} severity='warning'>
                                        <AlertTitle>Compatibility Warning</AlertTitle>
                                        This extension is marked as incompatible with your editor.
                                    </Alert>
                                </Show>
                                <Show when={isAvailable(item, props.clientInfo())}>
                                    <Alert sx={{marginTop: '1rem'}} severity='success'>
                                        <AlertTitle>Congratulations!</AlertTitle>
                                        This extension is marked as can load perfectly in your editor!
                                    </Alert>
                                </Show>
                            </CardContent>
                            <CardActions>
                                <Button
                                    size='small'
                                    disabled={props.clientInfo() === null || enabledList().includes(item.id) || (props.clientInfo() !== null && props.clientInfo()!.version < (item.minimum_chibi_version ?? 0))}
                                    onClick={() => {
                                        window.opener.postMessage({
                                            type: 'load',
                                            info: {
                                                url: `${window.location.origin}/extensions/${item.author}/${item.id}.js`,
                                                sandboxed: !item.unsandboxed
                                            }
                                        }, '*');
                                    }}
                                >
                                    {enabledList().includes(item.id) ? 'Installed' : 'Install'}
                                </Button>
                                <Button size='small' onClick={() => {
                                    navigator.clipboard.writeText(`${window.location.origin}/extensions/${item.author}/${item.id}.js`);
                                }}>Copy URL</Button>
                            </CardActions>
                        </Card>
                    )}
                </For>
            </Show>
        </Box>
    );
}

export default Gallary;
