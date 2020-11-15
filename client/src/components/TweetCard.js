import React from "react"

function TweetCard(props) {
    const tweet = props.twitterAndy.map((tweet) =>
    <div key = {tweet.id}>
        <p>{tweet.user.name}</p>
        <p>{tweet.user.screen_name}</p>
        <p>{tweet.text}</p>
    </div>
    )

        return(<div>

            <img src="https://pbs.twimg.com/profile_images/1021964480593440768/0LloaAKk_normal.jpg" alt="andy's-pic"/>
            <h3>{tweet}</h3>
            <h3>{/* props.screenName */}</h3>
            <p>{/* props.tweeterDescription */}</p>
            <p>{/* props.followers */}</p>
        </div>)
    
}

export default TweetCard