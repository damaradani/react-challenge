import axios from 'axios'

import { 
  LOAD_PODCAST_DATA_PENDING,
  LOAD_PODCAST_DATA_SUCCESS,
  LOAD_PODCAST_DATA_ERROR
} from './actions.type'

// export const getPodcasts = (podcasts) => ({
//     type: LOAD_NEW_PODCAST_DATA,
//     payload: podcasts
// })

export const getPodcasts = (id) => {
  return dispatch => {
    dispatch(getPodcastsPending())
    axios.get(`https://itunes.apple.com/search?term=genre&genreId=${id}&limit=9`)
      .then(({ data }) => dispatch(getPodcastsSuccess(data.results)))
      .catch(err => dispatch(getPodcastsError(err)))
  }
}

// 3 function for get data
const getPodcastsPending = () => ({
  type: LOAD_PODCAST_DATA_PENDING   
})

const getPodcastsSuccess = (podcasts) => ({
  type: LOAD_PODCAST_DATA_SUCCESS,
  payload: podcasts
})

const getPodcastsError = (err) => ({
  type: LOAD_PODCAST_DATA_ERROR,
  payload: err
})
