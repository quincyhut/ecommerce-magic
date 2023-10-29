import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function VerticalNavMenu() {
  return (
    <Navbar expand='sm' className="bg-body-tertiary mb-3">
    <Container fluid>
        <span>Hellow</span>
      <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
      <Navbar.Offcanvas
        id={`offcanvasNavbar-expand-sm`}
        aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
        placement="end"
      >
        <Offcanvas.Body>
            hellow
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Container>
  </Navbar>
  );
}

export default VerticalNavMenu;