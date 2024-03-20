import { useState } from "react";
import Cake from "../components/Cake";

const CakeContainer = () => {
  const [cakes, setCakes] = useState([
    {
      cakeName: "Victoria Sponge",
      ingredients: ["eggs", "butter", "sugar", "self-raising flour", "baking powder", "milk"],
      price: 5,
      rating: 5
    },
    {
      cakeName: "Tea Loaf",
      ingredients: ["eggs", "oil", "dried fruit", "sugar", "self-raising flour", "strong tea"],
      price: 2,
      rating: 3
    },
    {
      cakeName: "Carrot Cake",
      ingredients: ["carrots", "walnuts", "oil", "cream cheese", "flour", "sugar"],
      price: 8,
      rating: 5
    }
  ]);
  // reduce array to single value
  const averageRating = cakes.reduce((total, cake) => total + cake.rating, 0) / cakes.length;

  return (
    <>  
      <h2>Cakes:</h2>
      <p>Average Rating: {averageRating.toFixed(2)}</p> 


      {cakes.map((cake, index) => (
        <Cake key={index} cake={cake} />
      ))}
    </>
  );
}

export default CakeContainer;