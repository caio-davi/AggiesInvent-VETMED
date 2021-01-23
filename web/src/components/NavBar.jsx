import React, { useState } from "react";

import { BrowserRouter as Router } from "react-router-dom";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
} from "mdbreact";

const NavBar = (props) => {
  return (
    <Router>
      <MDBContainer style={{ width: "200vh" }} fluid>
        <MDBNavbar color="unique-color" dark expand="md">
          <MDBNavbarBrand>
            <strong className="white-text">PATH</strong>
          </MDBNavbarBrand>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="Dashboard">DashBoard</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="Pets">Pets</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Pricing</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              {/* <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="d-none d-md-inline">Dropdown</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">
                    Something else here
                  </MDBDropdownItem>
                  <MDBDropdownItem href="#!">
                    Something else here
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown> */}
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="twitter" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="google-plus-g" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user" />
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="#!">Preferences</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Support</MDBDropdownItem>
                  <MDBDropdownItem divider />
                  <MDBDropdownItem
                    href="#!"
                    onClick={() => props.setAuthenticated(false)}
                  >
                    Logout
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBNavbar>
      </MDBContainer>
    </Router>
  );
};

export default NavBar;
