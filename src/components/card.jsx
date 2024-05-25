import './card.css'
function Card(props) {
    const{imageUrl, title, price, rating, description} = props;
    return (
        <>
        <div className="card">
            <div className="image"><img src={imageUrl} alt="Flowers in Chania"></img></div>
            <div className="card-body">
                <div className="title"><h3>{title}</h3></div>
                <div className="price-rating">
                    <div className="price"><span>Price: </span>${price}</div>
                    <div className="rating"><span>Rating: </span> {rating}/5.0</div>
                </div>
                <div className="description">{description}</div>
                <div className="order-cart-btn">
                <div className="cart-btn"><button type="button">Add to cart</button></div>
                <div className="order-btn"><button type="button">Order now</button></div>
            </div>
            </div>
        </div>
        </>
    )
}
export default Card;