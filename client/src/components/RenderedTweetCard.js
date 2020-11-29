import React from "react"



function RenderedTweetCard({ user, fullText, entities }) {
    function entitiesMedia() {
        if(!entities.media) {
            return
        } else { return entities.media[0].media_url }
    }

    return (
        <div className="bg-info">
            <img src={user.profile_image_url} alt="Profile-pic" />
            <h3>{user.name}</h3> <p>@{user.screen_name}</p>
            <p>{user.description}</p>
             <img src={entitiesMedia()} width='150' height='150'/>
            {<p>{fullText}</p>}
        </div>
    )

}

export default RenderedTweetCard