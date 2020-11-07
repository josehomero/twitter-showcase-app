import React from 'react'
import axios from 'axios'

class UserTweet extends React.Component {
    constructor() {
        super()
        this.state = {
            loaded: 'Random tweet'
        }
    }

    componentDidMount() {
        const fetchItems = async () => {
            const result = await axios(`/api/user-tweet`)
            console.log(result)
        }
        fetchItems()
    }
    
   render(){
       return(<div>
           <h1>{this.state.loaded}</h1>
       </div>)
   }
}

export default UserTweet