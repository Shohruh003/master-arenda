import { useEffect, useState } from 'react';
import './orders.css'
import axios from 'axios';
import { UseAdmin } from '../../../Hooks/UsAdmin';
import { Table } from 'react-bootstrap';


export const Orders = () => {
  const {adToken} = UseAdmin()

  const [order, setOrder] = useState([]);
  
  useEffect(() => {
    axios
    .get('https://pro.zirapcha.uz/api/order/all',{
      headers:{
        Authorization:adToken.data.token
      }
    })
    .then(function (response) {
      setOrder(response.data.data.orders)
    })
    .catch(function (error) {
      console.log(error);
    }); 
  }, [])

  return(
    <div className="orders">
        <div className="orders-inner">
          <Table  bordered hover>
                <thead >
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Имя</th>
                    <th scope="col">Количество</th>
                    <th scope="col">Общая стоимость</th>
                    <th scope="col">Телефон</th>
                    <th scope="col">Электронная почта</th>
                  </tr>
                </thead>
                { order?.map((e) => (
                <tbody key={e._id}>
                <tr>
                  <th scope="row">{}</th>
                  <td>{e?.category?.name}</td>
                  <td>{e?.number}</td>
                  <td>{e?.cost}</td>
                  <td>{e?.creator?.phone_number}</td>
                  <td>{e?.creator?.gmail}</td>
                </tr>
              </tbody>
              ))
}  
                
              </Table> 
        </div>
    </div>
  )
}