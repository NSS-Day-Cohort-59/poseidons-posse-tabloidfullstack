import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
// import { Card } from "reactstrap";
// import { getUserProfileDetails } from "../modules/userProfileManager";
// import UserProfile from "./UserProfile";



// const UserProfileDetails = ({profile}) => {
  
    

  

//   if (!profile.imageLocation) {
//     profile.imageLocation = "https://robohash.org/numquamutut.png?size=150x150&set=set1";
//   }

//   return (
//     <Card> 

//         <div className="container">
//             <div><img  class="image" src="./${profile.imageLocation}" /></div>
//             <UserProfile profile={profile} key={profile.id} />
//             <div>Email: {profile.email}</div>
//             <div>User Joined On: {profile.createDateTime}</div>
//         </div>
   
//     </Card>
//   );
// };

// export default UserProfileDetails;

export const UserProfileDetails = () => {
    const {id} = useParams()
    const [profile, updateProfile] = useState() 

    useEffect(
        () => {
            fetch(`http://localhost:8088/customers/${customerId}?_expand=user`)
            .then(res => res.json())
            .then((data) => {
                
                updateCustomer(data)
            })
        },
        [customerId]
    ) 
 
    return <section className="customer">
            <header className="customer__header">{customer?.user?.name}</header>
            <div>Email: {customer?.user?.email}</div> 
            <div>Loyalty Number: {customer?.loyaltyNumber}</div>
            
        </section>
}