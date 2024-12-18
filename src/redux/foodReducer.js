import { FETCH_FOOD_REQUEST, FETCH_FOODS_SUCCESS, FETCH_FOODS_FAILURE } from './Actions';

const initialState = {
  loading: false,
  foods: [],
  error: '',
};

const foodReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FOOD_REQUEST:
      return { ...state, loading: true };
    case FETCH_FOODS_SUCCESS:
      return { ...state, loading: false, foods: action.payload };
    case FETCH_FOODS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default foodReducer;
