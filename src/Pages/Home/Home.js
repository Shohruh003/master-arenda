import { Link } from "react-router-dom"
import './home.css'
import { Card } from "../../components/Card/Card"
import Icon from '../../Images/62550852.jpg'
import Generator from "../../Images/GeneratorOrg.jpg";
import Kompressor from "../../Images/Kompressor.jpg";
import Perefrator from "../../Images/peref.jpg";
import MiniEx from "../../Images/MiniEx.jpg";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import axios from "axios";

export const Home = () => {

  const [card, setCard] = useState([]);
  
  useEffect(() => {
    axios
    .get('http://165.227.142.114:8000/api/category/all')
    .then(function (response) {
      setCard(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });  
  }, [card])

  return(
      <div className="home">
        <div className="hero">
          <div className="corusel">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
            >
              <SwiperSlide className="Generator">
                <img className="generatorSlide" src={Generator} alt="generator" />
                <p className="imgP">Аренда генератора</p>
              </SwiperSlide>
              <SwiperSlide>
                <img className="Kompressor" src={Kompressor} alt="Kompressor" />
                <p className="imgP">Аренда компрессора</p>
              </SwiperSlide>
              <SwiperSlide>
                <img className="Perefrator" src={Perefrator} alt="generator" />
                <p className="imgP">
                  Аренда отбойного молотка
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <img className="MiniEx" src={MiniEx} alt="Kompressor" />
                <p className="imgP">
                  Аренда мини-экскаватора
                </p>
              </SwiperSlide>
            </Swiper>
          </div>
      </div>

        <div className="containers">
          <div className="home-inner">
          
            <h1 className="home-heading">КАТАЛОГ ПРОДУКЦИИ В АРЕНДУ</h1>
            
            <ul className="homeList">
                {card?.data?.categorys?.map((e) => (
                <Card key={e?.name} item={e?.name}  price={e?.rental_price} character={e?.technical_characteristics} image={e?.images}/>
              ))
}   
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


