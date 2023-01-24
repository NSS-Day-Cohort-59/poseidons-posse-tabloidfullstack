import { getToken } from "./authManager";

const _postUrl = "/api/post";


export const getAllPosts = () => {
    return getToken().then((token) => {
        return fetch(`${_postUrl}`, {
            method: "GET",
            heafers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error(
                        "An unknown error occurred while trying to get posts.",
                    );
                }
            });
    });
};

export const getPost = (id) => {
    return getToken().then((token) => {
        return fetch(`${_postUrl}/${id}`, {
            method: "GET",
            heafers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error(
                        "An unknown error occurred while trying to get posts details.",
                    );
                }
            });
    });
}