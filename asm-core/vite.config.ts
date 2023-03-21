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
        dest: 'styles/react-datepicker.css'
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
      entry: path.resolve(__dirname, 'src/lib/index.ts'),
      name: 'AsmCore',
      formats: ['es', 'umd'],
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
