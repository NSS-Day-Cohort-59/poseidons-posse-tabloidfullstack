
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import { addComment, getPost, putPost } from "../modules/postManager";
import { getAllCategories } from "../modules/categoryManager";



export const EditMyPost = () => {


    const [userChoices, update] = useState({
        id: 0,
        title: "",
        content: "",
        imageLocation: "",
        categoryId: 0,
        publishDateTime: ""

    })
    const [post, setPosts] = useState();
    const [categories, setCategories] = useState([]);


    const { id } = useParams();
    const navigate = useNavigate();

    /*--------------------------------------------------------------*/
    //useEffect Methods
    useEffect(() => {
        getPost(id).then(update);
    }, []);

    useEffect(() => {
        getAllCategories().then((category) => setCategories(category));
    }, []);




    //what we will send to the api
    const handleSubmitButton = (event) => {
        event.preventDefault()
        const productToSendToAPI = {
            id: userChoices.id,
            title: userChoices.title,
            content: userChoices.content,
            imageLocation: userChoices.imageLocation,
            publishDateTime: userChoices.publishDateTime,
            categoryId: userChoices.categoryId,

        }
        //sendign object to api by passing it in as an argument
        return putPost(userChoices.id, productToSendToAPI)
            .then(() => {
                navigate(`/post/myPost/${id}`)
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

                            <label className="label-category"> {category.name}</label>
                            <input
                                name="number"
                                type="radio"
                                value={category.id}
                                checked={userChoices.categoryId === category.id}
                                onChange={
                                    (evt) => {
                                        const copy = { ...userChoices }
                                        copy.categoryId = Number((evt.target.value))
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
                    <label htmlFor="imageLocation">Image Url:</label>
                    <input

                        type="string"
                        className="form-control"
                        placeholder="imageLocation of video"
                        value={userChoices.imageLocation}
                        onChange={
                            (evt) => {
                                const copy = { ...userChoices }
                                copy.imageLocation = (evt.target.value)
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="publishDateTime">Publication Date:</label>
                    <input

                        type="date"
                        className="form-control"
                        name="name"
                        value={userChoices.publishDateTime}
                        onChange={
                            (evt) => {
                                const copy = { ...userChoices }
                                copy.publishDateTime = (evt.target.value)
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
