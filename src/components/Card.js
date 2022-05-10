import Counters from './Counters.js';


const Card = ({id,title,image,price}) => {
        return ( 
            <div className="product" key={id}>
                <div className="product-img">
                    <img src={image} />
                </div>
                <h5>{title}</h5>
                <div className="price">
                    <p>U$D {price}</p>
                    <Counters />
                </div>
            </div>
    )
}

export default Card;