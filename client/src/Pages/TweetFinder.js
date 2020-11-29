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
        this.submitted = this.submitted.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        const { name, value } = e.target
        this.setState({
            [name]: value,
        })
    }

    submitted(e) {
        e.preventDefault()
        this.setState({
            name: this.state.search
        })
        
        e.target.reset()
    }

    getSearchData(topic) {
        this.submitted()
        console.log(this.state.name)
        
/*         const fetchItems = async () => {
            const result = await axios(`/api/search-data?topic=${this.state.name}`)
            this.setState({
                random: result.data
            })
        }
        fetchItems() */
    }
    render() {
        return (
        <div className='form-row py-1'>
                <form onSubmit={this.submitted}>
                    <input 
                        className='form-control'
                        name="search" 
                        type="text"
                        placeholder="Search?"
                        onChange={this.handleChange}
                        value={this.state.value} />
                    <button className='btn btn-primary'>Submit</button>
                </form>
            <Row>
                <Col>
                {this.state.name}
                </Col>
            </Row>
        </div>)
    }
}

export default TweetFinder