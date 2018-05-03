let music_state = [
  {
    trackId: 0,
    artworkUrl60: '',
    artistName: 'Songs 1',
    trackName: 'Songs 1',
    artistViewUrl: 'link Artist',
    trackViewUrl: 'track url',
    previewUrl: 'trackpreview'
  }
]

const musicReducer = ((state = music_state, action) => {
  switch (action.type) {
    case 'LOAD_NEW_MUSIC_DATA':
      return action.payload
    default:
      return state
  }
})

export default musicReducer