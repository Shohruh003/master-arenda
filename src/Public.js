import {Routes, Route} from 'react-router-dom';
import { Login } from './Pages/Login/Login'
import { Register } from './Pages/Register/Register';
import { AdminLogin } from './Pages/Admin/AdminLogin/AdminLogin';

export const Public = () => {
  return (
    <Routes>
      <Route path='/register/*' element={<Register/>}/>
      <Route path='/*' element={<Login/>}/>
      <Route path='/adminLogin/*' element={<AdminLogin/>}/>
    </Routes>
  )
}