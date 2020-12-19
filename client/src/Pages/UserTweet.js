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
                },
                {
                    username: 'twosetViolin',
                    tweet: {}
                },
                {
                    username: 'batmanDC',
                    tweet: {}
                },
                {
                    username: 'starwars',
                    tweet: {}
                }
            ],
            /* 
                        andy: [],
                        corvette: [],
                        twoSetViolin: [],
                        batmanDC: [],
                        starWars: [] */
            random: []
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

        newUsers.then(users => {
            this.setState({
                users
            })
        })
    }

    isEmpty = (obj) => {
        return Object.keys(obj).length === 0
    }

    getRandomData(username) {
        const fetchItems = async () => {
            const result = await axios(`/api/user-random?username=${username}`)
            this.setState({
                random: result.data
            }, () => console.log("random", this.state.random))
        }
        fetchItems()
    }


    render() {
        const tweets = this.state.users.map(user => {
            const { tweet } = user
            console.log('tweet', tweet)
            if (this.isEmpty(tweet)) return

            return (<Col className='form-row py-1' key={tweet.id} onClick={() => this.getRandomData(tweet.screen_name)}>
                <TweetCard user={tweet} />
            </Col>)
        })

        const randomTweet = this.state.random.map((tweet) => (
            <RenderedTweetCard user={tweet.user} key={tweet.user.id} fullText={tweet.full_text} entities={tweet.entities} />
        ))

        return (
            <Row>
                {tweets}
                <Col className='form-row py-1'>
                    {randomTweet}
                </Col>
            </Row>
        )
    }
}

export default UserTweet