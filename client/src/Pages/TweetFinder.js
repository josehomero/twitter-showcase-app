import React from 'react'
import { Row, Col } from 'react-bootstrap'
import axios from 'axios'

class TweetFinder extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            results: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.submitted = this.submitted.bind(this)
    }

    handleChange(e) {
        const { name, value } = e.target
        this.setState({
            name: value,
        })
        
    }

  

    async submitted(e) {        
        e.preventDefault()
            const result = await axios(`/api/search-data?topic=${this.state.name}`)
            this.setState({
                results: result.data
            })
        e.target.reset()
    }


    render() {
/*         const renderedTweets = this.state.random.map((tweet) => (
            <RenderedTweetCard user={tweet.user} key={tweet.user.id} fullText={tweet.full_text} entities={tweet.entities} />
        )) */

        return (
        <div className='form-row py-1'>
                    <input 
                        className='form-control'
                        name="search" 
                        type="text"
                        placeholder="Search?"
                        onChange={this.handleChange}
                        value={this.state.value} />
                    <button className='btn btn-primary' onClick={this.submitted} >Submit</button>
            <Row>
                <Col>
                {/* {this.state.name} */}
                </Col>
            </Row>
        </div>)
    }
}

export default TweetFinder