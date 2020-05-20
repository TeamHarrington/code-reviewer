import { configure, addDecorator } from '@storybook/react'
import { theme, muiTheme } from '../styles/theme'
import { ThemeProvider } from 'styled-components'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'

// automatically import all files ending in *.stories.tsx
const req = require.context('../components', true, /.stories.tsx$/)

const loadStories = () => {
  addDecorator(getStory => {
    const content = getStory()
    return (
      <ThemeProvider theme={theme}>
        <MuiThemeProvider theme={muiTheme}>{content}</MuiThemeProvider>
      </ThemeProvider>
    )
  })
  req.keys().forEach(req)
}

configure(loadStories, module)
