import { LOAD_NEW_MUSIC_DATA } from './action.type'

export const getMusics = (getMusics) => ({
    type: LOAD_NEW_MUSIC_DATA,
    payload: getMusics
})