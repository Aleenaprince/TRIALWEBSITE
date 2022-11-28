import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
  
const Navbar = () => {
  return (
    
      <Nav>
        <Bars />
  
        <NavMenu>
          <NavLink to='/Header' activeStyle>
            HOME
          </NavLink>
          <NavLink to='/Events' activeStyle>
            EVENTS
          </NavLink>
          <NavLink to='/Footer' activeStyle>
            COMPETITIONS
          </NavLink>
        
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>REGISTER NOW</NavBtnLink>
        </NavBtn>
      </Nav>
    
  );
};
  
export default Navbar;