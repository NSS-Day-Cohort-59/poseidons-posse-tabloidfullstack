import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import { getCurrentUserByFirebaseId } from "../modules/userProfileManager";
import { addComment } from "../modules/postManager";



export const AddComment = () => {

    const firebaseId = firebase.auth().currentUser.uid
    const [user, setUser] = useState([])
    const [userChoices, update] = useState({
        subject: "",
        content: "",

    })
    const id = useParams();
    const navigate = useNavigate();

    //Get Methods
    const getUser = () => {
        getCurrentUserByFirebaseId(firebaseId).then(user => setUser(user));
    }

    /*--------------------------------------------------------------*/
    //useEffect Methods
    useEffect(() => {
        getUser();
    }, []);





    //what we will send to the api
    const handleSubmitButton = (event) => {
        event.preventDefault()
        const productToSendToAPI = {
            subject: userChoices.subject,
            content: userChoices.content,
            postId: parseInt(id.id),
            userProfileId: user.id
        }
        //sendign object to api by passing it in as an argument
        return addComment(productToSendToAPI)

            .then(() => {
                navigate(`/post/${parseInt(id.id)}/comments`)
            })
    }

    return (
        <form className="videoForm">
            <h2 className="videoForm__subject">Adding a New Comment</h2>




            <fieldset>
                <div className="form-group">
                    <label htmlFor="subject">subject:</label>
                    <input
                        required autoFocus
                        type="string"
                        className="form-control"
                        placeholder="subject of video"
                        value={userChoices.subject}
                        onChange={
                            (evt) => {
                                const copy = { ...userChoices }
                                copy.subject = (evt.target.value)
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="content">Describtion:</label>
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

            <button
                onClick={(clickEvent) => handleSubmitButton(clickEvent)}
                className="btn-primary">
                Add Comment
            </button>


        </form>
    )

}