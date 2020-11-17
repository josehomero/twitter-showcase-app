import React from "react"

function TweetCard({ user }) {
    return (
        <div key={user.id}>
            <img src={user.profile_image_url} alt="Profile-pic"/>
            <h3>{user.name}</h3>
            <p>@{user.screen_name}</p>
        </div>
    )

}

export default TweetCard