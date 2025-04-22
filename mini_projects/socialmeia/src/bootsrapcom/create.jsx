import { useContext, useRef } from "react";
import {PostListContext} from'../store/posts';

function Create (){
  const {addPost} = useContext(PostListContext);
  const userIdElement = useRef("");
  const titleElement  = useRef("");
  const descriptionElement  = useRef("");
  const reactionElement  = useRef("");

  const tagsElement  = useRef("");
const handleAddPosts = (e) =>{
e.preventDefault();
const useId = userIdElement.current.value;
const title = titleElement.current.value;
const description = descriptionElement.current.value;
const tags = tagsElement.current.value.split("  ");
const reaction = reactionElement.current.value
// console.log(`${useId},${title},${description},${tags}`)

userIdElement.current.value="";
titleElement.current.value="";
descriptionElement.current.value="";
tagsElement.current.value="";
reactionElement.current.value="";
addPost(useId,title,description,tags,reaction);
}
  return((
    <>
    <form onSubmit={handleAddPosts}>
  <div className="mb-3">
    <label for="text" className="form-label">UserName</label>
    <input type="text"
    ref={userIdElement }
     className="form-control" id="userid"placeholder="Enter user Name" />
  </div>
  <div className="mb-3">
    <label for="text" className="form-label">Title</label>
    <input type="text" 
        ref={titleElement }
        className="form-control" id="title"placeholder="Enter user Title" />
  </div>
  <div className="mb-3">
    <label for="text" className="form-label" >Description</label>
    <textarea type="textarea"
        ref={descriptionElement }
className="form-control" id="description"placeholder="Enter user Name" rows="4" />
  </div>
  <div className="mb-3">
    <label for="text" className="form-label">Tags</label>
    <input type="text" 
        ref={tagsElement }
        className="form-control" id="tags"placeholder="Enter user Name" />
  </div>
  <div className="mb-3">
    <label for="text" className="form-label">Reaction</label>
    <input type="text" 
        ref={reactionElement }
        className="form-control" id="tags"placeholder="Enter user Name" />
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </>
  ))
}

export default Create;