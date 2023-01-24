import React from "react";





const Post = ({ post }, { key }) => {
    return (<>
        <ul className="postList-ul" key={key}>
            <li><h3>{post.title}</h3></li>
            <li>{post?.category?.name}</li>
            <li>By: {post?.userProfile?.fullName}</li>
        </ul>
    </>);
};

export default Post;