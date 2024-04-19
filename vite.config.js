import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts';
import { peerDependencies } from './package.json';

export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'Waft',
      // The proper extensions will be added
      fileName: 'waft',
      formats: ['es'],
    },
    rollupOptions: {
      // Defines external dependencies that shouldn't be bundled with your library
      external: [...Object.keys(peerDependencies)],
    },
    // Generates source maps for debugging
    sourcemap: true,
    // Clears the output directory before building
    emptyOutDir: true,
  },
  // Generating TypeScript declaration files (d.ts)
  plugins: [dts()], 
})