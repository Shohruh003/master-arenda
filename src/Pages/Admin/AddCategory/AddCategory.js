import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Img from "../../../Images/62550852.jpg"
import axios from "axios";
import './addCategory.css'
import { UseAdmin } from "../../../Hooks/UsAdmin";
import { TrueModal } from "../../../components/Modal/TrueModal";

export const AddCategory = () => {
  const [trueModal, setTrueModal] = useState(false);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [charakter, setCharakter] = useState('');
  const {adToken, setAdToken} = UseAdmin()
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleCharacterChange = (event) => {
    setCharakter(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('rental_price', price);
    formData.append('technical_characteristics', charakter);
    formData.append('images', image);

    console.log(formData);

    axios.post('https://pro.zirapcha.uz/api/category/create', formData,{
      headers:{
          Authorization:adToken.data.token,
      }
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error sending data: ', error);
      });
  };

  return (
    <div className={`addCategory`}>
      <div className="addCategory">
        <div className="addCategory-inner">
          <div className="addCategory-imgDiv">
              <img className="addCategory-contentImg" src={Img} alt="book" width={350} height={266} />
              <label className="addCategory-label">Add Category image
                <input className="addCategory-button" type="file" name="images" accept="image/*" onChange={handleImageChange} placeholder="Category image" required/>
              </label>
          </div>
          
          <form className="addCategory-form" onSubmit={handleSubmit}>
          <h2 className="addCategory-heading">Add Category</h2>

            
              <input className="addCategory-input" value={name} type="text" placeholder="Name"  required onChange={handleNameChange} />

            
              <input className="addCategory-input" value={price} name="rental_price" placeholder="Price"  required onChange={handlePriceChange} />

            
              <textarea className="addCategory-input" value={charakter} placeholder="Character"  required onChange={handleCharacterChange} />

            <button className="addCategory-button" type="submit" onClick={() => {
              setTrueModal(true)
            }}>Next step</button>
          </form>

          <TrueModal trueModal={trueModal} setTrueModal={setTrueModal} />
        </div>
      </div>
    </div>
  );
}