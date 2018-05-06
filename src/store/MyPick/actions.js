// import axios from 'axios'

import { 
    LOAD_MYPICK_SUCCESS,
    ADD_MYPICK,
    REMOVE_MYPICK
} from './actions.type'

export const getMyPick = () => ({
  type: LOAD_MYPICK_SUCCESS
})

export const addMyPick = (mypick) => ({
  type: ADD_MYPICK,
  payload: mypick
})

export const removeMyPick = (mypick) => ({
  type: REMOVE_MYPICK,
  payload: mypick
})

// export const getMyPick = () => {
//   return dispatch => {
//     dispatch(getMyPickPending())

//   }
// }

// function for getMyPick buat nanti kalo dah axios
// const getMyPickPending = () => ({
//   type: LOAD_MYPICK_PENDING
// })

// const getMyPickSuccess = (mypicks) => ({
//   type: LOAD_MYPICK_SUCCESS,
//   payload: mypicks
// })

// const getMyPickError = (err) => ({
//   type: LOAD_MYPICK_ERROR,
//   payload: err
// })