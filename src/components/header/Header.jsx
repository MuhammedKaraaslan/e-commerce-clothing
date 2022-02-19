import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import './Header.styles.scss'
import { auth } from '../../firebase/Firebase.utils'
import { connect } from 'react-redux'
import CartIcon from '../cart-icon/CartIcon'
import CartDropdown from '../cart-dropdown/CartDropdown'
import { selectCartHiden } from '../../store/cart/cartSelectors'
import { selectCurrentUser } from '../../store/user/userSelectors'
import { createStructuredSelector } from 'reselect'


function Header({ currentUser, hidden }) {
    return (
        <div className='header'>
            <Link className='logo-container' to="/">
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to="/shop">SHOP</Link>
                <Link className='option' to="/contact">CONTACT</Link>
                {
                    currentUser
                        ? <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                        : <Link className='option' to="/sign">SIGN IN</Link>
                }
                <CartIcon />
            </div>
            {
                hidden ? null : <CartDropdown />
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHiden
})

export default connect(mapStateToProps)(Header);
