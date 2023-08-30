import React from 'react';
import './Cart.css'

function Cart({ cart, setCart }) {
    return (
        <aside>
            <h1>Panier</h1>
            {
                cart.length > 0 ?
                    <React.Fragment>
                        <h4>Total : {cart.map(c => c.subtotal).reduce((prev, next) => prev + next)}$</h4>
                        <ul>
                            {
                                cart.map((c, i) => <li key={i}>x{c.quantity} {c.name} - {c.subtotal}$</li>)
                            }
                        </ul>
                        <button onClick={() => setCart([])}>Vider le panier</button>
                    </React.Fragment>
                    :
                    <p>Votre panier est vide</p>
            }
        </aside>
    )
}

export default Cart;