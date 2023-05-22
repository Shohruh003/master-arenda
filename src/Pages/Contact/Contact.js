import { Link } from 'react-router-dom'
import './contact.css'
import Location from '../../Images/location.png'
import Email from '../../Images/email.png'
import Whatsapp from '../../Images/whatsapp.png'
import Phone from '../../Images/phone.png'

export const Contact = () => {

  return(
    <div className="contact">
      <div className="containers">
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

          <iframe className='location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d219368.78437550738!2d40.22567494251899!3d64.56111913559089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x441833f755c232e1%3A0x403eec437ac89a31!2sArkhangelsk%2C%20Arkhangelsk%20Oblast%2C%20Russia!5e0!3m2!1sen!2s!4v1684237370892!5m2!1sen!2s" width="600" height="450" title='location' loading="lazy"></iframe>

        </div>
      </div>
    </div>
  )
}