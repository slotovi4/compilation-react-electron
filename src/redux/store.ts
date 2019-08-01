import * as reduxModule from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

// @ts-ignore
reduxModule.__DO_NOT_USE__ActionTypes.INIT = '@@redux/INIT';
// @ts-ignore
reduxModule.__DO_NOT_USE__ActionTypes.REPLACE = '@@redux/REPLACE';

const store = reduxModule.createStore(
    rootReducer,
    initialState,
    reduxModule.compose(
        reduxModule.applyMiddleware(...middleware),
        // @ts-ignore
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;
