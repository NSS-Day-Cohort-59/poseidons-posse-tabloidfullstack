import firebase from "firebase/app";
import "firebase/auth";
import { getPostsFromUser } from "../modules/postManager";
import { Link } from "react-router-dom";
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
                return <ul className="postList-ul" key={post.id}>
                    <Link to={`/post/myPost/${post.id}`}>
                        <li><h3>{post.title}</h3></li>
                    </Link>
                    <li>{post?.category?.name}</li>
                    <li>By: {post?.userProfile?.fullName}</li>
                </ul>

            })}
        </div>


    </>)


}
export default MyPosts;



