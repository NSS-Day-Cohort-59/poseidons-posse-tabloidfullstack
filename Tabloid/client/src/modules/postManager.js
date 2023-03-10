import { getToken } from "./authManager";

const _postUrl = "/api/post";

export const getAllPosts = () => {
  return getToken().then((token) => {
    return fetch(`${_postUrl}`, {
      method: "GET",
      headers: {
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
    return fetch(`${_postUrl}/add`, {
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

export const putPost = (id, post) => {
    return getToken().then((token) => {
        return fetch(`${_postUrl}/${id}`, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(post)
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else if (res.status === 401) {
                    throw new Error("Unauthorized");
                } else {
                    throw new Error(
                        "An unknown error occurred while trying to put post.",
                    );
                }
            });
    });
}



export const getPostsFromUser = (firebaseId) => {
  return getToken().then((token) => {
    return fetch(`${_postUrl}/myPosts/${firebaseId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error(
          "An unknown error occurred while trying to save a new quote."
        );
      }
    });
  });
};

export const getCommentsOnPost = (id) => {
<<<<<<< HEAD
    return getToken().then((token) => {
        return fetch(`${_postUrl}/comments/${id}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error(
                        "An unknown error occurred while trying to get posts comments.",
                    );
                }
            });
=======
  return getToken().then((token) => {
    return fetch(`${_postUrl}/comments/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error(
          "An unknown error occurred while trying to get posts comments."
        );
      }
>>>>>>> fe32a898932d8948d6c2633747209eed5f9c7635
    });
  });
};

export const addComment = (comment) => {
  return getToken().then((token) => {
    return fetch(`${_postUrl}/comment`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    }).then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else if (resp.status === 401) {
        throw new Error("Unauthorized");
      } else {
        throw new Error(
          "An unknown error occurred while trying to save a new comment."
        );
      }
    });
  });
};
