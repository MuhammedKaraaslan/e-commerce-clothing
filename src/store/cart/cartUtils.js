export const findExistingCartItem = (cartItems, itemToFind) => {
    return cartItems.find(
        cartItem => cartItem.id === itemToFind.id
    );
}

export const addItemToCart = (cartItems, cartItemToAdd) => {
    if (findExistingCartItem(cartItems, cartItemToAdd)) {
        return cartItems.map((cartItem) => (
            cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        )
        )
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}

export const clearItemFromCart = (cartItems, cartItemToClear) => {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id)
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = findExistingCartItem(cartItems, cartItemToRemove);

    if (existingCartItem.quantity === 1) {
        return clearItemFromCart(cartItems, cartItemToRemove)
    }

    return cartItems.map((cartItem) => (
        cartItem.id === cartItemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    )
    )
}

