import { getToken } from "./authManager";

const _baseUrl = `/api/UserProfile`;

export const getAllUserProfiles = () => {
  return getToken().then((token) => {
    return fetch(`${_baseUrl}/GetAllUsers`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error(
          "An unknown error occurred while trying to get user profiles."
        );
      }
    });
  });
};

export const getCurrentUserByFirebaseId = (firebaseId) => {
  return getToken().then((token) => {
    return fetch(`${_baseUrl}/${firebaseId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();

        } else {
          throw new Error(
            "An unknown error occurred while trying get current user.",
          );
        }
      })
  })
}  