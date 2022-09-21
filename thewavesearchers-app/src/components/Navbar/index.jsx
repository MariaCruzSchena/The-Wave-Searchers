import CartWidget from './CartWidget';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "./../../contexts/CartContext";

const Navbar = ({ categoria1, categoria2, categoria3 }) => {
    const {totalProducts, cartproducts} = useContext(CartContext);
    const [totalamount , setTotalamount] = useState(totalProducts)

    useEffect(() => {
        let tot = totalProducts();
        setTotalamount(tot)
    }, [cartproducts]);
    console.log(cartproducts);

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
                {totalamount > 1 ? 
                <Link to={'/cart'}><li className="listItem"><CartWidget />{totalamount}</li></Link>                 
                : <></>
                }  
              
            </ul>           
        </nav> 
    )
}
 
export default Navbar;
