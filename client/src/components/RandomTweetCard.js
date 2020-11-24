import React from "react"

entitiesMedia() {
    if(entities.media.length === 0) {
        return null
    } else { return src={entities.media[0].media_url} alt="pic" width='150' height='150'}
}

function RandomTweetCard({ user, id, fullText, entities }) {
    console.log(entities.media)
    return (
        <div key={user.id} className="bg-info">
            <img src={user.profile_image_url} alt="Profile-pic" />
            <h3>{user.name}</h3> <p>@{user.screen_name}</p>
            <p>{user.description}</p>
            <img {entitiesMedia} />
            {<p>{fullText}</p>}
        </div>
    )

}

export default RandomTweetCard