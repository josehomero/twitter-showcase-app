import React from "react"

function TwitterUsers(props) {
   
        return(<div>
            <img {/* src={props.imgUrl} */}/>
            <h3>{/* props.name */}</h3>
            <h3>{/* props.screenName */}</h3>
            <p>{/* props.tweeterDescription */}</p>
            <p>{/* props.followers */}</p>
        </div>)
    
}

export default TwitterUsers