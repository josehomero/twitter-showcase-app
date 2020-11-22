import React from 'react'
import axios from 'axios'
import TweetCard from '../components/TweetCard'
import RandomTweetCard from '../components/RandomTweetCard'

import { Col, Row } from 'react-bootstrap'

class UserTweet extends React.Component {
    constructor() {
        super()
        this.state = {
            andy: [],
            corvette: [],
            twoSetViolin: [],
            batmanDC: [],
            starWars: [],
            random: []
        }
        this.getRandomData = this.getRandomData.bind(this)
    }


    componentDidMount() {
        const fetchItems1 = async () => {
            const result = await axios(`/api/user-andy`)
            this.setState({
                andy: result.data
            })
        }
        fetchItems1()

        const fetchItems2 = async () => {
            const result = await axios(`/api/user-corvette`)
            this.setState({
                corvette: result.data
            })
        }
        fetchItems2()

        const fetchItems3 = async () => {
            const result = await axios(`/api/user-twosetviolin`)
            this.setState({
                twoSetViolin: result.data
            })
        }
        fetchItems3()

        const fetchItems4 = async () => {
            const result = await axios(`/api/user-batman-dc`)
            this.setState({
                batmanDC: result.data
            })
        }
        fetchItems4()

        const fetchItems5 = async () => {
            const result = await axios(`/api/user-starwars`)
            this.setState({
                starWars: result.data
            })
        }
        fetchItems5()
    }

    getRandomData() {
        const fetchItems = async () => {
            const result = await axios(`/api/user-random`)
            this.setState({
                random: result.data
            })
        }
        fetchItems()
    }

    render() {
        const tweet1 = this.state.andy.map((tweet) => (
            <TweetCard user={tweet.user} id={tweet.id}/>
        ))

        const tweet2 = this.state.corvette.map((tweet) => (
            <TweetCard user={tweet.user} id={tweet.id}/>
        ))

        const tweet3 = this.state.twoSetViolin.map((tweet) => (
            <TweetCard user={tweet.user} id={tweet.id} />
        ))

        const tweet4 = this.state.batmanDC.map((tweet) => (
            <TweetCard user={tweet.user} id={tweet.id} />
        ))

        const tweet5 = this.state.starWars.map((tweet) => (
            <TweetCard user={tweet.user} id={tweet.id} />
        ))

        const randomTweet = this.state.random.map((tweet) => (
            <RandomTweetCard user={tweet.user} id={tweet.id} full_text={tweet.full_text} entities={tweet.entities} />
        ))

        return (
            <Row>
                <Col className='form-row py-1' onClick={this.getRandomData}>
                    {tweet1}
                </Col>

                <Col className='form-row py-1'>
                    {tweet2}
                </Col>

                <Col className='form-row py-1'>
                    {tweet3}
                </Col>

                <Col className='form-row py-1'>
                    {tweet4}
                </Col>

                <Col className='form-row py-1'>
                    {tweet5}
                </Col>

                <Col className='form-row py-1'>
                    {randomTweet}
                </Col>
            </Row>
        )
    }
}

export default UserTweet