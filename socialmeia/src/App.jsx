import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './bootsrapcom/navabar';
import Sidebar from './bootsrapcom/sidebar';
import Footer from './bootsrapcom/footer';
import Create from './bootsrapcom/create';
import PostList from './bootsrapcom/postList';
import PostListProvider from'./store/posts';

import { useState } from 'react';
function App() {
const [activebtn,setactivebtn] = useState("Home");
  return (
    <PostListProvider>
    <div className="container m-0 p-0">
    <Sidebar activebtn={activebtn} setactivebtn={setactivebtn}/>
   
   <div className="content ">
   <Navbar className=" m-0 p-0"/>
   {
      activebtn == "Home" ?<PostList/>:<Create/>
    }
  
   <Footer/>
   </div>
     </div>
     </PostListProvider>
  )
}

export default App
