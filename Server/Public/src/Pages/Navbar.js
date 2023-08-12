import React from 'react';
import logo from './CS_log.png';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

// import logo from "./CS_log.png";

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />
        <NavMenu>
            <NavLink to='/' activeStyle><img src={logo} className='Nav-logo' alt="logo" /></NavLink> 
        </NavMenu>
		<NavMenu>
		<NavLink to='/about' activeStyle>
			About
		</NavLink>
		<NavLink to='/search' activeStyle>
			Search
		</NavLink>
		<NavLink to='/scratchCard' activeStyle>
			Scratch Card
		</NavLink>
		<NavLink to='/team' activeStyle>
			Teams
		</NavLink>
		<NavLink to='/blogs' activeStyle>
			Blogs
		</NavLink>
		<NavLink to='/signup' activeStyle>
			Sign Up
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/login'>Sign In</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
