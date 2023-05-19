import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { HomeContext } from "../../../context/homeContext";
import Img from "../../../Images/62550852.jpg"
import axios from "axios";
import './addCategory.css'

export const AddCategory = () => {
  const {token, setToken} = useContext(HomeContext);
  const navigate = useNavigate();
  
  const handleAddCategory = (evt) => {
    evt.preventDefault();
    const formData = new FormData();
    const [name, price, character, image] = evt.target.elements;

    formData.append('name', name.value);
    formData.append('rental_price', price.value);
    formData.append('technical_characteristics', character.value);
    formData.append('images', image.files[0]);



    axios.post('http://165.227.142.114:8000/api/category/create', formData,{
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
    <div className={`addCategory`}>
      <div className="addCategory">
        <div className="addCategory-inner">
          <div className="addCategory-imgDiv">
              <img className="addCategory-contentImg" src={Img} alt="book" width={350} height={266} />
              <label className="addCategory-label">Add Category image
                <input className="addCategory-button" type="file" name="images" placeholder="Category image" required/>
              </label>
          </div>
          
          <form className="addCategory-form" onSubmit={handleAddCategory}>
          <h2 className="addCategory-heading">Add Category</h2>

            
              <input className="addCategory-input" type="text" name="name" placeholder="Name"  required/>

            
              <input className="addCategory-input" type="number" name="rental_price" placeholder="Price"  required/>

            
              <textarea className="addCategory-input" name="technical_characteristics" placeholder="Character"  required/>

            <button className="addCategory-button" type="submit">Next step</button>
          </form>
        </div>
      </div>
    </div>
  );
}