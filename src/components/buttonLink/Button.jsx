import githubIcon from '../../img/icons/gitHub-black.svg'

const Button = ({link}) => {
    return ( 
        <a href={link} target="_blank" rel="noreferrer"className="btn-outline">
                    <img src={githubIcon} alt=""/>
                    GitHub repo
                </a>

     );
}
 
export default Button;