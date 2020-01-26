import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'remote-redux-devtools';
import amplifyAuthReducer from './reducers/Auth';
import AlbumReducer from './reducers/Album';
import { reducer as reduxFormReducer } from 'redux-form';

const enhancer = composeWithDevTools({ realtime: true, port: 8000 });

const store = createStore(
  combineReducers({
    auth: amplifyAuthReducer,
    form: reduxFormReducer,
    album: AlbumReducer,
  }),
  enhancer(applyMiddleware(thunk)),
);

export default store;
