import React from 'react'
import { Navbar, Nav, NavLink, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'
import { Link } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';
import '../Styles/styles.css'

const NavBar = () => {
  return (
    <div className="fixed-top colour-primary text-style-header">
      <Navbar variant="dark">
        <Nav defaultActiveKey="/AboutKea" className="m-auto">
        <Nav.Item>
          <Nav.Link href="/AboutKea">Kea Mesi</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <NavDropdown title="Kea Writes Code" id="basic-nav-dropdown">
            <NavDropdown.Item href="../KeaWritesCode/KeaWritesCode">Portfolio</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="../KeaWritesCode/CV">CV</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="http://linkedin.com/in/kea-tossavainen-645a1632/">LinkedIn</NavDropdown.Item>
          </NavDropdown>
          </Nav.Item>
          <Nav.Item>
          <NavDropdown title="Kea Makes Things" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="../KeaMakesThings/Recipes">Recipes</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="../KeaMakesThings/Patterns">Patterns</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="https://www.instagram.com/keamakesthings/">Instagram</NavDropdown.Item>
          </NavDropdown>
          </Nav.Item>
          <Nav.Item>
          <NavDropdown title="Kea Goes Zero" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="../KeaMakesThings/Recipes">Repurpose</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="https://www.instagram.com/keagoeszero/">Instagram</NavDropdown.Item>
          </NavDropdown>
          </Nav.Item>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link href="#linkedIn"><SocialIcon url="http://linkedin.com/in/kea-tossavainen-645a1632/"/></Nav.Link>
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
