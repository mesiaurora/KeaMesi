import React from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { SocialIcon } from 'react-social-icons';

const NavBar = () => {


  return (
    <div>
      <Navbar bg="light" variant="light">
      <Navbar sticky="top" />
        <Nav fill variant="tabs" defaultActiveKey="/aboutKea">
        <Nav.Item>
          <Nav.Link href="/aboutKea">Kea Mesi</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <NavDropdown title="Kea Writes Code" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">About Kea</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">CV</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="http://linkedin.com/in/kea-tossavainen-645a1632/">LinkedIn</NavDropdown.Item>
          </NavDropdown>
          </Nav.Item>
          <Nav.Item>
          <NavDropdown title="Kea Makes Things" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Recipes</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Patterns</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="https://www.instagram.com/keamakesthings/">Instagram</NavDropdown.Item>
          </NavDropdown>
          </Nav.Item>
          <Nav.Item>
          <NavDropdown title="Kea Goes Zero" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Repurpose</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="https://www.instagram.com/keagoeszero/">Instagram</NavDropdown.Item>
          </NavDropdown>
          </Nav.Item>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link href="#linkedIn"><SocialIcon url="http://linkedin.com/in/kea-tossavainen-645a1632/" /></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#gitHub"><SocialIcon url="http://github.com/mesiaurora" /></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#etsy"><SocialIcon url="http://etsy.com/shop/KeaMakesThings" /></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#blogger"><SocialIcon url="http://keamesi.blogspot.com/" /></Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </div>
  )
}

export default NavBar
