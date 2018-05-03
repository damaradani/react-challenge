import { createStore, combineReducers } from 'redux'
import musicReducer from './reducers/music.store'
import podcastReducer from './reducers/podcast.store'

const reducers = combineReducers({
  musics: musicReducer,
  podcasts: podcastReducer
})

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store