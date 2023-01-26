import { getToken } from "./authManager";

const _apiUrl = "/api/category";

export const getAllCategories = () => {
  return getToken().then((token) => {
    return fetch(_apiUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error(
          "An unknown error occurred while trying to get categories"
        );
      }
    });
  });
};

export const postNewCategory = (newCategory) => {
  return fetch("/api/Category", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newCategory),
  }).then((resp) => {
    if (resp.ok) {
      return resp.json();
    } else {
      throw new Error("This category already exists");
    }
  });
};
