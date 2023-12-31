import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';

function Header(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar style={{ backgroundColor: '#080808' }} {...args}>
        <NavbarBrand style={{color:'white'}} href="/">MindfulGurukul-Assignment</NavbarBrand>
      </Navbar>
    </div>
  );
}

export default Header;