import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Todo from './todo/page1';

function App() {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>

<div
        style={{
          backgroundImage: "url('/imgs/you.webp')",
      
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "100vh",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          filter: "blur(11px)", 
        }}
      ></div>
      <div className="container py-5">
        <h1 className="text-center mb-4">TODO APP</h1>
        <Todo />
      </div>
    </div>
  );
}

export default App;
