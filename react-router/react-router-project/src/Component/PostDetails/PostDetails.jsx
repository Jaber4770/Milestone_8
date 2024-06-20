import { useLoaderData } from "react-router-dom";


const PostDetails = () => {
    const postData = useLoaderData();
    return (
        <div>
            <h1>Post Details: {postData.id}</h1>
            <h2>{postData.title}</h2>
            <p>{postData.body}</p>
            <span>{postData.userId}</span>
        </div>
    );
};

export default PostDetails;