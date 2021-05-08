import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler as MenuIconBar,
  NavbarBrand,
  Nav,
  NavbarText,
} from "reactstrap";
import { ReactComponent as SearchIcon } from "./assets/Search Icon.svg";
import { ReactComponent as MenuIcon } from "./assets/Menu Icon.svg";

const NavGravity = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar color="white" light expand="md container-md d-flex d-row justify-content-between">
        <NavbarBrand href="/" style={{ backgroundColo: "#222222", fontWeight: '74.31px' }}>
          Gravity
        </NavbarBrand>
        <SearchIcon isOpen={isOpen}  className="" />
        {/* <Collapse  navbar>
          <Nav className="mr-auto" navbar>
            <SearchIcon className="" />
          </Nav>
        </Collapse> */}
        <MenuIcon onClick={toggle} className="d-sm-none d-md-block" />
      </Navbar>
    </div>
  );
};

export default NavGravity;
