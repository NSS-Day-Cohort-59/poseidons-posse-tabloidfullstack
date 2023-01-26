import { getToken } from "./authManager";

const _postUrl = "/api/post";

export const getAllPosts = () => {
  return getToken().then((token) => {
    return fetch(`${_postUrl}`, {
      method: "GET",
      heafers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("An unknown error occurred while trying to get posts.");
      }
    });
  });
};

export const getPost = (id) => {
  return getToken().then((token) => {
    return fetch(`${_postUrl}/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error(
          "An unknown error occurred while trying to get posts details."
        );
      }
    });
  });
};

export const addPost = (userInput) => {
  return getToken().then((token) => {
    return fetch(`${_postUrl}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInput),
    }).then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else if (resp.status === 401) {
        throw new Error("Unauthorized");
      } else {
        throw new Error(
          "An unknown error occurred while trying to add a new post."
        );
      }
    });
  });
};
