import { useEffect, useState } from "react";
import { Card } from "../../components/Card/Card"
import './catalog.css'
import axios from "axios";



export const Catalog = () => {

  const [catalog, setCatalog] = useState([]);
  
  useEffect(() => {
    axios
    .get('https://pro.zirapcha.uz/api/category/all')
    .then(function (response) {
      setCatalog(response.data)
    })
    .catch(function (error) {
      console.log(error);
    }); 
  }, [catalog])


  return(
    <div className="catalog">
      <div className="containers">
        <div className="catalog-inner">
          <ul className="catalogList">
          { catalog?.data?.categorys?.map((e) => (
                <Card key={e?.name} item={e?.name}  price={e?.rental_price} character={e?.technical_characteristics} image={e?.images}/>
              ))
}   
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </ul>
        </div>
      </div>
    </div>
  )
}