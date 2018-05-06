import axios from 'axios'

import { 
  LOAD_MUSIC_DATA_SUCCESS,
  LOAD_MUSIC_DATA_PENDING,
  LOAD_MUSIC_DATA_ERROR 
} from './action.type'

export const getMusics = (id) => {
  return dispatch => {
    dispatch(getMusicsPending())
    axios.get(`https://itunes.apple.com/search?term=genre&genreId=${id}&limit=9`)
      .then(({ data }) => dispatch(getMusicsSuccess(data.results)))
      .catch(err => dispatch(getMusicsError(err)))
  }
}

const getMusicsPending = () => ({
  type: LOAD_MUSIC_DATA_PENDING
})

const getMusicsSuccess = (musics) => ({
  type: LOAD_MUSIC_DATA_SUCCESS,
  payload: musics
})

const getMusicsError = (err) => ({
  type: LOAD_MUSIC_DATA_ERROR,
  payload: err
})
