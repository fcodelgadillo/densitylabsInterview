import React from "react";

const CommentsSection = ({ comments, deleteComment, editComment, getId }) => {
    return (
        <ul className="comments">
            {comments.map((val) => {
                return (
                    <li key={val.name}>
                        <div className="comment">
                            <p>{val.name}</p>
                            <p>{val.email}</p>
                            <br/>
                            <p>{val.comment}</p>
                        </div>
                        <button className="btn edit" id="edit" onClick={() => {editComment(val); getId(val._id)}}>Edit</button>
                        <button className="btn delete" id="delete" onClick={() => {deleteComment(val._id)}}>Delete</button>
                    </li>
                )
            })}
        </ul>
    )
}

export default CommentsSection;
