import path from 'path';
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [reactRefresh()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@/routes': path.resolve(__dirname, './src/routes'),
        },
    },
    server: {
        host: '0.0.0.0',
    },
});
