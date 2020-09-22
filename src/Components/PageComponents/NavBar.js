import React from 'react'
import { Navbar, Nav, NavLink, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'
import { Link } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';
import '../Styles/styles.css'

const NavBar = () => {
  return (
    <div className="fixed-top colour-primary text-style-header">
      <Navbar variant="dark">
        <Nav defaultActiveKey="/" className="m-auto">
        <Nav.Item>
          <Nav.Link href="/">Kea Mesi</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <NavDropdown title="Kea Writes Code" id="basic-nav-dropdown">
            <NavDropdown.Item href="keawritescode">Portfolio</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="curriculumvitae">Curriculum Vitae</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="http://linkedin.com/in/kea-tossavainen-645a1632/">LinkedIn</NavDropdown.Item>
          </NavDropdown>
          </Nav.Item>
          <Nav.Item>
          <NavDropdown title="Kea Makes Things" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/recipes">Recipes</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/patterns">Patterns</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="https://www.instagram.com/keamakesthings/">Instagram</NavDropdown.Item>
          </NavDropdown>
          </Nav.Item>
          <Nav.Item>
          <NavDropdown title="Kea Goes Zero" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/repurpose">Repurpose</NavDropdown.Item>
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
