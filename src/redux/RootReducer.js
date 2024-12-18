import { combineReducers } from 'redux';
import foodReducer from './foodReducer';  // Correct path to foodReducer

const rootReducer = combineReducers({
  food: foodReducer,  // Ensure you access `food` key in the state
});

export default rootReducer;
