import Container from '@material-ui/core/Container'
import Nav from '@/components/nav'
import EditSongForm from '@/components/edit-song-form'

export default function EditSongPage() {
  return (
    <>
      <Nav title="< Songs" />
      <Container>
        <EditSongForm />
      </Container>
    </>
  )
}
