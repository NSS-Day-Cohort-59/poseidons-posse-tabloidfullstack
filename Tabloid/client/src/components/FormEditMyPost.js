
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import { addComment, getPost } from "../modules/postManager";
import { getAllCategories } from "../modules/categoryManager";



export const EditMyPost = () => {

    const firebaseId = firebase.auth().currentUser.uid
    const [userChoices, update] = useState({
        title: "",
        content: "",
        imgUrl: "",
        categoryId: "",
        publicationDate: "",

    })
    const [post, setPosts] = useState();
    const [categories, setCategories] = useState([]);


    const { id } = useParams();
    const navigate = useNavigate();

    /*--------------------------------------------------------------*/
    //useEffect Methods
    useEffect(() => {
        getPost(id).then(setPosts);
    }, []);

    useEffect(() => {
        getAllCategories().then((category) => setCategories(category));
    }, []);




    //what we will send to the api
    const handleSubmitButton = (event) => {
        event.preventDefault()
        const productToSendToAPI = {
            title: userChoices.title,
            content: userChoices.content,
            categoryId: userChoices.categoryId,
            userProfileId: post.id
        }
        //sendign object to api by passing it in as an argument
        return addComment(productToSendToAPI)

            .then(() => {
                navigate(`/post/${parseInt(id.id)}/comments`)
            })
    }

    return (
        <form className="videoForm">
            <h2 className="videoForm__subject">Eddit Post</h2>




            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">title:</label>
                    <input
                        required autoFocus
                        type="string"
                        className="form-control"
                        placeholder="title of video"
                        value={userChoices.title}
                        onChange={
                            (evt) => {
                                const copy = { ...userChoices }
                                copy.title = (evt.target.value)
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="content">Content:</label>
                    <input

                        type="string"
                        className="form-control"
                        placeholder="content of video"
                        value={userChoices.content}
                        onChange={
                            (evt) => {
                                const copy = { ...userChoices }
                                copy.content = (evt.target.value)
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    {categories.map((category) => {
                        return <div key={category.id} className="radio">

                            <label className="label-img"> <img className="form-profile-img" src={category.category} alt="category"></img></label>
                            <input
                                name="category"
                                type="radio"
                                value={category.name}
                                checked={userChoices.categoryId === category.name}
                                onChange={
                                    (evt) => {
                                        const copy = { ...userChoices }
                                        copy.categoryId = (evt.target.value)
                                        update(copy)
                                    }
                                }
                            />
                        </div>
                    })}
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="imgUrl">Image Url:</label>
                    <input

                        type="string"
                        className="form-control"
                        placeholder="imgUrl of video"
                        value={userChoices.imgUrl}
                        onChange={
                            (evt) => {
                                const copy = { ...userChoices }
                                copy.imgUrl = (evt.target.value)
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="publicationDate">Publication Date:</label>
                    <input

                        type="date"
                        className="form-control"
                        placeholder="publicationDate of video"
                        value={userChoices.publicationDate}
                        onChange={
                            (evt) => {
                                const copy = { ...userChoices }
                                copy.publicationDate = Date((evt.target.value))
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>

            <button
                onClick={(clickEvent) => handleSubmitButton(clickEvent)}
                className="btn-primary">
                Save Changes
            </button>


        </form>
    )

}
