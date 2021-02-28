import { useRouter } from 'next/router'
import { useSong } from '@/lib/swr-hooks'
import SongForm from '@/components/song-form'

export default function EditSongForm() {
  const router = useRouter()
  const id = router.query.id?.toString()
  const { song } = useSong(id)

  if (!song) {
    return null;
  }

  return (
    <SongForm song={song} apiEndpoint="/api/edit-song" apiMethod="PATCH" />
  )
}
