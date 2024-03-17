import { phone } from '../data/ProductData'
import '../styles/components/Header.scss'

export function Header() {
    
    return(
    <div className="headerbg">
    <header className="header">
        <div className="left">
            <span> {phone} </span>
            <a> Допомога </a>
        </div>
        <div className="right">
            <a href="#">Увійти</a>
            <a>/</a>
            <a href="#">Зареєструватися</a>
        </div>
    </header>
    </div>
)}