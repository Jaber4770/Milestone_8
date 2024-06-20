import './SingleUser.css'

const SingleUser = ({ user }) => {
    const { name, id, email, phone } = user;
    return (
        <div className='style'>
            <h3>name: {name}</h3>
            <p>email: {email}</p>
            <p>phone: {phone}</p>
            <p>id: {id}</p>
        </div>
    );
};

export default SingleUser;