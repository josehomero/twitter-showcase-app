import React from 'react'
import { Container } from 'react-bootstrap'

class RandomTweetFinder extends React.Component {
    constructor() {
        super()
        this.state = {
            submitted: 'Submitted'
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        e.preventDefault()
        return (<div>
            <h2>Searched Tweet</h2>
        </div>)
    }

    render() {
        return (<div>
            <Container className='form-row py-1'>
                <form onClick={this.handleClick}>
                    <input className='form-control' name="search" type="text" placeholder="Search?" />
                    <button className='btn btn-primary'>Submit</button>
                </form>
            </Container>
            <h2></h2>
        </div>)
    }
}

export default RandomTweetFinder