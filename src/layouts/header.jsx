import { Container, Nav, Navbar } from "react-bootstrap"

const Header = () => {
    return (
        <header className="header">
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="#">What happened</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#">Introduction</Nav.Link>
                            <Nav.Link href="#">Solution</Nav.Link>
                            <Nav.Link href="#">Rate plan</Nav.Link>
                            <span className="line"></span>
                            <Nav.Link href="#">Login</Nav.Link>
                            <Nav.Link href="#">Apply for free you</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="banner">
                <img src="/images/banner.png" alt="" className="w-100 h-100" />
            </div>
        </header>
    )
}

export default Header