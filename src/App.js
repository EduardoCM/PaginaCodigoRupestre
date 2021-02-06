import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid'

import AppNavbar from './componentes/layout/AppNavbar'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ListaInmuebles from './componentes/vistas/ListaInmuebles'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'


import RegistrarUsuario from './componentes/seguridad/RegistrarUsuario'
import SignIn from './componentes/seguridad/SignIn'
import SignUp from './componentes/seguridad/SignUp'


import theme from "./theme/theme"

class App extends Component {
  render() {
    return (

<Router>
    <MuiThemeProvider theme={theme}>
    <AppNavbar />

    <Grid container>
      <Switch>
          <Route  exact path="/" > <SignIn /> </Route>
          <Route  exact path="/spacenative/registrarUsuario"> <RegistrarUsuario /> </Route>
          <Route exact path="/spacenative/SignIn">  </Route>
          <Route exact path="/spacenative/SignUp"> <SignUp /> </Route>
      </Switch>
    </Grid>

    </MuiThemeProvider>
</Router>
    )
  }
}

export default App;
