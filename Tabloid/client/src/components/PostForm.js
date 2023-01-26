import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { addPost } from "../modules/postManager";
import { getAllCategories } from "../modules/categoryManager";
import firebase from "firebase/app";
import "firebase/auth";

export default function PostForm() {
  const firebaseId = firebase.auth().currentUser.uid;
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [userProfile, setUserProfile] = useState({});
  const [userInput, setUserInput] = useState({
    title: "",
    content: "",
    categoryId: 0,
    isApproved: 1,
    userProfileId: firebaseId,
  });

  useEffect(() => {
    getAllCategories().then((category) => {
      setCategories(category);
    });
  }, []);

  useEffect(() => {
    getCurrentUserByFirebaseId.then((profile) => {
      setCategories(profile);
    });
  }, []);

  const handleUserInput = (event) => {
    const copy = { ...userInput };
    copy[event.target.name] = event.target.value;
    setUserInput(copy);
  };

  const handleUserInputSelect = (event) => {
    const copy = { ...userInput };
    copy[event.target.name] = parseInt(event.target.value);
    setUserInput(copy);
  };

  const handleSavePost = (event) => {
    event.preventDefault();
    addPost(userInput)
      .then(() => navigate("/post"))
      .catch((err) => alert(`An error ocurred: ${err.message}`));
  };

  return (
    <Form onSubmit={handleSavePost}>
      <FormGroup>
        <Label for="newPost">New Post</Label>
      </FormGroup>
      <FormGroup>
        <Label for="title">Title</Label>
        <Input id="title" name="title" type="text" onChange={handleUserInput} />
      </FormGroup>
      <FormGroup>
        <Label for="content">Content</Label>
        <Input
          id="content"
          name="content"
          type="textarea"
          onChange={handleUserInput}
        />
      </FormGroup>
      <FormGroup>
        <Label for="category">Category</Label>
        <select
          required
          id="category"
          name="categoryId"
          onChange={handleUserInputSelect}
        >
          <option value={0}>Select a category</option>
          {categories.map((category) => {
            return (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            );
          })}
        </select>
      </FormGroup>
      <Button onClick={(clickEvent) => handleSavePost(clickEvent)}>Save</Button>
    </Form>
  );
}
