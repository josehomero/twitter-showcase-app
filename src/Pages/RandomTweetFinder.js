import React from 'react'
import { Container } from 'react-bootstrap'

class RandomTweetFinder extends React.Component {
    constructor() {
        super()
        this.state = {
            submit: 'Submitted'
        }
        this.submitted = this.submitted.bind(this)
    }

    submitted(e) {
        e.preventDefault()
        return this.state.submit
    }

    render() {
        return (<div>
            <Container className='form-row py-1'>
                <form onSubmit={this.submitted}>
                    <input className='form-control' name="search" type="text" placeholder="Search?" />
                    <button className='btn btn-primary'>Submit</button>
                </form>
            </Container>
        <h2>{this.state.submit}</h2>
        </div>)
    }
}

export default RandomTweetFinder