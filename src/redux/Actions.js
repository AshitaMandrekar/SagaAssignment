export const FETCH_FOOD_REQUEST = 'FETCH_FOOD_REQUEST';
export const FETCH_FOODS_SUCCESS = 'FETCH_FOODS_SUCCESS';
export const FETCH_FOODS_FAILURE = 'FETCH_FOODS_FAILURE';

export const fetchFoodRequest = () => ({
  type: FETCH_FOOD_REQUEST,
});

export const fetchFoodsSuccess = (foods) => ({
  type: FETCH_FOODS_SUCCESS,
  payload: foods,
});

export const fetchFoodsFailure = (error) => ({
  type: FETCH_FOODS_FAILURE,
  payload: error,
});

export const FETCH_FOOD_DETAILS = 'FETCH_FOOD_DETAILS';

export const fetchFoodDetails = (id) => ({
  type: FETCH_FOOD_DETAILS,
  payload: id,
});
