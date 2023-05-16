import { Route, Routes } from "react-router-dom"
import { Home } from "./Pages/Home/Home"
import { About } from "./Pages/About/About"


export const Private = () => {
  return (
    <div>
      <div className="private">
      <Routes>
      <Route path="/*" element={<Home/>}/>
      <Route path="/about/*" element={<About/>}/>
      <Route path='/register/*' element={<Register/>}/>
    </Routes>
    </div>
    </div>
  )
}