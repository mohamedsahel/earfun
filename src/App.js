import React from 'react'
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import { 
  Theme,
  HomePage, 
  ShopPage,
  CartPage, 
  CheckoutPage,
  Header, 
  DeleteItemBox,
  FilterBox,
  ModeToggler
 } from './components'

import GlobalStyle from './global.styles'

const App = () => {

  return (
    <Router>
      <Theme>
          <GlobalStyle />
          <ModeToggler />
          <FilterBox />
          <DeleteItemBox />
          <Header />
        <Switch>
          <Route exact path='/' >
            <HomePage />
          </Route>
          <Route path='/shop' >
            <ShopPage />
          </Route>
          <Route exact path='/cart' >
            <CartPage />
          </Route>
          <Route exact path='/checkout' >
            <CheckoutPage />
          </Route>
        </Switch>
      </Theme>
    </Router>
  );
}

export default App;
