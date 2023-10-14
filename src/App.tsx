import Navigation from './navigation';
import Enabled from './enabled';
import { createSignal, onMount, Show } from 'solid-js';

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

function App () {
    const [page, navigateTo] = createSignal('enabled');
    const [clientInfo, setClientInfo] = createSignal<ClientInfo | null>(null);
    const [extensionInfos, setExtensionInfos] = createSignal<ExtensionInfo[]>([]);
    const [settings, setSettings] = createSignal<Partial<SettingsInfo>>({});

    onMount(() => {
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
                clientInfo={clientInfo}
                page={page}
                navigateTo={navigateTo}
            />
            <div style={{margin: '1rem'}}>
                <Show when={page() === 'enabled'}>
                    <Enabled extensions={extensionInfos} />
                </Show>
            </div>
        </>
    );
}

export default App;
