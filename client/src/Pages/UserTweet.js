import React from 'react'
import axios from 'axios'
import TweetCard from '../components/TweetCard'

import { Container } from 'react-bootstrap'

class UserTweet extends React.Component {
    constructor() {
        super()
        this.state = {
            andy:[]
        }
    }

    componentDidMount() {
        const fetchItems = async () => {
            const result = await axios(`/api/user-tweet`)
            this.setState({
                andy: result.data
            })
        }
        fetchItems()
    }


    render() {
        const tweet = this.state.andy.map((tweet) => (
            <TweetCard user={tweet.user} id={tweet.id} />
        ))

        return (<div>
            <Container className='form-row py-1'>
                {tweet}
            </Container>
        </div>)
    }
}

export default UserTweet