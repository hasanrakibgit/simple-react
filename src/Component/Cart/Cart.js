import React from 'react';
import './Cart.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    
    let totalSalary = 0;
    for (let i = 0; i < cart.length; i++) {
        const player = cart[i];
        totalSalary = totalSalary + parseInt(player.salary);
        
    }
    return (
        <div>
            <h4>Total Selected Player : {cart.length}</h4>
            <h3>List of Selected Player</h3>
            <div className="added-player">
                <div className="player-name" >
                    {
                        cart.map(name => <h5 >{name.name} </h5> )
                    }
                </div>
                <div className="player-name">
                    {
                        cart.map(salary => <h5 >{salary.salary} </h5>)
                    }
                </div>
                
            </div>
            
            
            
            <h3>Total Salary : BDT {totalSalary}</h3>
        </div>
    );
};

export default Cart;