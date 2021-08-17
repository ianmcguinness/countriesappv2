import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import CountryDetail from './pages/CountryDetail'

const App = () => {

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/:code' component={CountryDetail} />
      </Switch>
    </Router>
  )
}

export default App
