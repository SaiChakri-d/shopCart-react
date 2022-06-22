function Card(props) {
  return (
    <>
      <div className="col-lg-4">
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={`${props.data.image}`} alt="..." />
          <div className="card-body">
            <h6 className="card-title">{props.data.title}</h6>
            <h5 className="card-title">Rs. {props.data.price}</h5>
            <ul>
              <li>{props.data.features.processor}</li>
              <li>{props.data.features.display}</li>
              <li> {props.data.features.battery}</li>
              <li>{props.data.features.os}</li>
              <li> {props.data.features.camera} </li>
            </ul>
            <button
              disabled={props.cartitems.some((obj) => obj.id === props.data.id)}
              onClick={() => props.handleAddToCart(props.data.id)}
              className="btn btn-primary"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
