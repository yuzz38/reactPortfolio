
import './style.css'

import {NavLink} from 'react-router-dom'
import ButtonDark from '../buttonDark/ButtonDark'

const Navbar = () => {
    const activeLink = "nav-list__link nav-list__link--active"
    const normalLink = "nav-list__link"
    return ( 
        <nav class="nav">
        <div className="container">
          <div className="nav-row">
              <NavLink to="/"className="logo">
              <strong>WebFrom38</strong> 
              </NavLink>
             

            <ButtonDark/>

              <ul className="nav-list">
                  <li className="nav-list__item">
                    <NavLink to="/" className={({isActive}) => isActive? activeLink: normalLink}>Главная</NavLink></li>
                  <li className="nav-list__item">
                  <NavLink to="/project" className={({isActive}) => isActive? activeLink: normalLink}>Проекты</NavLink>
                  </li>
                  <li className="nav-list__item">
                  <NavLink to="/contact" className={({isActive}) => isActive? activeLink: normalLink}>Контакты</NavLink>
                   </li>
                </ul>
          </div>
        </div>
  </nav>
     );
}
 
export default Navbar;