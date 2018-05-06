import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import musicReducer from './reducers/music.store'
import podcastReducer from './reducers/podcast.store'
import mypickReducer from './reducers/mypick.store'
import userReducer from './reducers/user.store'

const reducers = combineReducers({
  musics: musicReducer,
  podcasts: podcastReducer,
  mypicks: mypickReducer,
  user: userReducer
})

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
)

export default store