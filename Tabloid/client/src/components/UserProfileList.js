import React, { useState, useEffect } from "react";
import { getAllUserProfiles } from "../modules/userProfileManager";
import UserProfile from "./UserProfile";

const UserProfileList = () => {
    const [profiles, setProfiles] = useState([]);

    const getUserProfiles = () => {
        getAllUserProfiles().then(profiles => setProfiles(profiles));
    };

    useEffect(() => {
        getUserProfiles();
    
    }, []);

    return (
        <div className="container">
          <div className="row justify-content-center">
            {profiles.map((profile) => (
              <UserProfile profile={profile} key={profile.id} />
            ))}
          </div>
        </div>
      );
    };


export default UserProfileList;