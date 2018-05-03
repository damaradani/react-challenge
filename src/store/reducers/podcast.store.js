let podcast_state = [
  {
    trackId: 0,
    artworkUrl60: '',
    artistName: 'PodCast 1',
    trackName: 'Podcast 1',
    artistViewUrl: 'link Artist',
    trackViewUrl: 'track url'
  }
]

const podcastReducer = ((state = podcast_state, action) => {
  switch (action.type) {
    case 'LOAD_NEW_PODCAST_DATA':
      return action.payload
    default:
      return state
  }
})

export default podcastReducer