import React from "react"

function RandomTweetCard({ user, id, text, entities }) {
    return (
        <div key={user.id} className="bg-info">
            <img src={user.profile_image_url} alt="Profile-pic" />
            <h3>{user.name}</h3> <p>@{user.screen_name}</p>
            <p>{user.description}</p>
            <img src={entities.urls.display_url} alt="Profile-pic" />
            <p>{text}</p>
        </div>
    )

}

export default RandomTweetCard