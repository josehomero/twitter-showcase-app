import React from 'react'
import axios from 'axios'
import TweetCard from '../components/TweetCard'
import RenderedTweetCard from '../components/RenderedTweetCard'

import { Col, Row } from 'react-bootstrap'

class UserTweet extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [
                {
                    username: 'andy',
                    tweet: {}
                },
                {
                    username: 'corvette',
                    tweet: {}
                }
            ],
            /* 
                        andy: [],
                        corvette: [],
                        twoSetViolin: [],
                        batmanDC: [],
                        starWars: [],
                        random: [] */
        }
        this.getRandomData = this.getRandomData.bind(this)
    }


    componentDidMount() {
        const newUsers = Promise.all(this.state.users.map(async user => {
            const result = await axios(`/api/user-${user.username}`)
            const [tweet] = result.data
            const newUser = { ...user }
            newUser.tweet = tweet
            return newUser
        }))

        NewUsers.then(users => {
            this.setState({
                users
            }, () => console.log('new users:', this.state.users))
        })
    }

    getRandomData(username) {
        const fetchItems = async () => {
            const result = await axios(`/api/user-random?username=${username[0].user.screen_name}`)
            this.setState({
                random: result.data
            })
        }
        fetchItems()
    }


    render() {
        /*         const tweet1 = this.state.andy.map((tweet) => (
                    <TweetCard user={tweet.user} key={tweet.user.id} />
                ))
        
                const tweet2 = this.state.corvette.map((tweet) => (
                    <TweetCard user={tweet.user} key={tweet.user.id} />
                ))
        
                const tweet3 = this.state.twoSetViolin.map((tweet) => (
                    <TweetCard user={tweet.user} key={tweet.user.id} />
                ))
        
                const tweet4 = this.state.batmanDC.map((tweet) => (
                    <TweetCard user={tweet.user} key={tweet.user.id} />
                ))
        
                const tweet5 = this.state.starWars.map((tweet) => (
                    <TweetCard user={tweet.user} key={tweet.user.id} />
                )) */
        /* 
                const randomTweet = this.state.random.map((tweet) => (
                    <RenderedTweetCard user={tweet.user} key={tweet.user.id} fullText={tweet.full_text} entities={tweet.entities} />
                )) */

        return (
            <Row>
                {/* <Col className='form-row py-1' onClick={() => this.getRandomData(this.state.andy)}>
                    {tweet1}
                </Col>

                <Col className='form-row py-1' onClick={() => this.getRandomData(this.state.corvette)}>
                    {tweet2}
                </Col>

                <Col className='form-row py-1' onClick={() => this.getRandomData(this.state.twoSetViolin)}>
                    {tweet3}
                </Col>

                <Col className='form-row py-1' onClick={() => this.getRandomData(this.state.batmanDC)}>
                    {tweet4}
                </Col>

                <Col className='form-row py-1' onClick={() => this.getRandomData(this.state.starWars)}>
                    {tweet5}
                </Col> */}

                {/*                 <Col className='form-row py-1'>
                    {randomTweet}
                </Col> */}
            </Row>
        )
    }
}

export default UserTweet