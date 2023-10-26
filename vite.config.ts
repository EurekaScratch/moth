import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';
import { ViteImageOptimizer as optimizer } from 'vite-plugin-image-optimizer';
import suid from "@suid/vite-plugin";

export default defineConfig({
    plugins: [suid(), solid(), optimizer()]
});
