import '../styles/components/Footer.scss'

export function Footer() {

return(
    <div className='footer'>
        <div className="leftLinks">
            <a className="links">НОВИНКИ</a>
            <a className="links">ЧОЛОВІКИ</a>
            <a className="links">ЖІНКИ</a>
            <a className="links">АКСЕСУАРИ</a>
            <a className="links">АКЦІЇ</a>
        </div>
        <div className="rightText">
            <p>© 2022 — 2023 IGNAT. Усі права захищені.</p>
        </div>
    </div>

    )
}