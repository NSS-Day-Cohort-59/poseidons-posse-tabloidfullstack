import { useState, useEffect } from "react"
import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getCommentsOnPost, getPost } from "../modules/postManager";




const Comments = () => {

    const [post, setPosts] = useState([]);
    const [comments, setcomments] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();
    //Get Methods
    const getcomments = () => {
        getCommentsOnPost(id).then(comments => setcomments(comments));
    }

    /*--------------------------------------------------------------*/
    //useEffect Methods
    useEffect(() => {
        getcomments();
    }, []);

    useEffect(() => {
        getPost(id).then(setPosts);
    }, []);





    return (<>

        <div className="comments">
            <h1>{post.title}</h1>
            <button className="all" onClick={() => { navigate(`/post/${id}/comments/add`) }}>Add a Comment</button>
            {comments.map((com) => {

                return <ul className="CommentsList-ul" key={com.id}>

                    <li><h3>{com.subject}</h3></li>

                    <li>{com.content}</li>
                    <li>By: {com?.userProfile?.fullName}</li>
                    <li>{new Date(com.createDateTime).toLocaleDateString()}</li>
                </ul>
            })}

        </div>
    </>);
};

export default Comments;