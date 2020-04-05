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
  Header, 
  DeleteItemBox,
  FilterBox
 } from './components'

import GlobalStyle from './global.styles'

const App = () => {
  return (
    <Router>
      <Theme>
          <GlobalStyle />
          <Route exact path='/shop/filter'>
            <FilterBox />
          </Route>
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
        </Switch>
      </Theme>
    </Router>
  );
}

export default App;
