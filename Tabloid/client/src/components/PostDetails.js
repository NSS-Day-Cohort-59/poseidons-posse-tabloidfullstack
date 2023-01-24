import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getPost } from "../modules/postManager";




const PostDetails = () => {
    const [post, setPosts] = useState();
    const { id } = useParams();

    useEffect(() => {
        getPost(id).then(setPosts);
    }, []);

    if (!post) {
        return null;
    }


    return (<>
        <div className="postDetails-div">
            <h2>{post.title}</h2>
            <img className="postDetails-img" src={post.imageLocation} alt="image"></img>
            <p>{post.content}</p>
            <ul className="postDetails-ul">
                <li className="postDetails-li">{post.publishDateTime}</li>
                <li className="postDetails-li">{post?.userProfile?.displayName}</li>
            </ul>
        </div>


    </>)

}

export default PostDetails;

