
const initialState = {
  email: ''
}

const reducers = (state = {...initialState}, action) => {
  switch (action.type) {
    case 'login':
      return {
        ...initialState,
        email: action.payload
      }
  
    default:
      return state
  }
}

export default reducers