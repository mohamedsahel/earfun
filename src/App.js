import React from 'react'

import { HomePage, Theme } from './components/components'

import GlobalStyle from './global.styles'

const App = () => {

  return (
    <Theme>
        <GlobalStyle />
        <HomePage />
    </Theme>
  );
}

export default App;
