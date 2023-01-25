import React from "react";
import { Card, CardBody } from "reactstrap";

const UserProfile = ({profile}) => {
    return (
        <Card >
            <div>User Name: {profile.fullName} </div>
            <div>Display Name: {profile.displayName}</div>
            <div>{profile.userType.name}</div>
        </Card>
    )
}

export default UserProfile;