import './style.css'
const Header = (props) => {
    return ( 
        
    <header className="header">
    <div className="header__wrapper">
        <h1 className="header__title">
            <strong>Привет, я <em>{props.name}</em></strong><br />
            Frontend разработчик
        </h1>
        <div className="header__text">
            <p>со страстью учиться и творить</p>
        </div>
        <a href="https://hh.ru/resume/1a7ff17eff0b1763b70039ed1f686955697336" className="btn">Скачать резюме</a>
    </div>
</header>

     );
}
 
export default Header;