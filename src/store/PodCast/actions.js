import { LOAD_NEW_PODCAST_DATA } from './actions.type'

export const getPodcasts = (podcasts) => ({
    type: LOAD_NEW_PODCAST_DATA,
    payload: podcasts
})