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
                    [...Array(water)].map((w, i) => <WaterIcon key={i} />)
                }
            </div>
            <div className='flex'>
                {
                    [...Array(sun)].map((w, i) => <SunIcon key={i} />)
                }
            </div>
            <button className='add-to-cart' onClick={() => addToCart(name, price)}>Ajouter</button>
        </div>
    )
}

export default Product;