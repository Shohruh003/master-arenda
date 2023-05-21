import { Link } from 'react-router-dom';
import './footer.css'
export const Footer = () => {


  return (
    <div className="footer">
      <ul className='footer-list'>
                <li>
                  <Link className='footer-link' to='/'>Главная</Link>
                </li>

                <li>
                  <Link className='footer-link' to='/about'>О нас</Link>
                </li>

                <li>
                  <Link className='footer-link' to='/catalog'>Каталог</Link>
                </li>

                <li>
                  <Link className='footer-link' to='/condition'>Условия аренды</Link>
                </li>

                <li>
                  <Link className='footer-link' to='/contact'>Контакты</Link>
                </li>

                <li>
                  <Link className='footer-link' to='/basket/id'>Корзинка</Link>
                </li>
            </ul>
      <div className="containers">
        <div className="footer-inner">
            <div className='footer-logo'>
              <p>© 2023 Мастераренда</p>
              <Link className='support-link' to=''>Разработка и поддержка</Link>
            </div>

            <div className='address'>
              <Link className='address-link' to=''>Город Архангельск </Link>
              <p className='address-email'>Электронная почта:  <Link className='email-link' to=''>masterarenda@mail.ru</Link> </p>
            </div>

            <div className='address-phone'>
              <span className='phone'>Телефон:</span>
              <Link className='phone-link' to=''>(8182) 47-345-6</Link>
            </div>
        </div>
      </div>
    </div>
  )
}