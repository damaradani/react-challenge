// import { LOAD_NEW_PODCAST_DATA } from '../PodCast/actions.type'

// let podcast_state = [
//   {
//     trackId: 0,
//     artworkUrl60: '',
//     artistName: 'PodCast 1',
//     trackName: 'Podcast 1',
//     artistViewUrl: 'link Artist',
//     trackViewUrl: 'track url'
//   }
// ]

// const podcastReducer = ((state = podcast_state, action) => {
//   switch (action.type) {
//     case LOAD_NEW_PODCAST_DATA:
//       return action.payload
//     default:
//       return state
//   }
// })

// export default podcastReducer

import { 
  LOAD_PODCAST_DATA_PENDING,
  LOAD_PODCAST_DATA_SUCCESS,
  LOAD_PODCAST_DATA_ERROR
} from '../PodCast/actions.type'

let initialState = {
  data: null,
  loading: false,
  error: {
    status: false,
    message: ''
  }
}

const podcastReducer = ((state = {...initialState}, action) => {
  switch (action.type) {
    case LOAD_PODCAST_DATA_PENDING:
      return ({
        ...state,
        loading: true
      })
    case LOAD_PODCAST_DATA_SUCCESS:
      return ({
        ...state,
        data: action.payload,
        loading: false
      })
    case LOAD_PODCAST_DATA_ERROR:
      const errorObj = {
        status: true,
        message: action.payload.message
      }
      return ({
        ...state,
        error: {
          ...errorObj
        }
      })
    default:
      return state
  }
})

export default podcastReducer