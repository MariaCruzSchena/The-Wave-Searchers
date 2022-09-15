import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ item, amount, setAmount}) => {
    return (
        <div className="itemDetailContainer">
            <div className="itemDetailImg"><img className="itemDetailImg2" src={item.thumbnail} alt="" /></div>
            <div className="itemDetailContent">
                <h3 className="itemDetailTitle">{item.title}</h3>
                <h4 className="itemDetailPrice">$ARS {item.price}</h4>
                <p className="itemDetailParagraph">Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <ItemCount amount={amount} setAmount={setAmount} item= {item}/> 
            </div>
        </div>
    )
}

export default ItemDetail;

