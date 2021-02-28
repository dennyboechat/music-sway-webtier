import Song from './song';

function Songs({ songs }) {
  if (songs && songs.length > 0) {
    return (
      <div>
        {songs.map(song => (
          <div key={song.id}>
            <Song song={song} />
          </div>
        ))}
      </div>
    )
  } else {
    return null
  }
}

export default Songs
