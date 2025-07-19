import './App.css'
import { useState } from "react"

function App() {
  const [user,setUser] = useState({
    firstName:"",
    lastName:"",
    email:"",
    phonenumber:"",
    password: "",         
    confirmpassword:""
  });

const handleUser = (e) => {
  const { name, value } = e.target;
  setUser((prevUser) => ({
    ...prevUser,
    [name]: value
  }));
};

const handleSubmit = (e) =>{
e.preventDefault();
 if (user.password !== user.confirmpassword) {
  alert("Passwords do not match!");
  return;
} 
alert("successfully submitted!");

setUser({
  firstName: "",
  lastName: "",
  email: "",
  phonenumber: "",
  password: "",
  confirmpassword: ""
});

console.log("User Submitted:", user);
}

  return (
    <div className='container' style={{marginTop:"10px"}}>
<h1>Registration Form</h1>
      <form onSubmit={handleSubmit} className='formfield'>
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={user.firstName}
          placeholder="Enter first name"
          onChange={handleUser}
          required
        />

        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={user.lastName}
          placeholder="Enter last name"
          onChange={handleUser}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={user.email}
          placeholder="Enter email"
          onChange={handleUser}
          required
        />

        <label>Phone Number </label>
        <input
          type="tel"
          name="phonenumber"
          value={user.phonenumber}
          placeholder="Enter phone number"
          maxLength="10"
          pattern="[0-9]{10}"
          onChange={handleUser}
          required
        />

        <label>Password </label>
        <input
          type="password"
          name="password"
          value={user.password }
          placeholder="Enter password"
          onChange={handleUser}
          autoComplete="off"
          minLength="8"
          required
        />

        <label>Confirm Password </label>
        <input
          type="password"
          name="confirmpassword"
          value={user.confirmpassword }
          placeholder="Confirm password"
          onChange={handleUser}
          required
          autoComplete="off"
        />

        <button type="submit">Submit</button>
      </form>

    </div>
  )
}

export default App
