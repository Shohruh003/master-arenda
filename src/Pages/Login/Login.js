import React, {useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import { HomeContext } from "../../context/homeContext";
import axios from "axios";
// import './login.css'


export const Login = () => {
  const {token, setToken} = useContext(HomeContext);
  const navigate = useNavigate();
  
  const handleUserLogin = (evt) => {
    evt.preventDefault();
    const [gmail, password] = evt.target.elements;
    const formData = new FormData();
    formData.append('gmail', gmail.value);
    formData.append('password', password.value);

    axios.post('http://165.227.142.114:8000/api/user/login', formData)
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
          <p className="signIn-text mb-3">Do not you have an account? <Link className="signIn-link" to='/register'>Sign up</Link></p>

              <input className="signIn-input form-control mb-3" type="email" name="gmail" placeholder="Email" />

              <input className="signIn-input form-control mb-3" type="password" name="password" placeholder="Password" />

            <button className="signIn-button btn btn-primary" type="submit">Next step</button>
          </form>
  );
}