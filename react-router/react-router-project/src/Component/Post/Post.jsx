import { Link } from "react-router-dom";


const Post = ({ post }) => {
    const { id, title, body } = post;
    return (
        <div>
            <h1>Post:  {id}</h1>
            <div>
                <h2>{title}</h2>
                <p>{body}</p>
                <Link to={`/posts/${id}`}><button>See Details</button></Link>
            </div>
        </div>
    );
};

export default Post;