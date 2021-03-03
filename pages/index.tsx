import { useState } from 'react'
import { Skeleton } from '@material-ui/lab';
import Nav from '@/components/nav'
import Header from '@/components/header'
import Container from '@material-ui/core/Container'
import Songs from '@/components/songs'
import { useSongs } from '@/lib/swr-hooks'
import { filter } from 'lodash'

export default function IndexPage() {
  const { songs, isLoading } = useSongs()
  const [searchSongValue, setSearchSongValue] = useState('');

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

  let sortedSongs = songs;
  if (searchSongValue.length > 0) {
    sortedSongs = filter(sortedSongs, song => {
      return song.title.toLowerCase().includes(searchSongValue.toLowerCase())
        || song.artist.toLowerCase().includes(searchSongValue.toLowerCase())
        || (song.entries && song.entries.some(entry => (entry.content && entry.content.toLowerCase().includes(searchSongValue.toLowerCase()))));
    });
  }

  return (
    <div>
      <Header searchValue={searchSongValue} setSearchValue={setSearchSongValue} searchPlaceholder="title, artist, content" />
      <Nav />
      <Container>
        <Songs songs={sortedSongs} />
      </Container>
    </div>
  )
}
