import React from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, NavbarBrand, Container } from 'react-bootstrap'

const Footer = () => {


  return (
    <div className="fixed-bottom colour-secondary text-style-footer">
      <Navbar variant="light">
          <Container>
              <div>
              Contact: kea.tossavainen(a)gmail.com
              </div>
              <div >
              (c) Kea Tossavainen, 2020)
              <br />
              Built with React</div>
          </Container>
      </Navbar>
  </div>

  )
}

export default Footer
