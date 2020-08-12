import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

const overwrites = () => ({
  palette: {
    hover: {
      main: '#474747',
      dark: '#2D2D2D'
    }
  }
})

export const makeTheme = () => createMuiTheme(overwrites())
