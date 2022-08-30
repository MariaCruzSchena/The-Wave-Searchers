import Item from "./Item" 
 
const ItemList = ({products}) => {
  products.map((product, index)=> {
    return (              
      <Item product={product} index={index} />         
    )
  })
}
 
export default ItemList;