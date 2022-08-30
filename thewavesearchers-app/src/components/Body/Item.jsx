import Card from 'react-bootstrap/Card';
import { useState } from "react";
 
const Item = ({product, index}) => {
    const [count, setCount] = useState(0);
 
    return (
        <div className='cardContainer' key={index}>
            <Card className='cardBorder' style={{ width: '18rem' }}> 
              <Card.Img className='cardImg' variant="top" src={product.thumbnail} /> 
                <Card.Body> 
                    <Card.Title className='cardTitle'>{product.title}</Card.Title>
 
                    <Card.Text className='cardText'>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
 
                    <div className='buttonsContainer' >
                        <div className='buttonsSubContainer'>
                            <button
                                className='buttonsMinus'
                                onClick = {() => setCount(count - 1 )}
                            >-</button>
                            <p className='buttonsAmount'>{count}</p>
                            <button
                                className='buttonsPlus'
                                onClick = {() => setCount(count + 1)}
                            >+</button>
                        </div>
                        <button className='buttonsAddToCart'>Agregar al carrito</button>
                    </div > 
                </Card.Body>
            </Card>
        </div>
    )
}
 
 
export default Item;
