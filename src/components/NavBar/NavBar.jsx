import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { WidgetCart } from './WidgetCart';

export const NavBar = () => {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="#">ZShoes</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#catalogo">Catálogo</Nav.Link>
                        <NavDropdown title="Más" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#metodos-de-pago">Metodos de pago</NavDropdown.Item>
                            <NavDropdown.Item href="#entregas">Entregas</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#sobre-nosotros">
                                Sobre nosotros
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex container">
                        <FormControl
                            type="search"
                            placeholder="Buscar modelos..."
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-info">Buscar</Button>
                    </Form>
                    <Nav> 
                        <Nav.Link href="#cart">
                            <WidgetCart/>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}
