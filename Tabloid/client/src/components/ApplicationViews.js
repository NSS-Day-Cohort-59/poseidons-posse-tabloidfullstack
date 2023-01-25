import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Hello from "./Hello";
import CategoryList from "./CategoryList";
import PostList from "./PostList";

import UserProfileList from "./UserProfileList";

import PostDetails from "./PostDetails";
import UserProfileDetails from "./UserProfileDetails";


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
          </Route>


          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="Category" element={<CategoryList />} />
          <Route path="userProfile">
            <Route index element={<UserProfileList/>} />
            <Route path=":id" element={<UserProfileDetails  />} />
          </Route>
          <Route path="*" element={<p>Whoops, nothing here...</p>} />
        </Route>
      </Routes>
    </main>
  );
}


