// import './utils/story-styles.css'
import { ThemeProvider } from '@material-ui/styles'
import { theme } from '../theme'
import { CssBaseline } from '@material-ui/core'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  Story => (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  ),
]
