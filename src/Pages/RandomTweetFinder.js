import React from 'react'
import { Container } from 'react-bootstrap'

class RandomTweetFinder extends React.Component {
    constructor() {
        super()
        this.state = {

        }
        this.submitted = this.submitted.bind(this)
    }

    submitted(e) {
        e.preventDefault()
        console.log('submitted')
    }

    handleChange(e) {
        const {name, value} = e.target
        this.setState({
            [name] : value,
        })
        console.log(value)
    }

    render() {
        return (<div>
            <Container className='form-row py-1'>
                <form onSubmit={this.submitted}>
                    <input className='form-control'
                     name="search" type="text" 
                     placeholder="Search?"
                     onChange={this.handleChange}
                     value={this.state.value} />
                    <button className='btn btn-primary'>Submit</button>
                </form>
            </Container>
        <h2>{this.state.submit}</h2>
        </div>)
    }
}

export default RandomTweetFinder