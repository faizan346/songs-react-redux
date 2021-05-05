import { combineReducers }  from 'redux';

const songsReducer = () => {
    return [
        {
            title: "black",
            duration: '4:00'
        },
        {
            title: "red",
            duration: '3:00'
        },
        {
            title: "white",
            duration: '6:10'
        },
        {
            title: "yellow",
            duration: '2:50'
        },
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SELECTED_SONG') {
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});