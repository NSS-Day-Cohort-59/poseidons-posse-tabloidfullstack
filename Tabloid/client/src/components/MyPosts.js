import firebase from "firebase/app";
import "firebase/auth";
import { getPostsFromUser } from "../modules/postManager";
import Post from "./Post";
import { useState, useEffect } from "react";




const MyPosts = () => {
    const [posts, setPosts] = useState([]);

    const firebaseId = firebase.auth().currentUser.uid
    //Get Methods
    const getMyPosts = () => {
        getPostsFromUser(firebaseId).then(posts => setPosts(posts));
    }

    /*--------------------------------------------------------------*/
    //useEffect Methods
    useEffect(() => {
        getMyPosts();
    }, []);




    return (<>
        <div className="myPostList-div">
            {posts.map((post) => {
                return <Post post={post} key={post.id} />

            })}
        </div>


    </>)


}
export default MyPosts;



