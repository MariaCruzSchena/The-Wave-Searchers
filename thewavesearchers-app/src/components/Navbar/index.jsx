import CartWidget from './cartWidget';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

const Navbar = ({ categoria1, categoria2, categoria3 }) => {
    return (
        <nav className="nav">            
            <Link to={"/"}><h2 className="logo">The Wave Searchers</h2></Link>  
            <Form className="d-flex">
                <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                />
                <Button className="searchButton">Search</Button>
            </Form>
            <ul className="navList">
               
                <Link to={'/'}><li className="listItem">Home</li></Link>                
                <Dropdown>
                    <Dropdown.Toggle className='dropdownToggle' id="dropdown-basic">
                        Categorias
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item id="1"><Link to={`/category/${categoria1}`}>Longboards</Link></Dropdown.Item>
                        <Dropdown.Item id="2"><Link to={`/category/${categoria2}`}>Funboards</Link> </Dropdown.Item>
                        <Dropdown.Item id="3"><Link to={`/category/${categoria3}`}>Barrenar</Link></Dropdown.Item>  
                    </Dropdown.Menu>
                </Dropdown>
                <li className="listItem"><CartWidget /></li>
              
            </ul>           
        </nav> 
    )
}
 
export default Navbar;
