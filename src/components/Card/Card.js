
import { Link } from 'react-router-dom';
import CardImg from '../../Images/52216253.jpg'
import './card.css'

export const Card = ({id, name, price, character, image}) => {


  return(
    <li className='cardItem'>
      <img src={CardImg} 
          onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src ={CardImg}
            }}  alt="card-img" width='200' height='200' />
      <h3>{name ? name : "Аккумуляторные дрели-шуруповерты"}</h3>
      <div className='cardDiv'>
      <p>Цена аренда за сутки: <span>{price ? price : "700$"}</span></p>
      <p>Технические характеристики: {character ? character : "Тип:аккумуляторный\nТип двигателя:щеточный\nНаличие реверса:да\nНаличие подсветки:да"}</p>

      <Link to={'/basket/' + id} className='cardLink' >в корзину</Link>
      </div>
      
    </li>
  )
}