import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { UseAuth } from "../../Hooks/UseAuth";

export const Login = () => {
  const { token, setToken } = UseAuth()

  const navigate = useNavigate();
  
  const handleUserLogin = (evt) => {
    evt.preventDefault();
    const [phone, password] = evt.target.elements;
    const formData = new FormData();
    formData.append('phone_number', phone.value);
    formData.append('password', password.value);


    axios.post('https://pro.zirapcha.uz/api/user/login', formData, {
      headers:{
          Authorization:token.token,
      }
    })
    .then((data) => {
      if (data.data) {
        setToken(data.data);
        navigate('/');
      }
    })
    .catch((error) => console.log(error));
  };

  return (      
          <form className="signIn-form" onSubmit={handleUserLogin}>
            <h1 className="signIn-heading">Sign in</h1>
            <p className="signIn-text mb-3">Do not you have an account? <NavLink className="signIn-link" to='register'>Sign up</NavLink></p>
            <p className="signIn-text mb-3">Are you an admin? <NavLink className="signIn-link" to='adminLogin'>Sign in</NavLink></p>

              <input className="signIn-input form-control mb-3" type="number" name="phone_number" placeholder="Phone" required/>

              <input className="signIn-input form-control mb-3" type="password" name="password" placeholder="Password" required/>

              <button className="signIn-button btn btn-primary" type="submit">Next step</button>
            </form>
  );
}