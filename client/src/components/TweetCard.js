import React from "react"

function TweetCard({ user }) {
    return (
        <div className="bg-info">
            <img src={user.user.profile_image_url} alt="Profile-pic" />
            <h3>{user.user.name}</h3> <p>@{user.user.screen_name}</p>
            <p>@{user.user.description}</p>
        </div>
    )

}

export default TweetCard