import React, { useEffect, useState } from "react";
import { getAllPosts } from "../modules/postManager";
import Post from "./Post";


const PostList = () => {
    const [posts, setPosts] = useState([]);

    //Get Methods
    const getPosts = () => {
        getAllPosts().then(posts => setPosts(posts));
    }

    /*--------------------------------------------------------------*/
    //useEffect Methods
    useEffect(() => {
        getPosts();
    }, []);




    return (<>
        <div className="postList-div">
            {posts.map((post) => {
                return <Post post={post} key={post.id} />

            })}
        </div>


    </>)


}
export default PostList;