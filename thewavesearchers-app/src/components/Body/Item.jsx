import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const Item = ({product, index}) => {    

    return (
        <div className='cardContainer' key={index}>
            <Card className='cardBorder' style={{ width: '18rem' }}> 
                <Card.Img className='cardImg' variant="top" src={product.thumbnail} /> 
                <Card.Body className= 'cardBody'> 
                    <Card.Title className='cardTitle'>{product.title}</Card.Title>
                    <Card.Text className='cardText'>$ARS {product.price}</Card.Text>  
                    <Link to={`/detail/${index}`}><button className='buttonsAddToCart'>Detalle</button></Link>               
                </Card.Body>
            </Card>
        </div>
    )
}
 
 
export default Item;
