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

    export const getUserProfileDetails = (id) => {
        return fetch(`${_baseUrl}/GetUserByIdWithUserType/${id}`).then((res) => res.json());
    };

    export const addUserProfile = (newProfile) => {
       return fetch(`${_baseUrl}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProfile),
      }).then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("User profile already exists");
        }
      });
    };

    