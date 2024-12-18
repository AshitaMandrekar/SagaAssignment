import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_FOOD_REQUEST, fetchFoodsSuccess, fetchFoodsFailure } from './Actions';

function* fetchFoods() {
  try {
    const response = yield call(axios.get, 'http://localhost:5000/foods'); // Make sure your API endpoint is correct
    yield put(fetchFoodsSuccess(response.data));  // Dispatch success action
  } catch (error) {
    yield put(fetchFoodsFailure(error.message));  // Dispatch failure action if error occurs
  }
}

export function* rootSaga() {
  yield takeEvery(FETCH_FOOD_REQUEST, fetchFoods);  // Watch for the fetch food request action
}
