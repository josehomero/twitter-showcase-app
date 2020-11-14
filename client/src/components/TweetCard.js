import React from "react"

function TweetCard(props) {
    const tweet = props.twitterPeople. map((tweet) =>
    <div key = {tweet.id}>
        <p >{tweet.created_at}</p>
        <p>{tweet.text}</p>
    </div>
    )

        return(<div>

            <img/>
            <h3>{tweet}</h3>
            <h3>{/* props.screenName */}</h3>
            <p>{/* props.tweeterDescription */}</p>
            <p>{/* props.followers */}</p>
        </div>)
    
}

export default TweetCard