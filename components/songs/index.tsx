import Song from './song';

function Songs(props: { isDarkTheme: boolean, songs }) {
  if (props.songs && props.songs.length > 0) {
    return (
      <div>
        {props.songs.map(song => (
          <div key={song.id}>
            <Song isDarkTheme={props.isDarkTheme} song={song} />
          </div>
        ))}
      </div>
    )
  } else {
    return null
  }
}

export default Songs
