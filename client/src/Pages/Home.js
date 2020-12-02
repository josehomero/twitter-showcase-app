import React from 'react'
import Corvette from '../images/corvette.png.jpg'

class Home extends React.Component {

    render() {
        return (<div>
            <h1>Twitter Showcase App!</h1>

            <img src={Corvette} className='float-right' alt='corvette' width='300' height='300' />

            <h2>
                This app utilizes data from the Twitter API to allow a person to search for recent
                tweets of specific Twitter users. There is also a random tweet showcase for my
                favorite Twitter users. Give it a try and look around!
            </h2>
        </div>)
    }
}

export default Home