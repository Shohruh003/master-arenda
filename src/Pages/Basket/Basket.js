import './basket.css'
import CardImg from '../../Images/62550852.jpg'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { UseAuth } from '../../Hooks/UseAuth';
import { Modal } from '../../components/Modal/Modal';
import { TrueModal } from '../../components/Modal/TrueModal'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Basket = () => {
  const {token} = UseAuth()
  const id = useParams()
  const [basket, setBasket] = useState([]);
  const [modal, setModal] = useState(false);
  const [trueModal, setTrueModal] = useState(false);
  const [quantity, setQuantity] = useState();
  const [price, setPrice] = useState();

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
    const priceNumber = parseInt(basket?.data?.category?.rental_price)
    setPrice(event.target.value * priceNumber);
  };

  const handleCreateEmployee = () => {
    if (token) {
      return setTrueModal(true)
    }
    return setModal(true)
    
  };


  useEffect(() => {
    axios.get(`https://pro.zirapcha.uz/api/category/${id.id}`,{
        headers:{
            Authorization:token?.data?.token,
        }
    })
    .then(function (response) {
      setBasket(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
  }, [id.id])
  
  const handleRent = (evt) => {
    evt.preventDefault();
    const [category, number, cost] = evt.target.elements;
    axios.post('https://pro.zirapcha.uz/api/order/create', {category:category.value,number:number.value,cost:cost.value},{
      headers:{
          Authorization:token?.data?.token,
      }
    })
    .then((data) => {
      console.log(data.data);
    })
    .catch((error) => {
      if (error) {
        toast.warning('Зарегистрируйтесь, чтобы заказать !');
      }
    });
  };

  return(
    <div className="basket">
      <div className="containers">
        <div className="basket-inner">
          <img src={`https://pro.zirapcha.uz/api/api/file/${basket?.data?.category?.images}`} 
            onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src ={CardImg}
              }}  alt="card-img" width='500' height='700' />  
          
          <div className='rentDiv'>
            <h3>{basket?.data?.category?.name ? basket?.data?.category?.name : "Пустой"}</h3>
            <p>Цена аренда за сутки: <span>{basket?.data?.category?.rental_price ? basket?.data?.category?.rental_price : "Пустой"}</span></p>
            <p>Технические характеристики: <span>{basket?.data?.category?.technical_characteristics ? basket?.data?.category?.technical_characteristics : "Пустой"}</span></p> 

              <form className='form-group' onSubmit={handleRent}>
                <input className='form-control w-50 mb-4 d-none' name="category" defaultValue={id.id} />

                <label className='mb-1' htmlFor="quantity">Количество</label>
                <input className='form-control w-50 mb-4' type="number" name="number" placeholder='количество' id="quantity" defaultValue={quantity} onChange={handleQuantityChange} min={1} />
            
            
                <label className='mb-1' htmlFor="price">Цена</label>
                <input className='form-control w-50 mb-4' type="number" name="cost" placeholder='цена' id="price" defaultValue={price} onChange={handlePriceChange} readOnly />
            
            
                <button type='submit' className='btn btn-primary' onClick={handleCreateEmployee}>В АРЕНДУ</button>
                <ToastContainer />

              </form>

              <Modal modal={modal} setModal={setModal} />

              <TrueModal trueModal={trueModal} setTrueModal={setTrueModal} />
          </div>
        </div>
      </div>
    </div>
  )
}