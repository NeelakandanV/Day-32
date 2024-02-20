import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, NavDropdown } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { children } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

export default function BaseApp({title,children}){

  const history = useHistory();
    
    return(
        <div className="baseParent">
            <div className="Title">
                <h2>E-Library System</h2>
            </div>

            <div className="Navigation">
                <Navbar key={false} expand={false} className="bg-body-tertiary mb-3">
                  <Container fluid>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`} />
                    <p className='PageTitle'>{title}</p>
                    <Navbar.Offcanvas
                      id={`offcanvasNavbar-expand-false`}
                      aria-labelledby={`offcanvasNavbarLabel-expand-false`}
                      placement="start"
                    >
                      <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-false`}>
                          E-Library Management System
                        </Offcanvas.Title>
                      </Offcanvas.Header>
                      <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                          <Nav.Link href="/Home"><FontAwesomeIcon icon={faHouse} size="lg" style={{color: "#2a63c6",}} />{' '}Home</Nav.Link>
        
                          <NavDropdown
                            title="Users"
                            id={`offcanvasNavbarDropdown-expand-false`}
                          >
                            <NavDropdown.Item href="/Users"><FontAwesomeIcon icon={faUser} size="lg" style={{color: "#45444b",}} />{" "}User Data</NavDropdown.Item>
                            <NavDropdown.Item href="/Create-User"><FontAwesomeIcon icon={faCirclePlus} size="lg" />{" "}Create User</NavDropdown.Item>
                          </NavDropdown>
        
                          <NavDropdown
                            title="Books"
                            id={`offcanvasNavbarDropdown-expand-false`}
                          >
                            <NavDropdown.Item href="/Books"><FontAwesomeIcon icon={faBook} size="lg" />{" "}Books Available</NavDropdown.Item>
                            <NavDropdown.Item href="/Create-Book"><FontAwesomeIcon icon={faCirclePlus} size="lg" />{" "}Add new Book</NavDropdown.Item>
                          </NavDropdown>
                          
                          <Button onClick={()=>history.push("/")} variant="danger"><FontAwesomeIcon icon={faPowerOff} size="lg" style={{color: "#050505",}} />{" "}Logout</Button>
                        </Nav>
                      </Offcanvas.Body>
                    </Navbar.Offcanvas>
                  </Container>
                </Navbar>
            </div>

            <div className='Content'>
                {children}
            </div>

            <div className='footer'>
                <p>Mail us : <a href="mailto:elibrary@gmail.com">elibrary@gmail.com</a></p>
                <p>All Rights Reserved@2024</p>
            </div>

        </div>
        
    );
}