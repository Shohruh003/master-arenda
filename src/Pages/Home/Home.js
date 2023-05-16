import { Link } from "react-router-dom"
import './home.css'
import { Card } from "../../components/Card/Card"
import Icon from '../../Images/62550852.jpg'

export const Home = () => {


  return(
      <div className="home">
        <div className="container">
          <div className="home-inner">
            <h1 className="home-heading">КАТАЛОГ ПРОДУКЦИИ В АРЕНДУ</h1>
            
            <ul className="homeList">
                <Card/>
                <Card/>
                <Card/>
                <Card/>     
                <Card/> 
                <Card/> 
                <Card/> 
                <Card/> 
            </ul>

            <div className="service">
                <h2 className="service-heading">НАШИ УСЛУГИ</h2>
                <ul className="serviceList">
                    <li className="serviceItem">
                        <img src={Icon} alt="Icon-img" width='60' height='60' />
                        <h3><Link className="serviceLink" to=''>КОНСУЛЬТАЦИИ</Link></h3>
                        <p>Не знаете что выбрать? Поможем!</p>
                    </li>

                    <li className="serviceItem">
                        <img src={Icon} alt="Icon-img" width='60' height='60' />
                        <h3><Link className="serviceLink" to=''>ГАРАНТИЙНОЕ ОБСЛУЖИВАНИЕ</Link></h3>
                        <p>Большой ассортимент запчастей</p>
                    </li>

                    <li className="serviceItem">
                        <img src={Icon} alt="Icon-img" width='60' height='60' />
                        <h3><Link className="serviceLink" to=''>ДОСТАВКА</Link></h3>
                        <p>Осуществляем доставку оборудования</p>
                    </li>
                </ul>
            </div>
          </div>
        </div>
      </div>
  )
}


