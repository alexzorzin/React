import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { WidgetCart } from './WidgetCart';
import { NavLink } from 'react-router-dom';
import { useCartContext } from '.././context/CartContext'
import { Badge } from 'react-bootstrap'

export const NavBar = () => {
    const {cartList} = useCartContext()
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="/React/">ZShoes</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavLink to='/React/catalogo' activeClassName="active" className="link d-flex me-1 mt-2 text-decoration-none text-white">Catálogo</NavLink>
                        <NavDropdown title="Talles" id="navbarScrollingDropdown">
                            <NavLink to='/React/catalogo' activeClassName="active" className="link d-flex ms-2 text-decoration-none text-black">Todos</NavLink>
                            <NavLink to='/React/size/7' activeClassName="active" className="link d-flex ms-2 text-decoration-none text-black">7</NavLink>
                            <NavLink to='/React/size/7.5' activeClassName="active" className="link d-flex ms-2 text-decoration-none text-black">7.5</NavLink>
                            <NavLink to='/React/size/8' activeClassName="active" className="link d-flex ms-2 text-decoration-none text-black">8</NavLink>
                            <NavLink to='/React/size/9' activeClassName="active" className="link d-flex ms-2 text-decoration-none text-black">9</NavLink>
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
                    <NavLink to="/React/cart"  activeClassName="active" className="link ms-2 text-decoration-none text-white">{<WidgetCart />}</NavLink>
                    {cartList.length>0 && <Badge bg="info" className='p-1'>{cartList.length}</Badge>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}
