import FeatherIcon from 'feather-icons-react'
import { navbar } from '../data/ProductData'
import '../styles/components/Navbar.scss'

export function Navbar() {
    
    return(
        <div className='navbarbg'>
        <nav className="navbar">
            <div className="left">
                <div className='logo'>
                    <p>{navbar.logo}</p>
                </div>
                <button>{navbar.new}</button>
                <button>{navbar.men}</button>
                <button>{navbar.women}</button>
                <button>{navbar.accessories}</button>
                <button>{navbar.sales}</button>
            </div>
            <div className='right'>
                <div className='input-icon'>
                    <i className='icon'>
                        <FeatherIcon icon='search' />
                    </i>
                    <input type="text" className='searchInput'></input>
                </div>
                <button className='heartButton'>
                    <FeatherIcon icon='heart' />
                </button>
                <button className='cartButton'>
                    <FeatherIcon icon='shopping-cart' />
                </button>
            </div>
        </nav>
        </div>
    )
}