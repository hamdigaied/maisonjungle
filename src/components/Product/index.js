import './Product.css'
import WaterIcon from '../../assets/WaterIcon';
import SunIcon from '../../assets/SunIcon';

function Product({ name, price, image, water, sun, addToCart }) {
    return (
        <div className='product'>
            <span>{price}$</span>
            <img src={image} alt={name} />
            <p>{name}</p>
            <div className='flex'>
                {
                    [...Array(water)].map(w => <WaterIcon />)
                }
            </div>
            <div className='flex'>
                {
                    [...Array(sun)].map(w => <SunIcon />)
                }
            </div>
            <button className='add-to-cart' onClick={addToCart}>Ajouter</button>
        </div>
    )
}

export default Product;