import { createContext, useReducer } from "react";


export const PostListContext = createContext({
  postList:[],
  addIntialPost:()=>{},
  addPost : ()=>{},
  deletePost : ()=>{},
});

const postReducer = (currPostList, action) => {
  let newPost = currPostList;
  if(action.type === "DELETE_POST"){
    newPost = currPostList.filter(
      (post) => post.id !== action.payload.postId
    )
  }
  else if(action.type === "ADD_INTIAL_POST"){
    newPost = action.payload.post;

  }
  else if(action.type === "ADD_POST"){
    newPost = [action.payload,...currPostList]

  }
  return newPost;
   };
//**// */
export function PostListProvider({ children }) {
  const [postList, dispatchPostList] = useReducer(postReducer, []);

const addIntialPost=(post)=>{
  dispatchPostList({
    type: "ADD_INTIAL_POST",
    payload:{
      post
    },
  });

}

  const addPost =(useId,title,description,tags,reaction) => 
    dispatchPostList({
      type:"ADD_POST",
      payload:{
        id: Date.now(),
        title: title,
        description:description,
        reactions: reaction,
        userId: useId,
        tags: [tags],

      },
    });

  const deletePost = (postId) => {
    dispatchPostList({
      type:"DELETE_POST",
payload:{
  postId,
},
    });
  
  };

  return (
    <PostListContext.Provider value={{ postList, addPost, deletePost,addIntialPost }}>
      {children}
    </PostListContext.Provider>
  );
}
// const defaultPostList = [
  // {
  //   id: 1,
  //   title: "Love Nature",
  //   description: "Today I went to ARAKU VALLEY. Beautiful nature I saw ever!",
  //   reactions: 2,
  //   userId: "bhavana_V",
  //   tags: ["Nature", "arakuvalley"],
  // },
  // {
  //   id: 2,
  //   title: " Coding",
  //   description: "Today I went to ARAKU VALLEY. Beautiful nature I saw ever!",
  //   reactions: 2,
  //   userId: "bhargav",
  //   tags: ["Nature", "arakuvalley"],
  // },
// ];
export default PostListProvider;
