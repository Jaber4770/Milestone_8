import { useLoaderData } from "react-router-dom";
import SingleUser from "../SingleUser/SingleUser";
import "./User.css"

const User = () => {
    const userData = useLoaderData();
    return (
        <div>
            <h1>users {userData.length}</h1>  
            <div className="grid">
                {
                    userData.map(user => <SingleUser key={user.id} user={user}></SingleUser>)
                }
            </div>          
        </div>
    );
};

export default User;