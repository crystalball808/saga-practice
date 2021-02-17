import { takeEvery, call, put } from 'redux-saga/effects'
import { GET_POSTS, FETCH_POSTS } from './types'


export function* sagaWatcher() {
    yield takeEvery(GET_POSTS, sagaWorker)
}

export function* sagaWorker() {
    try {
        const payload = yield call(fetchPosts);
        console.log(payload)
        yield put({type: FETCH_POSTS, payload: payload})
    } catch (error) {
        console.log('Ошибка' + error.message);
    }

    
}

async function fetchPosts () {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    return await response.json();
}