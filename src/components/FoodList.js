import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFoodRequest } from '../redux/Actions';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function FoodList() {
    const dispatch = useDispatch();
    
    const { loading, foods, error } = useSelector((state) => state.food);

    useEffect(() => {
        dispatch(fetchFoodRequest());
    }, [dispatch]);

    
    if (loading) return <div>Loading...</div>;

    
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="container mt-5">
            <h2>Food Blog</h2>
            <div className="row">
                {foods && foods.length > 0 ? (
                    foods.map((food) => (
                        <div className="col-md-4 mb-4" key={food.id}>
                            <div className="card">
                                <img src={food.image || "https://via.placeholder.com/150"} className="card-img-top" alt={food.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{food.name}</h5>
                                    <p className="card-text">{food.description}</p>
                                    <Link
                                        to={`/food-details/${food.id}`} // Navigates to Food Details page
                                        className="btn btn-primary"
                                    >
                                        View Details
                                    </Link>

                                </div>
                            </div>
                        </div>

                    ))
                ) : (
                    <p>No food items available</p>
                )}
            </div>
        </div>
    );
}

export default FoodList;
