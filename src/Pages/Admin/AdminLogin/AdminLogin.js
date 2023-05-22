import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import { UseAdmin } from "../../../Hooks/UsAdmin";
import { Private } from "../../../Private";
import { Admin } from "../Admin";

export const AdminLogin = () => {
  const { adToken, setAdToken } = UseAdmin()

  const navigate = useNavigate();
  
  const handleAdminLogin = (evt) => {
    evt.preventDefault();
    const [phone, password] = evt.target.elements;
    const formData = new FormData();
    formData.append('phone_number', phone.value);
    formData.append('password', password.value);

    axios.post('https://pro.zirapcha.uz/api/admin/login', formData)
    .then((data) => {
      if (data.data) {
        setAdToken(data.data);
        navigate('/');
      }
    })
    .catch((error) => console.log(error));
  };

  return (      
          <form className="signIn-form" onSubmit={handleAdminLogin}>
            <h1 className="signIn-heading">Войти</h1>
            <p className="signIn-text mb-3">Вы пользователь? <Link className="signIn-link" to='/'>Для пользователя</Link></p>

              <input className="signIn-input form-control mb-3" type="number" name="phone_number" placeholder="Phone" required/>

              <input className="signIn-input form-control mb-3" type="password" name="password" placeholder="Password" required/>

              <button className="signIn-button btn btn-primary" type="submit" onClick={() => {
                if (!adToken) {
                  return <Admin/>
                } 
                return <Private/>
              }}>Входить</button>
            </form>
  );
}