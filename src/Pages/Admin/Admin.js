import { NavLink, Route, Routes } from 'react-router-dom'
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
                  <NavLink className={({isActive}) => (isActive ? 'header-active admin-link' : 'admin-link')} to='/'>Пользователь</NavLink>
                </li>

                <li>
                  <NavLink className={({isActive}) => (isActive ? 'header-active admin-link' : 'admin-link')} to='/category'>Добавить категорию</NavLink>
                </li>

                <li>
                  <NavLink className={({isActive}) => (isActive ? 'header-active admin-link' : 'admin-link')} to='/order'>Заказы</NavLink>
                </li>

                <li>
                  <NavLink className="admin-link" to="#" onClick={() => {
                    localStorage.removeItem('token')
                    window.location.reload();
                  }}>Log out</NavLink> 
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