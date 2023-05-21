import { Route, Routes } from "react-router-dom"
import { Home } from "./Pages/Home/Home"
import { About } from "./Pages/About/About"
import { Basket } from "./Pages/Basket/Basket"
import { Contact } from "./Pages/Contact/Contact"
import { Header } from "./components/Header/Header"
import { Footer } from "./components/Footer/Footer"
import { Catalog } from "./Pages/Catalog/Catalog"
import { Condition } from "./Pages/Condition/Condition"


export const Private = () => {
  return (
    <div>
      <div className="private">
        <Header/>
        <Routes>
          <Route path="/*" element={<Home/>}/>
          <Route path="/about/*" element={<About/>}/>
          <Route path="/catalog/*" element={<Catalog/>}/>
          <Route path="/condition/*" element={<Condition/>}/>
          <Route path="/contact/*" element={<Contact/>}/>
          <Route path={"/basket/:id/*"} element={<Basket/>}/>
        </Routes>
        <Footer/>
    </div>
    </div>
  )
}