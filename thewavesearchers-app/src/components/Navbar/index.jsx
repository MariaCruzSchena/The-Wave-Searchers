import CartWidget from './cartWidget';
 
 
const Navbar = () => {
    return (
        <nav className="nav">            
            <a href=""><h2 className="logo">The Wave Searchers</h2></a>          
 
            <ul className="navList">
                <li className="listItem"><a href="" >Home</a></li>
                <li className="listItem"><a href="" >Shop</a></li>
                <li className="listItem"><CartWidget /></li>
            </ul>
           
        </nav>
 
    )
}
 
export default Navbar;
