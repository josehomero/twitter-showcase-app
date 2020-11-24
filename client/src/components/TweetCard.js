import React from "react"

function TweetCard({ user }) {
    return (
        <div className="bg-info">
            <img src={user.profile_image_url} alt="Profile-pic" />
            <h3>{user.name}</h3> <p>@{user.screen_name}</p>
            <p>@{user.description}</p>
        </div>
    )

}

export default TweetCard