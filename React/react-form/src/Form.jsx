import { useState } from "react";

export default function Form() {
  let [formData, setFormData] = useState({
    fullName: "",
    userName: "",
  });
  //   let formHandler = (event) => {
  //     setFirstName(event.target.value);
  //   };
  //   let formHandler1 = (event) => {
  //     setuserName(event.target.value);
  //   };
  let hadleInputchange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    }); 
  };
  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData)
    setFormData({
      fullName: "",
      userName: "",
      password:""
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Full name</label>
      <input
        type="text"
        placeholder="Enter name"
        value={formData.fullName}
        id="name"
        name="fullName"
        onChange={hadleInputchange}
      />
      <br />
      <br />
      <label htmlFor="Username">Username</label>
      <input
        type="text"
        placeholder="Enter Username"
        value={formData.userName}
        id="Username"
        name="userName"
        onChange={hadleInputchange}
      />      <br />    
      <label htmlFor="password">Password</label>
      <input
        type="password"
        placeholder="Enter password"
        value={formData.password}
        id="password"
        name="password"
        onChange={hadleInputchange}
      />
      <button>Submit</button>
    </form>
  );
}
