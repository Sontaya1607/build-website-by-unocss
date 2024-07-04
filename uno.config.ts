import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    {
      'my-section': 'container mx-auto',
      'link': 'hover:underline',
    },
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        poppins: ['Poppins:100,200,300,400,500,600,700'],
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  theme: {
    colors: {
      primary: 'rgb(var(--c-primary), <alpha-value>)',
      c: {
        1: 'rgb(var(--c-color-1), <alpha-value>)',
        2: 'rgb(var(--c-color-2), <alpha-value>)',
        3: 'rgb(var(--c-color-3), <alpha-value>)',
        4: 'rgb(var(--c-color-4), <alpha-value>)',
      },
      tc: {
        1: 'rgb(var(--c-text-color-1), <alpha-value>)',
        2: 'rgb(var(--c-text-color-2), <alpha-value>)',
        3: 'rgb(var(--c-text-color-3), <alpha-value>)',
        4: 'rgb(var(--c-text-color-4), <alpha-value>)',
        5: 'rgb(var(--c-text-color-5), <alpha-value>)',
      },
    },
    container: {
      padding: {
        DEFAULT: '1.75rem',
        xl: '6rem',
      },
    },
  },
})
