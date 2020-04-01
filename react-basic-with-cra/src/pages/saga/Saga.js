import { put, takeEvery, takeLatest, throttle, select, call, take } from 'redux-saga/effects';
import axios from 'axios';

export function* defSaga() {
    console.log('defsaga');

    yield takeEvery('takeEvery', function* () {
        const state = yield select();
        console.log('takeEvery', state.sagaReducer.sagaUser);
        const res = yield call(axios.post, '/login', { ...state.sagaReducer.sagaUser });
        yield put({
            type:"login_success",
            ...res
        })
        console.log('takeEvery=' + res);
    });

    yield takeLatest('takeLatest', function* () {
        const state = yield select();
        console.log('takeLatest', state.sagaReducer.sagaUser);
        const res = yield call(axios.post, '/login', { ...state.sagaReducer.sagaUser });
        console.log('takeLatest=' + res);
    });
    let count = 0;
    yield throttle(10000, 'throttle', function* () {
        count++;
        const state = yield select();
        console.log('throttle', state.sagaReducer.sagaUser);
        const res = yield call(axios.post, '/login', { ...state.sagaReducer.sagaUser, count: count });
        console.log('throttle result =', res);
    });

    while (true) {
        yield take('take');
        console.log('匹配到了take');
    }
    // count++;
    // const state = yield select();
    // console.log('take', state.sagaReducer.sagaUser);
    // const res = yield call(axios.post, '/login', { ...state.sagaReducer.sagaUser, count: count });
    // console.log('take result =', res);


}