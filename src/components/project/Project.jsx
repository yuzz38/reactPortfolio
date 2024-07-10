import { NavLink } from 'react-router-dom';
import './style.css'
const Project = (props) => {
    return ( 
        <NavLink to={`/info/`+props.index}>
            <li className="project">
                
                    <img src={props.img} alt="Project img" className="project__img"/>
                    <h3 className="project__title">{props.title}</h3>
               
            </li>
        </NavLink>
       
     );
}
 
export default Project;