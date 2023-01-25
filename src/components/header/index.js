import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import './header.scss'
import { Form } from 'react-bootstrap';

function Header() {
  return (
    <div className='nav-wrapper'>
      <div className='container'>
        <Nav className="justify-content-end align-items-center" activeKey="/home">
          <Nav.Item>
            <Form className="d-flex">
              <Form.Control
                size='sm'
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
          </Nav.Item>
          <Nav.Item>
            <FontAwesomeIcon icon={faInfoCircle} />
          </Nav.Item>

          <Nav.Item>
            <Dropdown align="end">
              <Dropdown.Toggle variant="" id="dropdown-basic">
                PDA
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Manage Account</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav.Item>
        </Nav>
      </div>
    </div>
  )
}
export default Header;
