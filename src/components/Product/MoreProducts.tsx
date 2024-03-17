import FeatherIcon from 'feather-icons-react';
import { moreProducts } from '../../data/ProductData';
import '../../styles/components/Product/MoreProduct.scss'

export function MoreProducts() {
    
    
      return (
        <div className="similarProducts">
          <h2>Ще може сподобатись</h2>
          <div className="productsContainer">
            {moreProducts.map(product => (
              <div key={product.id} className="product">
                <img src={product.image} alt={product.name} className="productImage" />
                <button className='likeButton'>
                    <FeatherIcon icon='heart' size={20}/>
                </button>
                <div>
                <h3 className='name'>{product.name}</h3>
                <p className='desc'>{product.type}</p>
                <p className='desc'>{product.colors} коліри</p>
                <p className='price'>{product.price} грн.</p>
                </div>
              </div>
            ))}
          </div>
          <div className='watchMore'>
                <a className='watchMoreText'>ДИВИТИСЬ БІЛЬШЕ</a>
                <span className="chevronIcon">
                    <FeatherIcon icon='chevrons-down' />
                </span> 
          </div>
        </div>
      );
}