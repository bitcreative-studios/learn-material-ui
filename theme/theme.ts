import { createTheme } from '@material-ui/core/styles'
import deepOrange from '@material-ui/core/colors/deepOrange'
import teal from '@material-ui/core/colors/teal'

const theme = createTheme({
  palette: {
    primary: {
      main: deepOrange[500],
    },
    secondary: {
      main: teal['A400'],
    },
  },
})

export default theme
