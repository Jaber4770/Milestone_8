import { Link, useNavigate } from "react-router-dom";


const Post = ({ post }) => {
    const { id, title, body } = post;
    const navigate = useNavigate()

    const handleDetails = () => {
        navigate(`/posts/${id}`);
    }
    return (
        <div>
            <h1>Post:  {id}</h1>
            <div>
                <h2>{title}</h2>
                <p>{body}</p>
                <Link to={`/posts/${id}`}><button>See Details</button></Link>
                <button onClick={handleDetails}>Details</button>
            </div>
        </div>
    );
};

export default Post;