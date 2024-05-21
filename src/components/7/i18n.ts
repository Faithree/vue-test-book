// i18nPlugin.ts
interface Messages {
  [language: string]: {
    [key: string]: string
  }
}

interface PluginOptions {
  defaultLanguage?: string
  messages?: Messages
}

const i18nPlugin = {
  install(app: any, options: PluginOptions = {}) {
    const messages = options.messages ?? {}

    app.config.globalProperties.$t = function (key: string) {
      const language = options.defaultLanguage ?? 'en'
      return messages[language]?.[key] || key
    }
  }
}

export default i18nPlugin
