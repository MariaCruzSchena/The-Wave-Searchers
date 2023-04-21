import CartWidget from "./CartWidget";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../../contexts/CartContext";
import { ProductsContext } from "../../contexts/ProductsContext";

const Navbar = () => {
  const { totalProducts, cartproducts } = useContext(CartContext);
  const { categorySetter } = useContext(ProductsContext);
  const [totalamount, setTotalamount] = useState(totalProducts);
  const [cat, setCat] = useState("");

  const categorySetterHandler = (event) => {
    setCat(event.target.value);
  };

  useEffect(() => {
    categorySetter(cat);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cat]);

  const catChangerHandler = () => {
    setCat("");
  };

  useEffect(() => {
    let tot = totalProducts();
    setTotalamount(tot);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartproducts]);

  return (
    <nav className="nav">
      <Link to={"/"}>
        <h2 className="logo" onClick={catChangerHandler}>
          The Wave Searchers
        </h2>
      </Link>
      <ul className="navList">
        <Link to={"/"}>
          <li className="listItem" onClick={catChangerHandler}>
            Home
          </li>
        </Link>

        <select className="select listItem" onChange={categorySetterHandler}>
          <option value="">ALL SURFBOARDS</option>
          <option value="funboard">FUNBOARD</option>
          <option value="longboard">LONGBOARD</option>
        </select>

        {totalamount >= 1 ? (
          <Link to={"/cart"}>
            <li className="listItem">
              <CartWidget />
              {totalamount}
            </li>
          </Link>
        ) : (
          <></>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
