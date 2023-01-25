import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Card } from "reactstrap";
import { getUserProfileDetails } from "../modules/userProfileManager";
import UserProfile from "./UserProfile";






const UserProfileDetails = () => {
    const [profile, setProfile] = useState(); 
    const {id} = useParams();

    useEffect(() => {
        getUserProfileDetails(id).then(setProfile);
      }, []);
      
      if (!profile.imageLocation) {
          profile.imageLocation = "https://robohash.org/numquamutut.png?size=150x150&set=set1";
      }
 
      return (
        <Card> 
    
            <div className="container">
                <div><img  class="image" src="./${profile.imageLocation}" /></div> 
                 <div>ImageUrl: {profile.imageLocation}</div>
                <UserProfile profile={profile} key={profile.id} />
                <div>Email: {profile.email}</div>
                <div>User Joined On: {profile.createDateTime}</div>
            </div>
       
        </Card>
      );
    }

export default UserProfileDetails;