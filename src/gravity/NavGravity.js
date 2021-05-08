import React, { useState } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavbarText
  } from 'reactstrap';
   import { ReactComponent as SearchIcon } from "./assets/Search Icon.svg"

const NavGravity = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
             <Navbar color="light" light expand="md">
        <NavbarBrand href="/" style={{backgroundColo: "#222222" ,}}>reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto justify-content-between" navbar>
            <SearchIcon />
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
        </div>
    )
}

export default NavGravity
