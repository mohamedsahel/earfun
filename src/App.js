import React from 'react'

import Theme from './components/theme/theme.component'
import HomePage from './pages/homepage/homepage.component'


const App = () => {

  return (
    <Theme>
      <div>
        <HomePage />
      </div>
    </Theme>
  );
}

export default App;
