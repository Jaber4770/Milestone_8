import { useLoaderData, useNavigate } from "react-router-dom";


const PostDetails = () => {
    const postData = useLoaderData();

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    }


    
    return (
        <div>
            <h1>Post Details: {postData.id}</h1>
            <h2>{postData.title}</h2>
            <p>{postData.body}</p>
            <span>{postData.userId}</span>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;