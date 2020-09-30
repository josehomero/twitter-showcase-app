import React from 'react'
import Corvette from './images/corvette.png.jpg'

class Home extends React.Component {
Image() {
    return <img src={Corvette} alt="Logo" />;
}

   render(){
       return(<div>
           <h1>Twitter Showcase App!</h1>
       <p>{Image()}</p>
           
       </div>)
   }
}

export default Home