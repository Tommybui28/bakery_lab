const Cake = ({ cake }) => {
    return (
      <div className="cake">
        <h3>{cake.cakeName}</h3>
        <p>Price: ${cake.price}</p>
        <p>Rating: {cake.rating}</p>
        <p>Ingredients: {cake.ingredients.join(", ")}</p>
      </div>
    );
  }
  
  export default Cake;