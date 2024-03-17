import '../../styles/components/Product/ProductInfo.scss'
import { ProductDetails } from './ProductDetails';
import { ProductPictures } from './ProductPictures'

export function ProductInfo() {

    return (
        <div className='bg'>
        <div className="product-info">
          <ProductPictures />
          <ProductDetails />
        </div>
        </div>
      );
}