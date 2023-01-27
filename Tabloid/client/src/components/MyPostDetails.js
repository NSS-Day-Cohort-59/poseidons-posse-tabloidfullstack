import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { getPost } from "../modules/postManager";




const MyPostDetails = () => {
    const [post, setPosts] = useState();
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        getPost(id).then(setPosts);
    }, []);

    if (!post) {
        return null;
    }


    return (<>
        <div className="postDetails-div">
            <h2>{post.title}</h2>
            <img className="postDetails-img" src="https://robbreport.com/wp-content/uploads/2020/11/eleanor01.jpg?w=1000" alt="image"></img>
            <p>{post.content}</p>
            <ul className="postDetails-ul">
                <li className="postDetails-li">{post.publishDateTime}</li>
                <li className="postDetails-li">{post?.userProfile?.displayName}</li>
            </ul>
            <button className="all" onClick={() => { navigate(`/post/${post.id}/edit`) }}>Edit</button>

        </div>



    </>)

}

export default MyPostDetails;

