import { 
  LOAD_MYPICK_SUCCESS,
  ADD_MYPICK,
  REMOVE_MYPICK
} from '../MyPick/actions.type'

const mypickReducer = ((state = [], actions) => {
  switch (actions.type) {
    case LOAD_MYPICK_SUCCESS:
      return state
    case ADD_MYPICK:
      return [...state, actions.payload]
    case REMOVE_MYPICK:
      const newState = state.filter(music => music.trackId !== actions.payload)
      return newState
    default:
      return state
  }
})
  
export default mypickReducer