import Nav from '@/components/nav'
import Container from '@material-ui/core/Container'
import SongForm from '@/components/song-form'
import { getNewSong } from '../lib/utils';

export default function NewSongPage() {

  return (
    <>
      <Nav title="< Songs" />
      <Container>
        <SongForm song={getNewSong({ addEntry: true })} apiEndpoint="/api/create-song" apiMethod="POST" />
      </Container>
    </>
  )
}
