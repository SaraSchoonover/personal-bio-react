import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button
} from 'reactstrap';
import { signInUser, signOutUser } from '../../helpers/auth';

const NavBar = ({ admin }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const authenticated = () => (
    <>
  <NavItem>
    <Link className="nav-link" id="that" to="/add-project">Add Projects</Link>
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
          <NavItem>
    <Link className="nav-link" id="that" to="/projects">Projects</Link>
  </NavItem>
  <NavItem>
    <Link className="nav-link" id="who" to="/technologies">Technologies</Link>
  </NavItem>
  <NavItem>
    <Link className="nav-link" id="what" to="/contact">Contact</Link>
  </NavItem>
          {admin && authenticated()}
          <NavItem>
              {
                admin !== null
                && <NavItem>
                  {
                    admin
                      ? <Button color='danger' onClick={signOutUser}>Sign Out</Button>
                      : <Button color='info' onClick={signInUser}>Sign In</Button>
                  }
                </NavItem>
              }
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

NavBar.propTypes = {
  admin: PropTypes.any
};

export default NavBar;
