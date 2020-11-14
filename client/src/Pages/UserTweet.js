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
            console.log(this.state.andy)

        }
        fetchItems()
    }

    render() {
        return (<div>
            <Container className='form-row py-1'>
                <TweetCard
                    twitterPeople= {this.state.andy}
                />
            </Container>

{/*             <Container className='form-row py-1'>
                <TwitterUsers
                    imgUrl=""
                    name=""
                    screenName=""
                    tweeterDescription=""
                    followers=""
                />
            </Container>

            <Container className='form-row py-1'>
                <TwitterUsers
                    imgUrl=""
                    name=""
                    screenName=""
                    tweeterDescription=""
                    followers=""
                />
            </Container>

            <Container className='form-row py-1'>
                <TwitterUsers
                    imgUrl=""
                    name=""
                    screenName=""
                    tweeterDescription=""
                    followers=""
                />
            </Container>

            <Container className='form-row py-1'>
                <TwitterUsers
                    imgUrl=""
                    name=""
                    screenName=""
                    tweeterDescription=""
                    followers=""
                />
            </Container> */}
        </div>)
    }
}

export default UserTweet