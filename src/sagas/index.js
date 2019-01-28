import { select, take, put, call, takeLatest, all } from 'redux-saga/effects';
import api from '../api';

function* watchAndLog() {
  while (true) {
    const action = yield take('*');
    const state = yield select();

    console.log('action: ', action);
    console.log('state: ', state);
  }
}

function* getRepos() {
  try {
    const json = yield call(api.fetchRepos);
    const repoNames = json.map(repo => {
      return { name: repo.name, url: repo.html_url };
    });
    yield put({ type: 'GET_REPOS_SUCCESS', payload: repoNames });
  } catch (e) {
    yield put({ type: 'GET_REPOS_FAILURE', payload: e.message });
  }
}

function* watchGetRepos() {
  yield takeLatest('GET_REPOS_REQUEST', getRepos);
}

function* rootSaga() {
  yield all([watchGetRepos(), watchAndLog()]);
}

export default rootSaga;
