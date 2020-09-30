import React from 'react'
import { Container } from 'react-bootstrap'

class RandomTweetFinder extends React.Component {
   render(){
       return(<div>
           <Container className='form-row py-1'>
                    <input className='form-control' name="search" type="text" placeholder="Search?" />
                </Container>
       </div>)
   }
}

export default RandomTweetFinder