import React from 'react'
import { Container } from 'react-bootstrap'

class RandomTweetFinder extends React.Component {
   render(){
    function handleClick(e) {
        e.preventDefault()
        return (<div>
            <h2>Searched Tweet</h2>
        </div>)
    }

       return(<div>
           <Container className='form-row py-1'>
               <form onClick={handleClick}>
                    <input className='form-control' name="search" type="text" placeholder="Search?" />
                    <button className='btn btn-primary'>Submit</button>
                </form>
            </Container>
       </div>)
   }
}

export default RandomTweetFinder