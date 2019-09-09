import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';

import {toggleCartState} from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import './cart-icon.styles.scss';

const CartIcon = ({toggleCartState, itemCount}) => {
    return (
        <div className="cart-icon" onClick={toggleCartState}>
            <ShoppingIcon className="shopping-icon" />
            <div className="item-count">{itemCount}</div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state)
})

const mapDispatchToProps = dispatch => ({
    toggleCartState: () => dispatch(toggleCartState())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);