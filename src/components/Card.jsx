function Card({item}) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">
          {item.description}
        </p>
        <p >
          Rating: {item.rating}
        </p>
        <p>
          Price: S/{item.price}
        </p>
      </div>
    </div>
  );
}

export default Card;
