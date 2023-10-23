import Navigation from './navigation';
import Enabled from './enabled';
import Gallary from './gallary';
import { createSignal, createEffect, onMount, Show } from 'solid-js';

export interface ExtensionInfo {
    name: string;
    sandboxed: boolean;
}

export interface SettingsInfo {
    core: boolean;
    patchRegisterExtensionPrimitives: boolean;
    noPrompt: boolean;
}

export interface ClientInfo {
    version: number;
    url: string;
}

interface ChibiDispatchedExtensions {
    type: 'extension';
    extensions: ExtensionInfo[];
}

interface ChibiDispatchedClientInfo {
    type: 'handshake';
    clientInfo: ClientInfo;
}

interface ChibiDispatchedSettings {
    type: 'settings';
    settings: Partial<SettingsInfo>;
}

type ChibiDispatched = ChibiDispatchedSettings | ChibiDispatchedExtensions | ChibiDispatchedClientInfo;

const subtitleMap = {
    home: 'Load scratch extension everywhere.',
    manage: 'Manage Extension',
    gallary: 'Extension Gallary',
    settings: 'Settings'
} as const;

const initialHash = window.location.hash.trim().slice(1);

function App () {
    const [page, navigateTo] = createSignal(initialHash === '' ? 'manage' : initialHash);
    const [clientInfo, setClientInfo] = createSignal<ClientInfo | null>(null);
    const [extensionInfos, setExtensionInfos] = createSignal<ExtensionInfo[]>([]);
    const [settings, setSettings] = createSignal<Partial<SettingsInfo>>({});

    createEffect(() => {
        window.location.hash = page();
        if (page() in subtitleMap) {
            document.title = `Chibi | ${subtitleMap[page() as keyof typeof subtitleMap]}`;
        } else {
            document.title = `Chibi`;
        }
    });

    onMount(() => {
        if (!window.opener) return;
        window.addEventListener("message", (event: MessageEvent) => {
            if (!('type' in event.data)) return;
            switch ((event.data as ChibiDispatched).type) {
            case 'handshake':
                setClientInfo(event.data.clientInfo);
                break;
            case 'extension':
                setExtensionInfos(event.data.extensions);
                break;
            case 'settings':
                setSettings(event.data.settings);
                break;
            default:
                
            }
        });
        window.opener.postMessage({type: 'allocate'}, '*');
    });

    return (
        <>
            <Navigation
                subtitleMap={subtitleMap}
                clientInfo={clientInfo}
                page={page}
                navigateTo={navigateTo}
            />
            <div style={{margin: '1rem'}}>
                <Show when={page() === 'manage'}>
                    <Enabled
                        extensions={extensionInfos}
                        clientInfo={clientInfo}
                    />
                </Show>
                <Show when={page() === 'gallary'}>
                    <Gallary
                        enabled={extensionInfos}
                        clientInfo={clientInfo}
                    />
                </Show>
            </div>
        </>
    );
}

export default App;
