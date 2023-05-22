import React, {useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import { HomeContext } from "../../context/homeContext";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

    axios.post('https://pro.zirapcha.uz/api/user/register', formData)
    .then((data) => {
      if (data.data) {
        setToken(data.data);
        toast.success('Вы вошли в систему !');
        navigate('/');
      }
    })
    .catch((error) => {
      if (error) {
        toast.error('Ошибка !');
      }
    });
};

  return (
    <div>
      <h2 className="register-heading">Регистр</h2>
        <p className="register-text mb-3">Уже есть аккаунт? <Link className="register-link" to='/'>Войти</Link></p>
          <form className="register-form" onSubmit={handleUserRegister}>

            
              <input className="form-control mb-3" type="text" name="name" placeholder="Name" required/>

            
              <input className="form-control mb-3" type="number" name="phone_number" placeholder="Phone" required/>

            
              <input className="form-control mb-3" type="email" name="gmail" placeholder="Email" required/>

            
              <input className="form-control mb-3" type="password" name="password" placeholder="Password" required/>

            <button className="btn btn-primary" type="submit" >Входить</button>
            <ToastContainer />
          </form>
    </div>
  );
}

