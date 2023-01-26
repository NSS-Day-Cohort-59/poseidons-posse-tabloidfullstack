import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";



const UserProfile = ({profile}) => {
    return (
        <Card >
            <div>User Name: {profile?.fullName} </div>
            <div>Display Name: {profile?.displayName}</div>
            <div>{profile?.userType.name}</div>
            <Link to={`/userProfile/${profile?.id}`}>View Details</Link>
            
        </Card>
    )
}

export default UserProfile;