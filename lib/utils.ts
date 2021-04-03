import { v4 } from 'uuid';

export const getNewSongEntry = () => {
    return {
        uuid: v4(),
        id: null,
        title: '',
        content: ''
    }
}

export const getNewSong = ({ addEntry }) => {
    const entries = [];
    if (addEntry) {
        entries.push(getNewSongEntry());
    }
    return {
        id: null,
        title: '',
        artist: '',
        entries
    };
}

// export const validateSong = ({ song }) => {
//     if (song) {
//         if (!song.title || song.title === '' || song.title.trim().length === 0) {
//             return 'Add a song title, dude!';
//         }
//     }
//     return null;
// }

export const pageScrollDown = (speed) => {
    if (speed) {        
        // window.scrollBy(0, 1);
        
        // const t = setTimeout(() => {pageScrollDown(speed)}, 500/speed);
        
        // if (speed > 20) {
        //     clearTimeout(t);
        // }

    }
}