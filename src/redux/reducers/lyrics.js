import { handleActions } from 'redux-actions';
import { lyricsSuccess, lyricsLoading } from '../actions'

export default handleActions({
    [lyricsSuccess]: (state, action) => {
        return {loading: false, results : action.payload};
    },
    [lyricsLoading]: (state, action) => {
        return {loading: true}
    }
}, []);