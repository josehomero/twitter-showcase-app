import React from 'react';
import { Container } from 'react-bootstrap';

import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Container>
      <button className="btn btn-primary">Home</button>
      <button className="btn btn-warning">Search</button>
      <button className="btn btn-success">Random Tweet Finder</button>
      </Container>
      <Header/>
    </div>
  );
}

export default App;
