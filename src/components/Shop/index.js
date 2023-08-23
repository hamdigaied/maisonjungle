import './Shop.css'
import Product from '../Product';
import montesra from './../../assets/monstera.jpg';
import lyrata from './../../assets/lyrata.jpg';
import pothos from './../../assets/pothos.jpg';
import calathea from './../../assets/calathea.jpg';
import olivier from './../../assets/olivier.jpg';
import cactus from './../../assets/cactus.jpg';
import basil from './../../assets/basil.jpg';
import succulent from './../../assets/succulent.jpg';
import mint from './../../assets/mint.jpg';

function Shop() {
    const products = [
        {
            name: "Monstera",
            price: 15,
            image: montesra,
            water: 3,
            sun: 2
        },
        {
            name: "Ficus Lyrata",
            price: 16,
            image: lyrata,
            water: 1,
            sun: 3
        },
        {
            name: "Pothos Argenté",
            price: 9,
            image: pothos,
            water: 2,
            sun: 1
        },
        {
            name: "Calathea",
            price: 20,
            image: calathea,
            water: 3,
            sun: 2
        },
        {
            name: "Olivier",
            price: 25,
            image: olivier,
            water: 1,
            sun: 3
        },
        {
            name: "Cactus",
            price: 6,
            image: cactus,
            water: 1,
            sun: 2
        },
        {
            name: "Basilique",
            price: 5,
            image: basil,
            water: 3,
            sun: 2
        },
        {
            name: "Succulente",
            price: 8,
            image: succulent,
            water: 1,
            sun: 2
        },
        {
            name: "Menthe",
            price: 4,
            image: mint,
            water: 2,
            sun: 2
        }
    ]

    const handleAddToCart = () => {
        alert("added")
    }

    return (
        <section>
            {
                products.map(product => (
                    <Product
                        name={product.name}
                        price={product.price}
                        image={product.image}
                        water={product.water}
                        sun={product.sun}
                        addToCart={handleAddToCart}
                    />
                ))
            }
        </section>
    )
}

export default Shop;