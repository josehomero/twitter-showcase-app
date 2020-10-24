import React from 'react'

class UserTweet extends React.Component {
    constructor() {
        super()
        this.state = {
            loaded: 'Random tweet'
        }
    }

   render(){
       return(<div>
           <h1>{this.state.loaded}</h1>
       </div>)
   }
}

export default UserTweet