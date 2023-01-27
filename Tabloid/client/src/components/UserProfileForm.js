import { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { useNavigate } from "react-router-dom";
import { addUserProfile } from "../modules/userProfileManager";


export const UserProfileForm = () => {
  
    const [profile, setProfile] = useState({
      firebaseUserId: "HKKYeMTYpqfdwXpfSw2AUvxnvsC3"
  });

    const handleInputChange = (evt) => {
        const value = evt.target.value;
        const key = evt.target.id;
    
        const profileCopy = { ...profile };
    
        profileCopy[key] = value;
        setProfile(profileCopy);
      };

      const navigate = useNavigate();

      const handleSave = (evt) => {
        evt.preventDefault();
        const newProfile = {
          firstName: profile.firstName,
          lastName: profile.lastName,
          displayName: profile.displayName,
          email: profile.email,
          };
    
    
        addUserProfile(newProfile).then(() => {
          setProfile(profile);
          navigate("/");
        });
      };
      return (
        <Form>
          <FormGroup>
            <Label for="firstName">First Name</Label>
            <Input type="text" name="firstName" id="firstName" placeholder="Enter your first Name"
              value={profile.firstName}
              onChange={handleInputChange} />
          </FormGroup>
          <FormGroup>
            <Label for="lastName">Last Name</Label>
            <Input type="text" name="lastName" id="lastName" placeholder="Enter your last Name"
              value={profile.lastName}
              onChange={handleInputChange} />
          </FormGroup>
          <FormGroup>
            <Label for="displayName">Display Name</Label>
            <Input type="text" name="displayName" id="displayName" placeholder="Enter your Display Name"
              value={profile.displayName}
              onChange={handleInputChange} />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="text" name="email" id="email" placeholder="Enter your current email" 
              value={profile.email}
              onChange={handleInputChange} />
          </FormGroup>
          
          <Button className="btn btn-primary" onClick={handleSave}>Submit</Button>
        </Form>
      );
    };
    
    export default UserProfileForm;



