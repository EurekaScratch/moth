import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';
import suid from "@suid/vite-plugin";

export default defineConfig({
    plugins: [suid(), solid()]
});
