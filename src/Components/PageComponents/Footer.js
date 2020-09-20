import React from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, NavbarBrand, Container } from 'react-bootstrap'

const Footer = () => {


  return (
    <div className="fixed-bottom">
      <Navbar color="dark" dark>
          <Container>
              <NavbarBrand>Footer</NavbarBrand>
          </Container>
      </Navbar>
  </div>

  )
}

export default Footer
