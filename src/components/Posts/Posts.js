import {useEffect, useState} from "react";
import {postService} from "../../services";
import {Post} from "../Post/Post";

const Posts = ({userId}) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAllByUserId(userId).then(({data})=>setPosts(data))
    }, [])
    return (
        <div>
            {posts.map(post=><Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};
