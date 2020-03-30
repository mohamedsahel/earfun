import React from 'react'
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import { Theme, HomePage, ShopPage, Header } from './components'

import GlobalStyle from './global.styles'

const App = () => {
  return (
    <Router>
      <Theme>
          <GlobalStyle />
          <Header />
        <Switch>
          <Route exact path='/' >
            <HomePage />
          </Route>
          <Route path='/shop' >
            <ShopPage />
          </Route>
        </Switch>
      </Theme>
    </Router>
  );
}

export default App;
