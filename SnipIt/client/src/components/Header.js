import React from "react";
import { Link } from "react-router-dom";
import { NavLink as RRNavLink } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { logout } from '../modules/authManager';
import { useState } from "react";

export default function Header({ isLoggedIn }) {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);



    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand tag={RRNavLink} to="/">SnipIt</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>

                        {isLoggedIn &&
                            <NavItem>
                                <NavLink tag={RRNavLink} to="/">Home</NavLink>
                            </NavItem>
                        }

                        {isLoggedIn &&
                            <NavItem>
                                <NavLink tag={RRNavLink} to="/snipit/create">New SnipIt</NavLink>
                            </NavItem>
                        }

                        {isLoggedIn &&
                            <NavItem>
                                <NavLink tag={RRNavLink} to="/favorite">Favorites</NavLink>
                            </NavItem>
                        }

                        {isLoggedIn &&
                            <NavItem>
                                <NavLink tag={RRNavLink} to="/consoles">Consoles</NavLink>
                            </NavItem>
                        }
                        {isLoggedIn &&
                            <UncontrolledDropdown inNavbar nav>
                                <DropdownToggle caret nav>Options</DropdownToggle>
                                <DropdownMenu end>
                                    <DropdownItem>
                                        <NavItem tag={RRNavLink} to="/languages">Languages</NavItem>
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        <NavItem tag={RRNavLink} to="/tags">Tags</NavItem>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        }

                    </Nav>

                    <Nav navbar>
                        {isLoggedIn &&
                            <>
                                <NavItem>
                                    <a aria-current="page" className="nav-link"
                                        style={{ cursor: "pointer" }} onClick={logout}>Logout</a>
                                </NavItem>
                            </>
                        }
                        {!isLoggedIn &&
                            <>
                                <NavItem>
                                    <NavLink tag={RRNavLink} to="/login">Login</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={RRNavLink} to="/register">Register</NavLink>
                                </NavItem>
                            </>
                        }
                    </Nav>

                </Collapse>
            </Navbar>
        </div>
    );
};
