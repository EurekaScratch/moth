/* @refresh reload */
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { render } from 'solid-js/web';
import { IntlProvider } from '@cookbook/solid-intl';
import './index.css';
import { messages } from '../locales';
import App from './App';

const root = document.getElementById('root');

render(() => (
    <IntlProvider locale={navigator.language} messages={messages[navigator.language as keyof typeof messages]}>
        <App />
    </IntlProvider>
), root!);
