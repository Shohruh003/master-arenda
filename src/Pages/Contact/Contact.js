import { Link } from 'react-router-dom'
import './contact.css'
import Location from '../../Images/location.png'
import Email from '../../Images/email.png'
import Whatsapp from '../../Images/whatsapp.png'
import Phone from '../../Images/phone.png'
import { ReactLocation, Router } from 'react-location'
import { Home } from '../Home/Home'
const reactLocation = new ReactLocation()



export const Contact = () => {

  return(
    <div className="contact">
      <div className="container">
        <div className="contact-inner">
          <h2>Контактная информация</h2>

          <ul className='contactList'>
            <li>
            <Link  className='address-link' to='https://yandex.uz/maps/org/stroyarenda/150830505934/?ll=40.550307%2C64.567410&source=wizgeo&utm_medium=maps-desktop&utm_source=serp&z=17'> <img src={Location} alt="location-icon" width='40' height='40' />Город Архангельск</Link>
            </li>

            <li>
              <Link className='phone-link' to=''> <img src={Phone} alt="phone-icon" width='40' height='40' />(8182) 47-345-6</Link>

              <Link className='whatsapp-link' to=''> <img src={Whatsapp} alt="whatsapp-icon" width='40' height='40' /> <span>Viber, WhatsApp:</span> +7 958-167-89-52</Link>
            </li>

            <li>
              <Link className='email-link' to=''> <img src={Email} alt="email-icon" width='40' height='40' />masterarenda@mail.ru</Link>
            </li> 
          </ul>

          <Router
      location={reactLocation}
      routes={[
         {
            path: 'https://www.google.com/search?q=%D0%B3%D0%BE%D1%80%D0%BE%D0%B4+%D0%B0%D1%80%D1%85%D0%B0%D0%BD%D0%B3%D0%B5%D0%BB%D1%8C%D1%81%D0%BA&oq=%D0%93%D0%BE%D1%80%D0%BE%D0%B4+%D0%90%D1%80%D1%85%D0%B0%D0%BD%D0%B3%D0%B5%D0%BB%D1%8C%D1%81%D0%BA&aqs=chrome.0.0i19i355i512j46i19i512j0i19i512l8.891j0j7&sourceid=chrome&ie=UTF-8#',
            element: <Home/>
            
         },
      ]}
   />

        </div>
      </div>
    </div>
  )
}