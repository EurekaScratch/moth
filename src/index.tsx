/* @refresh reload */
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { render } from 'solid-js/web';
import './index.css';
import App from './App';

const root = document.getElementById('root');

render(() => <App />, root!);
