import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);

if (process.env.NODE_ENV !== 'production' && module.hot) {
	module.hot.accept('./reducers', () => store.replaceReducer(rootReducer));
}

export default store;
