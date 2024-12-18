import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function FoodDetails() {
  const { id } = useParams(); // Get the 'id' from the URL
  const [food, setFood] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(' i m here')
  useEffect(() => {
    const fetchFoodDetails = async () => {
      try {
        
        const response = await axios.get(`http://localhost:5000/foods/${id}`);
        setFood(response.data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching food details");
        setLoading(false);
      }
    };

    fetchFoodDetails();
  }, [id]);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>{error}</div>;

  return (
    <div className="container mt-5">
      {food ? (
        <>
          <h1>{food.name}</h1>
          <p>{food.description}</p>
          <img src={food.image} alt={food.name} className="img-fluid" />
        </>
      ) : (
        <p>No food details found</p>
      )}
    </div>
  );
}

export default FoodDetails;
