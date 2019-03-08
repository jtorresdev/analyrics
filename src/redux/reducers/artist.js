import { handleActions } from 'redux-actions';
import { getArtist } from '../actions'

export default handleActions({
    [getArtist]: (state, action) => {
        return action.payload;
    }
}, []);