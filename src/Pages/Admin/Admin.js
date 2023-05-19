import { Link, Route, Routes } from 'react-router-dom'
import './admin.css'
import { AddCategory } from './AddCategory/AddCategory'
import { Users } from './Users/Users'
import { Orders } from './Orders/Orders'



export const Admin = () => {

  return(
    <div className="admin">
      <div className="admin-inner">
        <div className="containers">
          <ul className='admin-list'>
                <li>
                  <Link className='admin-link' to='/'>Пользователь</Link>
                </li>

                <li>
                  <Link className='admin-link' to='/category'>Добавить категорию</Link>
                </li>

                <li>
                  <Link className='admin-link' to='/order'>Заказы</Link>
                </li>
            </ul>
        </div>
      </div>

      <Routes>
        <Route path="/*" element={<Users/>}/>
        <Route path="/category/*" element={<AddCategory/>}/>
        <Route path="/order/*" element={<Orders/>}/>
      </Routes>
    </div>
  )
}