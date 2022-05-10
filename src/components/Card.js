import Counters from './Counters.js';
const Products = require('./products.json');

const Card = () => {

        return ( 
            Products.map((p)=>{
                return(
                    <div className="product">
                        <div className="product-img">
                            <img src={p.image} />
                        </div>
                        <h5>{p.title}</h5>
                        <div className="price">
                            <p>U$D {p.price}</p>
                            <Counters />
                        </div>
                    </div>
                )
            })
    )
}

export default Card;