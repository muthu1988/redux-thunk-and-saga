import { all, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios';

// Our worker Saga: will perform the async ajax call
export function* getActivity() {
    const response = yield axios.get('https://www.boredapi.com/api/activity')
    yield put({ type: 'GET_ACTIVITY', payload: response.data.activity })
}

// Our watcher Saga: spawn a new getActivity task on each GET_ACTIVITY
export function* watchGetActivity() {
    yield takeEvery('GET_ACTIVITY_ASYNC', getActivity)
}

export default function* rootSaga() {
    yield all([
        watchGetActivity()
    ])
}