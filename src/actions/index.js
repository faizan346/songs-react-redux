//Action Creator
export const selectSong = (song) => {
    // REturn Action
    return {
        type: 'SELECTED_SONG',
        payload: song
    }
}