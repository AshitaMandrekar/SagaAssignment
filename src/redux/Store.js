import { createStore, applyMiddleware } from 'redux';
import rootReducer from './RootReducer';  // Correct path to rootReducer
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './Sagas';  // Correct path to your sagas file

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);  // Ensure your rootSaga is being run

export default store;
