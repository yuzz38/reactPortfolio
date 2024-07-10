import vk from '../../img/icons/vk.svg'
import github from '../../img/icons/gitHub.svg'
import weblancer from '../../img/icons/weblancer.svg'

import './style.css'
const Footer = () => {
    return ( 
        <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <ul className="social">
                    <li className="social__item"><a href="#!"><img src={vk} alt="Link" /></a></li>
                   
                 
                    <li className="social__item"><a href="#!"><img src={github} alt="Link" /></a></li>
                    <li className="social__item"><a href="#!"><img src={weblancer} alt="Link" /></a></li>
                </ul>
                <div className="copyright">
                    <p>© 2024 frontend-dev.com</p>
                </div>
            </div>
        </div>
    </footer>
     );
}
 
export default Footer;