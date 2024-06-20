import { Link } from 'react-router-dom';
import './SingleUser.css'

const SingleUser = ({ user }) => {
    const { name, id, email, phone } = user;
    return (
        <div className='style'>
            <h3>name: {name}</h3>
            <p>email: {email}</p>
            <p>phone: {phone}</p>
            <Link to={`/user/${id}`}>See Details</Link>
        </div>
    );
};

export default SingleUser;