import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'classic',
    }),
    dts({
      insertTypesEntry: true,
    }),
    cssInjectedByJsPlugin()
  ],
  resolve: {
    alias: {
      'react/jsx-runtime': 'react/jsx-runtime.js',
    },
  },
  build: {
    // ssr: true,
    // commonjsOptions: { include: [/node_modules/] },
    lib: {
      entry: path.resolve(__dirname, 'src/lib/index.ts'),
      name: 'AsmCore',
      formats: ['es', 'umd'],
      fileName: (format) => `asm-core.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        },
      },
    },
  },
});
