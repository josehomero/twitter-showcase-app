import React from "react"

function TweetCard({ user, id, text }) {
    return (
        <div key={user.id} className="bg-info" >
            <img src={user.profile_image_url} alt="Profile-pic" />
            <h3>{user.name}</h3> <p>@{user.screen_name}</p>
            
            <p>@{user.description}</p>
            <p>{text}</p>
        </div>
    )

}

export default TweetCard