import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['./src/**'],
  format: ['esm', 'cjs'],
  splitting: false,
  sourcemap: true,
  clean: true,
  dts: true,
  minify: true,
  target: 'esnext',
  treeshake: true,
})
