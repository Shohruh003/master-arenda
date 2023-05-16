import { Link, NavLink } from 'react-router-dom';
import Logo from '../../Images/logo.svg';
import Location from '../../Images/location.png'
import Email from '../../Images/email.png'
import Whatsapp from '../../Images/whatsapp.png'
import Phone from '../../Images/phone.png'
import SearchIcon from '../../Images/search.png'
import './header.css'
export const Header = () => {


  return (
    <div>
      <div className="header">
      <div className="container">
        <div className="header-inner">
          <Link className='logo-link' to='#'><img className='logo' src={Logo} alt="site-logo" width='70' height='10'/></Link>
          
          <Link className='address-link' to='https://www.google.com/maps/place/Arkhangelsk,+Arkhangelsk+Oblast,+Russia/@64.5611935,40.5559949,10z/data=!3m1!4b1!4m6!3m5!1s0x441833f755c232e1:0x403eec437ac89a31!8m2!3d64.5458549!4d40.5505769!16zL20vMHZndDM'> <img src={Location} alt="location-icon" width='40' height='40' />Город Архангельск</Link>

          <ul className='networkList'>
            <li>
              <Link className='email-link' to=''> <img src={Email} alt="email-icon" width='25' height='25' />masterarenda@mail.ru</Link>
            </li>

            <li>
              <Link className='whatsapp-link' to=''> <img src={Whatsapp} alt="whatsapp-icon" width='25' height='25' /> <span>Viber, WhatsApp:</span> +7 958-167-89-52</Link>
            </li>

            <li>
              <Link className='phone-link' to=''> <img src={Phone} alt="phone-icon" width='25' height='25' />(8182) 47-345-6</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className='container'>
    <div className='nav-div'>
    <nav>
        <ul className='header-list'>
          <li>
            <NavLink className={({isActive}) => (isActive ? 'header-active header-link' : 'header-link')} to='/'>Главная</NavLink>
          </li>

          <li>
            <NavLink className={({isActive}) => (isActive ? 'header-active header-link' : 'header-link')} to='/about'>О нас</NavLink>
          </li>

          <li>
            <NavLink className={({isActive}) => (isActive ? 'header-active header-link' : 'header-link')} to='/catalog'>Каталог</NavLink>
          </li>

          <li>
            <NavLink className={({isActive}) => (isActive ? 'header-active header-link' : 'header-link')} to='/condition'>Условия аренды</NavLink>
          </li>

          <li>
            <NavLink className={({isActive}) => (isActive ? 'header-active header-link' : 'header-link')} to='/contact'>Контакты</NavLink>
          </li>

          <li>
            <NavLink className={({isActive}) => (isActive ? 'header-active header-link' : 'header-link')} to='/basket'>Корзинка</NavLink>
          </li>
        </ul>
    </nav>

    <div className='searchDiv'>
      <input className='search-input' type="text" placeholder='Поиск по сайту' />
      <img src={SearchIcon} alt="search-icon" width='20' height='20' />
    </div>
  </div>
    </div>
    </div>
  )
}