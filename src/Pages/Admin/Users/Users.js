import { useEffect, useState } from 'react';
import './users.css'
import axios from 'axios';
import { UseAdmin } from '../../../Hooks/UsAdmin';
import { Table } from 'react-bootstrap';

export const Users = () => {

  const {adToken} = UseAdmin()

  const [user, setUser] = useState([]);
  useEffect(() => {
    axios
    .get('https://pro.zirapcha.uz/api/user/all',{
      headers:{
        Authorization:adToken.data.token
      }
    })
    .then(function (response) {
      setUser(response.data.data.users)
    })
    .catch(function (error) {
      console.log(error);
    }); 
  }, [])

  return(
    <div className="users">
        <div className="users-inner">
          <Table bordered hover>
                <thead >
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Имя</th>
                    <th scope="col">Телефон</th>
                    <th scope="col">Электронная почта</th>
                  </tr>
                </thead>
                { user?.map((e) => (
                <tbody key={e._id}>
                <tr>
                  <th scope="row">{}</th>
                  <td>{e.name}</td>
                  <td>{e.phone_number}</td>
                  <td>{e.gmail}</td>
                </tr>
              </tbody>
              ))
}  
                
              </Table> 
        </div>
    </div>
  )
}



