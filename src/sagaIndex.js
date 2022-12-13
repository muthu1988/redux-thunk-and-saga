import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import reducer from './sagas/reducers';
import rootSaga from './sagas/boredSaga';

const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([sagaMiddleware]),
})

sagaMiddleware.run(rootSaga);

store.subscribe(() => {
    const state = store.getState();
    console.log(state)
});

store.dispatch({ type: 'GET_ACTIVITY_ASYNC' });


