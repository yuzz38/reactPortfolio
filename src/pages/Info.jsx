import { useParams } from 'react-router-dom';
import Button from "../components/buttonLink/Button";

import { projects } from '../helpers/projectsList'
const Info = () => {
    const {id} = useParams();
    const projectInfo = projects[id];
    console.log(projectInfo)
    return ( 
        <main className="section">
        <div className="container">
            <div className="project-details">

                <h1 className="title-1">{projectInfo.title}</h1>
                <img src={projectInfo.imgBig} alt="" className="project-details__cover"/>

                <div className="project-details__desc">
                    <p>Skills: {projectInfo.skills}</p>
                </div>

                {projectInfo.sourceLink && (<Button link={projectInfo.sourceLink}/>)} 
            </div>
        </div>
    </main>
     );
}
 
export default Info;