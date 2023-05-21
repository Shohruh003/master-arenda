import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Img from "../../../Images/62550852.jpg"
import axios from "axios";
import './addCategory.css'
import { UseAdmin } from "../../../Hooks/UsAdmin";
import { TrueModal } from "../../../components/Modal/TrueModal";

export const AddCategory = () => {
  const [trueModal, setTrueModal] = useState(false);
  const [ names, setNames ] = useState('')
  const [ prices, setPrices ] = useState('')
  const [ charak, setCharak ] = useState('')
  const [ foto, setFoto ] = useState('')
  const {adToken, setAdToken} = UseAdmin()
  const navigate = useNavigate();
  
  const handleAddCategory = (evt) => {
    evt.preventDefault();

    const [name, price, character, image] = evt.target.elements;

let data={
  name:name.value,
  rental_price:price.value,
  technical_characteristics:character.value,
  images:image.files}

console.log({data});
    axios.post('https://pro.zirapcha.uz/api/category/create', data,{
      headers:{
          Authorization:adToken.data.token,
      }
    })
    .then((data) => {
      if (data.data) {
        setAdToken(data.data);
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
                <input className="addCategory-button" type="file" name="images" placeholder="Category image" required value={foto} onChange={(e) => setFoto(e.target.value)}/>
              </label>
          </div>
          
          <form className="addCategory-form" onSubmit={handleAddCategory}>
          <h2 className="addCategory-heading">Add Category</h2>

            
              <input className="addCategory-input" type="text" name="name" placeholder="Name"  required value={names} onChange={(e) => setNames(e.target.value)}/>

            
              <input className="addCategory-input" type="number" name="rental_price" placeholder="Price"  required value={prices} onChange={(e) => setPrices(e.target.value)}/>

            
              <textarea className="addCategory-input" name="technical_characteristics" placeholder="Character"  required value={charak} onChange={(e) => setCharak(e.target.value)}/>

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