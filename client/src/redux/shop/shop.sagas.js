import { takeLatest, call, put, all } from 'redux-saga/effects';
import {
    convertCollectionsSnapshotToMap,
    firestore,
} from '../../firebase/firebase.utils';
import {
    fetchCollectionsFailure,
    fetchCollectionsSuccess,
} from './shop.actions';

import ShopActionTypes from './shop.types';

export function* fetchCollectionsAsync() {
    yield console.log('fired.');
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();

        const collectionsMap = yield call(
            convertCollectionsSnapshotToMap,
            snapshot
        );

        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch (err) {
        yield put(fetchCollectionsFailure(err.message));
    }

    // collectionRef
    //     .get()
    //     .then((snapshot) => {
    //         const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //         dispatch(fetchCollectionsSuccess(collectionsMap));
    //     })
    //     .catch((err) => {
    //         dispatch(fetchCollectionsFailure(err.message));
    //     });
}

export function* fetchCollectionsStart() {
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
    );
}

export function* shopSagas() {
    yield all([call(fetchCollectionsStart)])
}