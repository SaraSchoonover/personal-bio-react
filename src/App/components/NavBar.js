import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const authenticated = () => (
    <>
    <NavItem>
    <Link className="nav-link" id="this" to="/about">About Me</Link>
  </NavItem>
  <NavItem>
    <Link className="nav-link" id="that" to="/projects">Projects</Link>
  </NavItem>
  <NavItem>
    <Link className="nav-link" id="who" to="/technologies">Technologies</Link>
  </NavItem>
  <NavItem>
    <Link className="nav-link" id="what" to="/contact">Contact</Link>
  </NavItem>
  </>
  );
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Personal Bio Site</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          {authenticated()}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

// NavBar.propTypes = {
//   user: PropTypes.any
// };

export default NavBar;
