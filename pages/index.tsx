import { Skeleton } from '@material-ui/lab';
import Nav from '@/components/nav'
import Container from '@material-ui/core/Container'
import Songs from '@/components/songs'
import { useSongs } from '@/lib/swr-hooks'

export default function IndexPage() {
  const { songs, isLoading } = useSongs()

  if (isLoading) {
    return (
      <Container>
        <Skeleton height={200} />
        <Skeleton height={200} />
        <Skeleton height={200} />
        <Skeleton height={200} />
        <Skeleton height={200} />
      </Container>
    )
  }

  return (
    <div>
      <Nav />
      <Container>
        <Songs songs={songs} />
      </Container>
    </div>
  )
}
