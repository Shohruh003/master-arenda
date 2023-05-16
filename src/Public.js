import {Routes, Route} from 'react-router-dom';
import { Login } from './Pages/Login/Login'
import { Register } from './Pages/Register/Register';

export const Public = () => {
  return (
    <Routes>
      <Route path='/*' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='*' element={<>Error 404 bunday page topilmadi</>}/>
    </Routes>
  )
}