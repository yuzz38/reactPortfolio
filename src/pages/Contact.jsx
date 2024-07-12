const Contact = () => {
    return ( 
        <main className="section">
        <div className="container">
                <h1 className="title-1">Как связаться со мной</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Мой часовой пояс</h2>
                        <p>Иркутск (+5 МСК), Россия</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram / WhatsApp</h2>
                        <p><a href="tel:+79086617996">+7 (908) 661-79-96</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="mailto:webfrom38@gmail.com">webfrom38@gmail.com</a></p>
                    </li>
                </ul>

        </div>
    </main>
     );
}
 
export default Contact;