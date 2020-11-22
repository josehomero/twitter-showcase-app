import React from "react"

function RandomTweetCard({ user, id, full_text, entities }) {
    return (
        <div key={user.id} className="bg-info">
            <img src={user.profile_image_url} alt="Profile-pic" />
            <h3>{user.name}</h3> <p>@{user.screen_name}</p>
            <p>{user.description}</p>
            {<img src={entities.media.media_url} alt="pic" />}
            <p>{full_text}</p>
        </div>
    )

}

export default RandomTweetCard