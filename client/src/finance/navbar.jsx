import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaHome, FaInfoCircle, FaUpload } from 'react-icons/fa';
import './navbar.css';

function MyNavbar() {
  const location = useLocation();

  const getNavLinkStyle = (path) => {
    return location.pathname === path
      ? { textDecoration: 'underline', color: '#fff' }
      : { color: '#bbb' };
  };

  const navigate = useNavigate();

  return (
    <Navbar bg="primary" expand="sm" variant="dark" className="custom-navbar">
      <Navbar.Brand className='txt'>Finance</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link onClick={() => navigate('/home')} style={getNavLinkStyle('/home')}>
              <FaHome /> HOME
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => navigate('/detail')} style={getNavLinkStyle('/detail')}>
              <FaInfoCircle /> DETAILS
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => navigate('/upload')} style={getNavLinkStyle('/upload')}>
              <FaUpload /> UPLOAD
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
