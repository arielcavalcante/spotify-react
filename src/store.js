import { createStore } from 'redux';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { persistStore, persistReducer } from 'redux-persist';

import userReducer from './pages/store/user.reducer'

const persistConfig = {
    key: 'user',
    storage: storage,
    stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
};

const reducer = persistReducer(persistConfig, userReducer);

export const store = createStore(reducer);
export const persistor = persistStore(store);