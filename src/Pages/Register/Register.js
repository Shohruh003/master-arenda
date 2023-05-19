import React, {useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import { HomeContext } from "../../context/homeContext";
import axios from "axios";
// import './register.css'

export const Register = () => {
  const { setToken } = useContext(HomeContext);
  const navigate = useNavigate();
  
  const handleUserRegister = (evt) => {
    evt.preventDefault();
    const formData = new FormData();
    
    const [name, number, gmail, password] = evt.target.elements;
    
    formData.append('name', name.value);
    formData.append('phone_number', number.value);
    formData.append('gmail', gmail.value);
    formData.append('password', password.value);

    axios.post('http://165.227.142.114:8000/api/user/register', formData)
    .then((data) => {
      if (data.data) {
        setToken(data.data);
        navigate('/');
      }
    })
    .catch((error) => console.log(error));
  };

  return (
    <div>
      <h2 className="register-heading">Sign up</h2>
        <p className="register-text mb-3">Already have an account? <Link className="register-link" to='/login'>Sign in</Link></p>
          <form className="register-form" onSubmit={handleUserRegister}>

            
              <input className="form-control mb-3" type="text" name="name" placeholder="Name" />

            
              <input className="form-control mb-3" type="number" name="phone_number" placeholder="Phone" />

            
              <input className="form-control mb-3" type="email" name="gmail" placeholder="Email" />

            
              <input className="form-control mb-3" type="password" name="password" placeholder="Password" />

            <button className="btn btn-primary" type="submit">Next step</button>
          </form>
    </div>
  );
}