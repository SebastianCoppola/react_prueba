import Card from './Card.js';
const Products = require('./products.json');

const CardList = () => {
    return ( 
        Products.map((p)=>{
            return(
                <Card title={p.title} price={p.price} image={p.image} key={p.id}/>
            )
        })
    )
}

export default CardList;