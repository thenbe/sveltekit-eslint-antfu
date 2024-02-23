// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    stylistic: false,
    svelte: true,
    typescript: {
      tsconfigPath: 'tsconfig.lint.json',
      filesTypeAware: [`**\/*.{ts,tsx,svelte}`], // Enable type-aware rules in svelte files (e.g. `no-floating-promises`).
    },
  },
)
