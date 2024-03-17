import FeatherIcon from "feather-icons-react"
import { product } from "../../data/ProductData"
import "../../styles/components/Product/ProductDetails.scss"
import { ColorRadioButtons } from "../RadioButtons/ColorRadioButtons"
import { SizeRadioButtons } from "../RadioButtons/SizeRadioButtons"

export function ProductDetails() {
    
    return(
        <div className="details">
            <div>
                <h2 className="name">{product.name}</h2>
                <h4 className="type">{product.type}</h4>
            </div>
            <div className="price">
                <h1>{product.price} грн.</h1>
            </div>
            <div className="sizeColor">
                <SizeRadioButtons />
                <ColorRadioButtons />
            </div>
            <div className="info">
                <h4>ІНФОРМАЦІЯ ПРО ТОВАР</h4>
                <p className="infoHeader">{product.infoHeader1}</p>
                <p className="info">{product.info1}</p>
                <p className="infoHeader">{product.infoHeader2}</p>
                <p className="info">{product.info2}</p>
                <p className="infoHeader">{product.infoHeader3}</p>
                <p className="info">{product.info3}</p>
            </div>
            <hr></hr>
            <div className='order'>
                <button className="orderButton">ОФОРМИТИ ЗАМОВЛЕННЯ</button>
                <button className="creditButton">КУПИТИ У КРЕДИТ</button>
                <button className="heartButton">
                    <FeatherIcon icon="heart" size={30} />
                </button>
                <button className="cartButton">
                <FeatherIcon icon="shopping-cart" size={30} />
                </button>
        </div>
        </div>
    )
}