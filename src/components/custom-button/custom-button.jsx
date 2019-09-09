import React from 'react';

import './custom-button.styles.scss';

export const CustomButton = ({children, inverted, isGoogleSignIn, ...rest}) => (
    <button 
        className={`custom-button ${isGoogleSignIn ? 'google-sign-in':''} ${inverted ? 'inverted' : ''}`} 
        {...rest} 
    >
        {children}
    </button>
)