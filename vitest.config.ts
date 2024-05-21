import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'
export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      //
      globals: true,
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/*'],
      root: fileURLToPath(new URL('./', import.meta.url)),
      reporters: ['verbose', 'html', 'json'],
      outputFile: {
        json: './test/json-report.json',
        html: './test/index.html'
      },
      coverage: {
        enabled: true,
        reporter: ['text', 'json', 'html']
      }
    }
  })
)
