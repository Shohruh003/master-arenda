
import CardImg from '../../Images/52216253.jpg'
import './card.css'
import { useState } from 'react'
import { Modal } from '../Modal/Modal'
import { TrueModal } from '../Modal/TrueModal'
import { Public } from '../../Public'
import { UseAuth } from '../../Hooks/UseAuth'

export const Card = ({item, price, character, image}) => {
  const { token } = UseAuth()
  console.log(`http://165.227.142.114:8000/${image}`);

  const [modal, setModal] = useState(false);
  const [trueModal, setTrueModal] = useState(false);

  return(
    <li className='cardItem'>
      <img src={CardImg} 
          onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src ={CardImg}
            }}  alt="card-img" width='200' height='200' />
      <h3>{item ? item : "Аккумуляторные дрели-шуруповерты"}</h3>
      <div className='cardDiv'>
      <p>Цена аренда за сутки: <span>{price ? price : "700$"}</span></p>
      <p>Технические характеристики: {character ? character : "Тип:аккумуляторный\nТип двигателя:щеточный\nНаличие реверса:да\nНаличие подсветки:да"}</p>

      <button className='cardBtn' onClick={() => {
        if(token) {
          return setModal(true)
        }
        return setTrueModal(true)
      }}>в корзину</button>
      </div>

      <Modal modal={modal} setModal={setModal}>
        <Public/>
      </Modal>

      <TrueModal trueModal={trueModal} setTrueModal={setTrueModal} />
      
    </li>
  )
}