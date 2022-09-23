import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({product}) => {    
    return (
        <div className='cardContainer' key={product.id}>
            <Card className='cardBorder' style={{ width: '18rem' }}> 
                <Card.Img className='cardImg' variant="top" src={product.image} /> 
                <Card.Body className= 'cardBody'> 
                    <Card.Title className='cardTitle'>{product.title}</Card.Title>
                    <Card.Text className='cardText'>$ARS {product.price}</Card.Text>  
                    <Link to={`/detail/${product.id}`}><button className='buttonsAddToCart'>Detalle</button></Link>               
                </Card.Body>
            </Card>
        </div>
    )
}
 
 
export default Item;
