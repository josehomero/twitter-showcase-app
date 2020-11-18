import React from 'react'
import axios from 'axios'
import TweetCard from '../components/TweetCard'

import { Container } from 'react-bootstrap'

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
            <TweetCard user={tweet.user} id={tweet.id} />
        ))

        const tweet2 = this.state.corvette.map((tweet) => (
            <TweetCard user={tweet.user} id={tweet.id} />
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
            <TweetCard user={tweet.user} id={tweet.id} />
        ))

        return (
            <div>
                <Container className='form-row py-1'>
                    {tweet1}
                </Container>

                <Container className='form-row py-1'>
                    {tweet2}
                </Container>

                <Container className='form-row py-1'>
                    {tweet3}
                </Container>

                <Container className='form-row py-1'>
                    {tweet4}
                </Container>

                <Container className='form-row py-1'>
                    {tweet5}
                </Container>

                <Container className='form-row py-1'>
                    
                </Container>
            </div>)
    }
}

export default UserTweet