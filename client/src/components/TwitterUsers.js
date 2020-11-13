import React from "react"

function TwitterUsers(props) {
    console.log("props" , props.twitterPeople)
        return(<div>

            <img/>
            <h3>{props.twitterPeople.text}</h3>
            <h3>{/* props.screenName */}</h3>
            <p>{/* props.tweeterDescription */}</p>
            <p>{/* props.followers */}</p>
        </div>)
    
}

export default TwitterUsers