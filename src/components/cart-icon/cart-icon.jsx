import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';

import {toggleCartState} from '../../redux/cart/cart.actions';

import './cart-icon.styles.scss';

const CartIcon = ({toggleCartState, itemCount}) => {
    return (
        <div className="cart-icon" onClick={toggleCartState}>
            <ShoppingIcon className="shopping-icon" />
            <div className="item-count">{itemCount}</div>
        </div>
    );
};

const mapStateToProps = ({cart: {cartItems}}) => ({
    itemCount: cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0)
})

const mapDispatchToProps = dispatch => ({
    toggleCartState: () => dispatch(toggleCartState())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);