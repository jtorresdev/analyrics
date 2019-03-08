import { handleActions } from 'redux-actions';
import { searchSuccess } from '../actions'

export default handleActions({
    [searchSuccess]: (state, action) => {
        return action.payload;
    }
}, []);