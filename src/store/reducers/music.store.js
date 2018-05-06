// import { LOAD_NEW_MUSIC_DATA } from '../Musics/action.type'

// let music_state = [
//   {
//     trackId: 0,
//     artworkUrl60: '',
//     artistName: 'Songs 1',
//     trackName: 'Songs 1',
//     artistViewUrl: 'link Artist',
//     trackViewUrl: 'track url',
//     previewUrl: 'trackpreview'
//   }
// ]

// const musicReducer = ((state = music_state, action) => {
//   switch (action.type) {
//     case LOAD_NEW_MUSIC_DATA:
//       return action.payload
//     default:
//       return state
//   }
// })

// export default musicReducer

import { 
  LOAD_MUSIC_DATA_SUCCESS,
  LOAD_MUSIC_DATA_PENDING,
  LOAD_MUSIC_DATA_ERROR 
} from '../Musics/action.type'

const initialState = {
  data: null,
  loading: false,
  error: {
    status: false,
    message: ''
  }
}

const musicReducer = ((state = {...initialState}, action) => {
  switch (action.type) {
    case LOAD_MUSIC_DATA_PENDING:
      return ({
        ...state,
        loading: true
      })
    case LOAD_MUSIC_DATA_SUCCESS:
      return ({
        ...state,
        data: action.payload,
        loading: false
      })
    case LOAD_MUSIC_DATA_ERROR:
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

export default musicReducer