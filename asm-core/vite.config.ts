import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'classic',
    }),
    dts({
      insertTypesEntry: true,
    }),
    viteStaticCopy({targets: [
      {
        src: 'src/lib/forms/styles/react-datepicker.css',
        dest: 'styles'
      }
    ]})
  ],
  resolve: {
    alias: {
      'react/jsx-runtime': 'react/jsx-runtime.js',
    },
  },
  ssr: {
    format: 'esm',
    noExternal: true
  },
  build: {
    ssr: true,
    target: 'modules',
    manifest: true,
    ssrManifest: true,
    sourcemap: true,
    lib: {
      entry: [
        path.resolve(__dirname, 'src/lib/client.ts'),
        path.resolve(__dirname, 'src/lib/server.ts'),
      ],
      name: 'AsmCore',
      formats: ['es'],
      fileName: (format) => `asm-core.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        format: 'esm',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        },
      },
    },
  },
});
