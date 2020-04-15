import React from 'react'
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'


import { 
  HomePage, 
  ShopPage,
  CartPage, 
  CheckoutPage,
  NoMatchPage,
 } from './pages'

import { 
  Theme,
  Header, 
  DeleteItemModal,
  FilterModal,
  ModeToggler,
  Snackbar
 } from './components'

import GlobalStyle from './global.styles'

const App = () => {
  return (
    <Router>
      <Theme>
          <GlobalStyle />
          <ModeToggler />
          <Snackbar />
          <Header />
        <Switch>
          <Route exact path='/' >
            <HomePage />
          </Route>
          <Route exact  path='/shop' >
            <ShopPage />
          </Route>
          <Route exact path='/cart' >
            <CartPage />
          </Route>
          <Route exact path={`/checkout`}  >
            {
              ({ location }) => location.state ? 
              <CheckoutPage /> 
              : 
              <Redirect 
              to={{
                pathname: "/cart",
                state: { from: location }
              }}
              />
            }
              
          </Route>
          <Route path="*">
            <NoMatchPage />
          </Route>
        </Switch>

      {/* modals */}
      <FilterModal />
      <DeleteItemModal />
      </Theme>
    </Router>
  );
}

export default App;
