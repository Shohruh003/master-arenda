import { Card } from "../../components/Card/Card"
import './catalog.css'



export const Catalog = () => {


  return(
    <div className="catalog">
      <div className="container">
        <div className="catalog-inner">
          <ul className="catalogList">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
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