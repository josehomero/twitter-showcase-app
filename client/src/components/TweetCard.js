import React from "react"

function TweetCard(props) {




        return(<div>

            <img src="https://pbs.twimg.com/profile_images/1021964480593440768/0LloaAKk_normal.jpg" alt="andy's-pic"/>
            <h3>props.name</h3>
            <p>props.screenName</p>
        </div>)
    
}

export default TweetCard