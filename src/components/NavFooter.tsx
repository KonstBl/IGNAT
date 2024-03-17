import '../styles/components/NavFooter.scss'

export function NavFooter() {

    return(
        <div className='navFooter'>
            <div className='content'>
                <div className="contact">
                    <h3>Контакт - центр</h3>
                    <p className='p'>098 900 09 09</p>
                    <p className='p'>Пн - Пт 09:00 - 21:00</p>
                    <p className='p'>Пн - Пт 09:00 - 21:00</p>
                </div>
                <div className="buyers">
                    <h3>Покупцям</h3>
                    <ul>
                        <li><a>Оплата і доставка</a></li>
                        <li><a>Повернення</a></li>
                        <li><a>Питанні та відповіді</a></li>
                    </ul>
                </div>
                <div className="profile">
                    <h3>Особистий кабінет</h3>
                    <ul>
                    <li><a>Мої дані</a></li>
                    <li><a>Історія замовлень</a></li>
                    <li><a>Улюблені</a></li>
                    <li><a>Розсилки</a></li>
                    </ul>
                </div>
                <div className="about">
                    <h3>Про компанію</h3>
                    <ul>
                    <li><a>Про нас</a></li>
                    <li><a>Новини</a></li>
                    <li><a>Стати партнером</a></li>
                    <li><a>Угода користувача</a></li>
                    </ul>
                </div>
            </div>
        </div>

    )
}