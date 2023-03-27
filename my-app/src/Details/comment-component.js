import React from "react";


const CommentComponent = () => {
    return(
        <div className={"card my-3"}>
            <div className={"card-header"}>
                <img
                    src={"https://www.georgiaaquarium.org/wp-content/uploads/2018/09/beluga-whale-webcam-9.jpg"}
                    className={"img-thumbnail rounded-circle"} width={55} height={55}/>
                Username
            </div>
            <div className={"card-body"}>
                This is a comment that a user made
            </div>
            <div className={"card-footer"}>
                <div className={"row"}>
                    <div className={"col"}><i className={"far fa-heart"}></i> Like</div>

                </div>
            </div>
        </div>
    )
}

export default CommentComponent