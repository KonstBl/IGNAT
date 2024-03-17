import { pictures } from '../../data/ProductData'
import '../../styles/components/Product/ProductPictures.scss'

export function ProductPictures() {
   
    return(
        <div className="images">
          <div>
            <div className="main-image">
              <img src={pictures.bigPic} alt="Main Product" />
            </div>
            <div className="small-images">
              <img src={pictures.pic1} alt="Small Product 1" />
              <img src={pictures.pic2} alt="Small Product 2" />
              <img src={pictures.pic3} alt="Small Product 3" className='smallproduct3' />
            </div>
          </div>
        </div>
    )
}