import React from 'react'
import './Match.css'
function Match(props) {

    const object = props.object
    const title = object.title
    const video = props.video

    return (

        <div className="match">
            <iframe src={video}
                className="video"
                width="800"
                height="500"
                title={title}
            />
            <h3>{title} (Highlights)</h3>

        </div>
    )
}

export default Match