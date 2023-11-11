import Navigation from './navigation';
import Enabled from './enabled';
import Home from './home';
import Settings from './settings';
import Gallary from './gallary';
import { createSignal, createEffect, onMount, Show } from 'solid-js';
import { defineMessages, useIntl } from '@cookbook/solid-intl';

export interface ExtensionInfo {
    name: string;
    sandboxed: boolean;
}

export interface SettingsInfo {
    convertProcCall: boolean;
    dontExposeCtx: boolean;
    noConfirmDialog: boolean;
    sideloadOnly: boolean;
}

export interface ClientInfo {
    version: number;
    url: string;
}

interface EurekaDispatchedExtensions {
    type: 'extension';
    extensions: ExtensionInfo[];
}

interface EurekaDispatchedClientInfo {
    type: 'handshake';
    clientInfo: ClientInfo;
}

interface EurekaDispatchedSettings {
    type: 'settings';
    settings: Partial<SettingsInfo>;
}

type EurekaDispatched = EurekaDispatchedSettings | EurekaDispatchedExtensions | EurekaDispatchedClientInfo;

const messages = defineMessages({
  eureka: {
    id: 'app.name',
    defaultMessage: 'Eureka',
  },
  manage: {
    id: 'app.title.manage',
    defaultMessage: 'Manage Extension',
  },
  gallary: {
    id: 'app.title.gallary',
    defaultMessage: 'Extension Gallary',
  },
  settings: {
    id: 'app.title.settings',
    defaultMessage: 'Settings',
  }
});

const subtitleMap = {
    default: messages.eureka,
    manage: messages.manage,
    gallary: messages.gallary,
    settings: messages.settings
} as const;

const initialHash = window.location.hash.trim().slice(1);

function App () {
    const [page, navigateTo] = createSignal(initialHash === '' ? 'home' : initialHash);
    const [clientInfo, setClientInfo] = createSignal<ClientInfo | null>(null);
    const [extensionInfos, setExtensionInfos] = createSignal<ExtensionInfo[]>([]);
    const [settings, setSettings] = createSignal<Partial<SettingsInfo>>({});
    const intl = useIntl();

    createEffect(() => {
        window.location.hash = page();
        if (page() in subtitleMap) {
            document.title = `${intl.formatMessage(messages.eureka)} | ${intl.formatMessage(subtitleMap[page() as keyof typeof subtitleMap])}`;
        } else {
            document.title = `${intl.formatMessage(messages.eureka)}`;
        }
    });

    onMount(() => {
        if (!window.opener) return;
        window.addEventListener('message', (event: MessageEvent) => {
            if (!('type' in event.data)) return;
            switch ((event.data as EurekaDispatched).type) {
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

    onMount(() => {
        window.addEventListener('hashchange', () => {
            const currentPage = window.location.hash.trim().slice(1);
            if (currentPage !== page()) {
                navigateTo(currentPage);
            }
        });
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
                <Show when={page() === 'home'}>
                    <Home />
                </Show>
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
                <Show when={page() === 'settings'}>
                    <Settings
                        clientInfo={clientInfo}
                        settings={settings}
                    />
                </Show>
            </div>
        </>
    );
}

export default App;
