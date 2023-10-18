import { useContext } from 'react';
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import {LinkContainer} from "react-router-bootstrap";
import { DataContext } from '../App';
import {useNavigate} from "react-router-dom";
import { EMPTY_ARRAY_SIZE, STAKEHOLDER_LOCAL_STORAGE_KEY } from '../helpers/constants';
import {startCase} from "lodash";

function Header() {
    const {stakeHolder = {}, setStakeHolder = () => {}} = useContext(DataContext);
    const navigate = useNavigate();
    
    const logoutHandler = () => {
        setStakeHolder({});
        localStorage.removeItem(STAKEHOLDER_LOCAL_STORAGE_KEY);
        navigate("/login")
    }
  return (
    <header>
         <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>SHOPPEY</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
            <Nav className="ml-auto">
              {Object.keys(stakeHolder)?.length > EMPTY_ARRAY_SIZE ? (
                <NavDropdown title={`${stakeHolder.name}, (${startCase(stakeHolder?.role)})`} id="username">
                  <NavDropdown.Item onClick={logoutHandler}>
                     Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                null
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header