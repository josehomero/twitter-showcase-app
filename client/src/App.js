import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Container } from 'react-bootstrap';
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom"
import Home from './Pages/Home'
import UserTweet from './Pages/UserTweet'
import RandomTweetFinder from './Pages/RandomTweetFinder'



const App = () => {

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`api/get-tweet-data`)
      console.log(result)
    }
    fetchItems()
  }, [])

    return (
      <Router>
        <div className='App'>
          <nav className='navbar navbar-expand-lg navbar-light bg-light' className='navbar navbar-dark bg-primary'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link className='nav-link' to='/'>Home</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/randomtweetfinder'>Random tweet finder</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/usertweet'>User tweet</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path='/randomtweetfinder' component={RandomTweetFinder} />
            <Route path='/usertweet' component={UserTweet} />
            <Route path='/' component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }

export default App;
