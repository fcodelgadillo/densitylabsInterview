import React, {useEffect, useState} from "react";
import axios from "axios";
import "./app.css"
import Form from "./components/Form";
import CommentsSection from "./components/CommentsSection";

const App = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [comment, setComment] = useState("");
    const [loaded, setLoaded] = useState(false)
    const [comments, setComments] = useState([]);
    const [idClicked, setIdClicked] = useState(null);


    useEffect(() => {
        axios.get('/api/v1/comments')
            .then((response) => {
                setComments(response.data.comments);
            })
            .catch((err) => console.log(err));
        setLoaded(true)
    }, [loaded]);


    function addComment ()  {
        axios.post('/api/v1/comment/new', {
            name: name,
            email: email,
            comment: comment
        })
        setLoaded(false)
    }

    function resetForm() {
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('text').value = '';
    }

    function getId(idValue) {
        setIdClicked(idValue)
    }

    function updateComment() {
        axios.put(`/api/v1/comment/${idClicked}`, {
            name: name,
            email: email,
            comment: comment
        }).catch((err) => console.error(err.response.data))
        console.log(idClicked);
        resetForm();
        setLoaded(false)
    }

    function toggle() {
        document.getElementById("send").classList.remove("hidden");
        document.getElementById("send").classList.add("view");
        document.getElementById("update").classList.remove("view");
        document.getElementById("update").classList.add("hidden");
    }

    function toggleReverse() {
        document.getElementById("send").classList.remove("view");
        document.getElementById("send").classList.add("hidden");
        document.getElementById("update").classList.remove("hidden");
        document.getElementById("update").classList.add("view");
    }

    function editComment(val) {
        document.getElementById('name').value = val.name;
        document.getElementById('email').value = val.email;
        document.getElementById('text').value = val.comment;
        toggleReverse();
        setName(val.name);
        setEmail(val.email);
        setComment(val.comment);
    }

    function deleteComment(id) {
        axios.delete(`/api/v1/comment/${id}`)
            .catch(err => console.log(err))
        setLoaded(false)
    }

    return(
        <div className="app">
            <div className="wrapper">

                <Form
                    setName={setName}
                    setEmail={setEmail}
                    setComment={setComment}
                    comments={comments}
                    addComment={addComment}
                    resetForm={resetForm}
                    updateComment={updateComment}
                    toggle={toggle}
                />

                <CommentsSection
                    comments={comments}
                    deleteComment={deleteComment}
                    editComment={editComment}
                    getId={getId}
                />
            </div>
        </div>
    )
}

export default App;
