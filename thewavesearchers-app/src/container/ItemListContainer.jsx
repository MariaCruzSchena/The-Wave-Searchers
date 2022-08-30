import ItemList from './../components/Body/ItemList'
 
const ItemListContainer = ({ greeting, products }) => {
 
    return (
        <div className="bodyContainer">        
            <div className='imgContainer'>
                <div className="titleContainer">
                    <h2 className="title">{greeting}</h2>
                </div>
            </div>
            <div className='bodyContainer'>
                <ItemList products={products}  />
            </div>
        </div>
    );
}
 
export default ItemListContainer;
