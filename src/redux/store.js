import { createStore, combineReducers, applyMiddleware } from 'redux';
import hits from './reducers/search';
import lyrics from './reducers/lyrics';
import artist from './reducers/artist';
import thunk from 'redux-thunk';

const reducer = combineReducers({
	hits,
	lyrics,
	artist
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
