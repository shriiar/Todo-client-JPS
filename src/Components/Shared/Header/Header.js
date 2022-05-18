import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from '../Customlink/CustomLink';
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';


const Header = () => {
    const [user] = useAuthState(auth);
    const userSignOut = () => {
        signOut(auth);
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="" className='nav-bg mb-4' sticky='top' variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    {/* <img src={logo} width="100px" alt="header logo" className='img-fluid' /> */}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <CustomLink className="me-4 navLink" to="/">Home</CustomLink>

                        <CustomLink className="me-4 navLink" to="/tasks">Tasks</CustomLink>
                        <CustomLink className="me-4 navLink" to="/addTask">Add Task</CustomLink>
                        {
                            !user ? <>
                                <CustomLink className="me-4 navLink" to="/login">Login</CustomLink></>
                                :
                                <>
                                    <span className='navLink border-0 fw-bold user-name me-4' style={{ color: "white" }}>{user?.displayName}</span>
                                    <button className="navLink border-0 text-center bg-transparent text-start p-0" onClick={userSignOut}>Sign Out</button></>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;