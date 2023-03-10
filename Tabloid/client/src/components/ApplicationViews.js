import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Hello from "./Hello";
import CategoryList from "./Categories/CategoryList";
import { AddCategoryForm } from "./Categories/AddCategory";
import PostList from "./PostList";
import PostForm from "./PostForm";
import UserProfileList from "./UserProfileList";
import UserProfileDetails from "./UserProfileDetails";
import PostDetails from "./PostDetails";
import MyPosts from "./MyPosts";
import Comments from "./CommentsOnPost";
import { AddComment } from "./AddComment";
import UserProfileForm from "./UserProfileForm";
import MyPostDetails from "./MyPostDetails";
import { EditMyPost } from "./FormEditMyPost";

export default function ApplicationViews({ isLoggedIn }) {
  return (
    <main>
      <Routes>
        <Route path="/">
          <Route
            index
            element={isLoggedIn ? <Hello /> : <Navigate to="/login" />}
          />
          <Route path="post">
            <Route index element={<PostList />} />
            <Route path=":id" element={<PostDetails />} />
            <Route path="myPosts" element={<MyPosts />} />
            <Route path="myPost/:id" element={<MyPostDetails />} />
            <Route path=":id/comments" element={<Comments />} />
            <Route path=":id/comments/add" element={<AddComment />} />
            <Route path=":id/edit" element={<EditMyPost />} />

          </Route>

          <Route path="login" element={<Login />} />
          <Route path="login/register" element={<UserProfileForm />} />
          <Route path="post/add" element={<PostForm />} />
          <Route path="Category" element={<CategoryList />} />
          <Route path="Category/add" element={<AddCategoryForm />} />
          <Route path="UserProfile" element={<UserProfileList />} />
          <Route path="userProfile">
            <Route index element={<UserProfileList />} />
            <Route path=":id" element={<UserProfileDetails />} />
          </Route>
          <Route path="*" element={<p>Whoops, nothing here...</p>} />
        </Route>
      </Routes>
    </main>
  );
}
