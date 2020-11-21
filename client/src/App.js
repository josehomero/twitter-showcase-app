import React from 'react';
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom"
import Home from './Pages/Home'
import UserTweet from './Pages/UserTweet'
import TweetFinder from './Pages/TweetFinder'

import { Container } from 'react-bootstrap'

const App = () => {
  return (
    <Router>
      <Container className='App'>
        <div>
          <nav className='navbar navbar-expand-lg navbar-light bg-light' className='navbar navbar-dark bg-primary'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link className='nav-link' to='/'>Home</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/tweetfinder'>Tweet Finder</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/usertweet'>User Tweet</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path='/tweetfinder' component={TweetFinder} />
            <Route path='/usertweet' component={UserTweet} />
            <Route path='/' component={Home} />
          </Switch>
        </div>
      </Container>
    </Router>
  );
}

export default App;
