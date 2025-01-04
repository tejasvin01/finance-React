import React from 'react';
import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaHome, FaInfoCircle, FaUpload, FaSignOutAlt } from 'react-icons/fa';

function MyNavbar() {
  const location = useLocation();

  const getNavLinkStyle = (path) => {
    return location.pathname === path
      ? { margin: '0 1px', textDecoration: 'underline', color: '#FFFF' }
      : { margin: '0 1px', color: '#FFF' };
  };

  return (
    <>
      <Navbar bg="primary" expand="sm" variant="dark" style={{ height: '5rem',  borderRadius: '25px' }}>
        <Container>
          <Navbar.Brand style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#FFFF' }}>Finance</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Item>
                <Nav.Link href="/home" style={getNavLinkStyle('/home')}>
                  <FaHome style={{ marginRight: '3px' }} /> HOME
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="/details" href="/detail" style={getNavLinkStyle('/detail')}>
                  <FaInfoCircle style={{ marginRight: '3px' }} /> DETAILS
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="/upload" href="/upload" style={getNavLinkStyle('/upload')}>
                  <FaUpload style={{ marginRight: '3px' }} /> UPLOAD
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="/logout" href="/" style={getNavLinkStyle('/')}>
                  <FaSignOutAlt style={{ marginRight: '3px' }} /> LOGOUT
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
