import React from 'react'

import Body from './Body'
import NavBar from './Navbar'
import Header from './Header'
import Background from "./Background";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <NavBar />
      <Body />
      <Background />
    </React.Fragment>
  )
}

export default App

