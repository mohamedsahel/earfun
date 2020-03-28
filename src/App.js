import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { HomePage, Theme, Header } from './components'

import GlobalStyle from './global.styles'

const App = () => {
  return (
    <Router>
      <Theme>
          <GlobalStyle />
          <Header />
          <HomePage />
      </Theme>
    </Router>
  );
}

export default App;
