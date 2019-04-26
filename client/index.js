import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Blog from './components/Blog/Blog'
import About from './components/About/About'

class App extends React.Compoent {
  render () {
    return (
      <React.Fragment>
        <Router history={BrowserRouter}>
          <Route path={"home"} component={Home} />
          <Route path={"footer"} component={Footer} />
          <Route path={"blog"} component={Blog} />
          <Route path={"about"} component={About} />
      </Router>
      </React.Fragment>
    )
  })
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  )
})

