
import CardImg from '../../Images/52216253.jpg'
import './card.css'
export const Card = () => {


  return(
    <li className='cardItem'>
      <img src={CardImg} alt="card-img" width='200' height='200' />
      <h3>Аккумуляторные дрели-шуруповерты</h3>
      <div className='cardDiv'>
      <p>Название: <span>Bosch GSR 180-LI 2х2А*ч 0.601.9F8.123</span></p>
      <p>Цена аренда за сутки: <span>500 ₽</span></p>
      <p>Технические характеристики: </p>
      <p>Тип: <span>аккумуляторный</span></p>
      <p>Тип двигателя: <span>щеточный</span></p>
      <p>Наличие реверса: <span>да</span></p>
      <p>Наличие подсветки: <span>да</span></p>

      <button className='cardBtn'>в корзину</button>
      </div>
    </li>
  )
}