import React from 'react'
import { Row, Col } from 'react-bootstrap'
import axios from 'axios'
import RenderedTweetCard from '../components/RenderedTweetCard'

class TweetFinder extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            results: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.submitted = this.submitted.bind(this)
    }

    handleChange(e) {
        const { value } = e.target
        this.setState({
            name: value
        })

    }

    async submitted(e) {
        e.preventDefault()
        const result = await axios(`/api/search-data?topic=${this.state.name}`)
        this.setState({
            results: result.data,
            name:''
        })

    }


    render() {

        const tweetResults = this.state.results.map((tweet) => (
            <RenderedTweetCard user={tweet.user} key={tweet.user.id} fullText={tweet.full_text} entities={tweet.entities} />
        ))

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
                        {tweetResults}
                    </Col>
                </Row>
            </div>)
    }
}

export default TweetFinder