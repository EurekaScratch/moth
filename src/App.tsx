import Navigation from './navigation';
import Enabled from './enabled';
import { createSignal, Show } from 'solid-js';

function App () {
    const [page, navigateTo] = createSignal('enabled');
    return (
        <>
            <Navigation
                page={page}
                navigateTo={navigateTo}
            />
            <div style={{margin: '1rem'}}>
                <Show when={page() === 'enabled'}>
                    <Enabled />
                </Show>
            </div>
        </>
    );
}

export default App;
