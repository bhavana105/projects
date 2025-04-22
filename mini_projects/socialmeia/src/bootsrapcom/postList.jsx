import { useContext, useState } from "react";
import Post from "./post";
import { PostListContext } from "../store/posts";
import Messegs from './msg';
// import { PostList as postListData } from "../store/posts";

function PostList() {
  const { postList,addIntialPost } = useContext(PostListContext); 
  const [dataFetch,setDataFetch] = useState(false);
  

  const handleGetPosts = () =>{
    fetch('https://dummyjson.com/users')
    .then(res => res.json())
    .then((data)=>{
      addIntialPost(data.posts);
      setDataFetch(true);
      console.log("click");

    });
  }

  return (
    <>
 {
(!postList || postList.length === 0) && <Messegs handleGetData={handleGetPosts} />
 }
      {postList.map((post) => (
        <Post key={post.id} post={post} />

      ))}

    </>


  );
}

export default PostList;
