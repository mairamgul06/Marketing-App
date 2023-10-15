import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import style from './header.module.scss'
import logo from '../../images/onDark.svg'
function Header() {
    const [open, setOpen] = useState(false);

    return (
        <div className={style.Header}>
            <div className="container">
                <div className={style.HeaderWrapper}>
                    <div className={style.HeaderImage}>
                        <img src={logo} alt="header" />
                    </div>
                    <ul className={style.HeaderMenu}>
                        <NavLink className={style.HeaderLink} style={({ isActive }) => ({ color: isActive ? 'rgb(41, 41, 244)' : '' })} to={'/'}>Product</NavLink>
                        <NavLink className={style.HeaderLink} style={({ isActive }) => ({ color: isActive ? 'rgb(41, 41, 244)' : '' })} to={'feature'}>Features</NavLink>
                        <NavLink className={style.HeaderLink} style={({ isActive }) => ({ color: isActive ? 'rgb(41, 41, 244)' : '' })} to={'market'}>Marketplace</NavLink>
                        <NavLink className={style.HeaderLink} style={({ isActive }) => ({ color: isActive ? 'rgb(41, 41, 244)' : '' })} to={'company'}>Company</NavLink>
                    </ul>
                    <div className={style.HeaderFlex}>
                        <Link to={'sign-in'}>
                            <button className={style.HeaderButton}>Sign In</button>
                        </Link>
                        <Link to={'sign-up'}><button className={style.HeaderBtn}>Sign Up</button></Link>
                    </div>
                    {
                        open ?
                            <div className={style.HeaderBurgerno} onClick={() => setOpen(false)}></div>
                            :
                            <div className={style.HeaderBurger} onClick={() => setOpen(true)}>
                                <span className={style.HeaderLine}></span>
                            </div>
                    }
                    {
                        open && (
                            <ul className={style.HeaderDirect}>
                                <NavLink className={style.HeaderLink} style={({ isActive }) => ({ color: isActive ? 'rgb(41, 41, 244)' : '' })} to={'/'}>Product</NavLink>
                                <NavLink className={style.HeaderLink} style={({ isActive }) => ({ color: isActive ? 'rgb(41, 41, 244)' : '' })} to={'feature'}>Features</NavLink>
                                <NavLink className={style.HeaderLink} style={({ isActive }) => ({ color: isActive ? 'rgb(41, 41, 244)' : '' })} to={'market'}>Marketplace</NavLink>
                                <NavLink className={style.HeaderLink} style={({ isActive }) => ({ color: isActive ? 'rgb(41, 41, 244)' : '' })} to={'company'}>Company</NavLink>
                            </ul>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Header
