import { Route, Routes } from "react-router-dom";
import { About } from "./Pages/About/About";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./Pages/Home/Home";
import { Catalog } from "./Pages/Catalog/Catalog";
import { Condition } from "./Pages/Condition/Condition";
import { Contact } from "./Pages/Contact/Contact";


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/*" element={<Home/>}/>
        <Route path="/about/*" element={<About/>}/>
        <Route path="/catalog/*" element={<Catalog/>}/>
        <Route path="/condition/*" element={<Condition/>}/>
        <Route path="/contact/*" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
