import {  useContext } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { PostListContext } from "../store/posts";
// import { PostList} from "../store/posts";

function Post ({post}){

  const{deletePost} = useContext(PostListContext);
 
  return(
    <>
 <div className="card" style={{width: "18rem"}}>
  {/* <img src="..." className="card-img-top" alt="..."/> */}
  <div className="card-body">
  <span className="position-absolute top-10 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>deletePost(post.id)}>
    <RiDeleteBin6Fill />
    </span>

    <h5 className="card-title">{post.title}</h5>
    
    <p className="card-text">{post.description}</p>
    <a href="#">
      {
        post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary hashtag">
            {tag}
          </span>
        ))
      }
    </a>

    
    <div className="alert alert-success" role="alert">
{`you can see ${post.reactions} reacted to your post `}</div>
  </div>
</div>
    </>
  )
}
export default Post;
