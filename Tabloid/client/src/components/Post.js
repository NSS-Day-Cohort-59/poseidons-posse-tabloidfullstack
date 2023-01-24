import React from "react";
import { Link } from "react-router-dom";




const Post = ({ post }, { key }) => {

    return (<>
        <ul className="postList-ul" key={key}>
            <Link to={`${post.id}`}>
                <li><h3>{post.title}</h3></li>
            </Link>
            <li>{post?.category?.name}</li>
            <li>By: {post?.userProfile?.fullName}</li>
        </ul>
    </>);
};

export default Post;