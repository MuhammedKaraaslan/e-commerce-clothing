import React from 'react'
import './CustomButton.styles.scss'

export default function CustomButton({ children, isGoogleSignIn, inverted, ...otherProps }) {
    return (
        <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} ${inverted ? 'inverted' : ''} custom-button`} {...otherProps}>
            {children}
        </button>
    )
}
