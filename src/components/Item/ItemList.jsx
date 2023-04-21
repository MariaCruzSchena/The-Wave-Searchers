import Item from "./Item";
import { useContext } from "react";
import { ProductsContext } from "./../../contexts/ProductsContext";

const ItemList = () => {
  const { products } = useContext(ProductsContext);
  return products.map((product) => {
    return <Item product={product} key={product.id} />;
  });
};

export default ItemList;
