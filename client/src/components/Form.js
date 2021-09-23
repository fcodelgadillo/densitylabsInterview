import React, { Fragment } from "react";

const Form = ({ setName, setEmail, setComment, addComment, resetForm, updateComment, toggle }) => {
    return (
        <Fragment>
            <h1 className="header">Leave comments</h1>

            <div className="form">

                <div className="input-fields">
                    <input
                        id="name"
                        type="text"
                        className="input"
                        placeholder="Enter your name..."
                        onChange={(event)=>{setName(event.target.value)}}
                    />
                    <input
                        id="email"
                        type="email"
                        className="input"
                        placeholder="Enter your email..."
                        onChange={(event) => {setEmail(event.target.value)}}
                    />
                </div>

                <div className="msg">
                        <textarea
                            id="text"
                            placeholder="Comments..."
                            onChange={(event) => {setComment(event.target.value)}}
                        />
                    <button className="btn view" id="send" onClick={() => {addComment(); resetForm();}}>Send Comment</button>
                    <button
                        className="btn hidden"
                        id="update"
                        onClick={() => {updateComment(); toggle()}} >Update Comment</button>
                </div>
            </div>
        </Fragment>
    )
}

export default Form;
