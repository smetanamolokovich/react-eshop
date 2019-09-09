import React from 'react';
import { CustomButton } from '../custom-button/custom-button';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import './cart-dropdown.styles.scss';
import CartItem from '../component-item/cart-item.components';

import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selectors";

import { toggleCartState } from "../../redux/cart/cart.actions";

const CartDropdown = ({cartItems, history, dispatch}) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length ?
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                    :
                    <span className="empty-message">The cart is empty...</span>
                }
            </div>
            <CustomButton 
                onClick={() => {
                    history.push('/checkout');
                    dispatch(toggleCartState());
                }}
            >
                GO TO CHECKOUT
            </CustomButton>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));