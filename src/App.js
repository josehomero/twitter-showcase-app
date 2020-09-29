import React from 'react';
import { Container } from 'react-bootstrap';
import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom"
import Home from './Pages/Home'
import UserTweet from './Pages/UserTweet'
import RandomTweetFinder from './Pages/RandomTweetFinder'
import Header from './components/Header'


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
          <Link to='/randomtweetfinder'>randomtweetfinder</Link>
          </li>
          <li>
          <Link to='/usertweet'>usertweet</Link>
          </li>
        </ul>
      </nav>
<Header />
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
