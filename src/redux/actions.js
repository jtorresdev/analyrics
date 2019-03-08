import { createAction } from 'redux-actions';
import { searchSongs, getLyrics } from '../services/genius'

export const searchSuccess = createAction('searchSuccess');

export const search = (query) => async (dispatch) => {
    const response = await searchSongs(query);
    dispatch(searchSuccess(response.data.response.hits))
}

export const lyricsSuccess = createAction('lyricsSuccess');
export const lyricsLoading = createAction('lyricsLoading');

export const getArtist = createAction('getArtist', (data) => {
    return {
        artist_image: data.primary_artist.header_image_url,
        artist_name: data.primary_artist.name,
        song_title: data.title,
        song_image: data.header_image_thumbnail_url
    }
})

export const lyrics = (name, artist) => async (dispatch) => {
    dispatch(lyricsLoading())
    const response = await getLyrics(name, artist);
    dispatch(lyricsSuccess(response))
}