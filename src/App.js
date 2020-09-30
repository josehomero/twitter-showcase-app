import React from 'react';
import { Container } from 'react-bootstrap';
import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom"
import Home from './Pages/Home'
import UserTweet from './Pages/UserTweet'
import RandomTweetFinder from './Pages/RandomTweetFinder'



function App() {
  return (
    <Router>
      <div className="App">
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
          <Link to='/randomtweetfinder'>Random tweet finder</Link>
          </li>
          <li>
          <Link to='/usertweet'>User tweet</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path='/randomtweetfinder' component={RandomTweetFinder} />
        <Route path='/usertweet' component={UserTweet} />
        <Route path='/' component={Home}/>
        </Switch>
        </div>
    </Router>
  );
}

export default App;
