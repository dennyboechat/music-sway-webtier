import { useState } from 'react'
import { Skeleton } from '@material-ui/lab';
import Nav from '@/components/nav'
import Header from '@/components/header'
import Container from '@material-ui/core/Container'
import Songs from '@/components/songs'
import { useSongs } from '@/lib/swr-hooks'
import { filter } from 'lodash'

export default function IndexPage(props: { isDarkTheme: boolean, setIsDarkTheme }) {
  const { songs, isLoading } = useSongs()
  const [searchSongValue, setSearchSongValue] = useState('');

  if (isLoading) {
    const songPanelHeight = 110;
    return (
      <div>
        <div className="header-placeholder">
          <Skeleton height={50} width={200} className="songs-list-skeleton-search" />
        </div>
        <Container className="ms-container">
          <Skeleton variant="rect" height={songPanelHeight} className="songs-list-skeleton" />
          <Skeleton variant="rect" height={songPanelHeight} className="songs-list-skeleton" />
          <Skeleton variant="rect" height={songPanelHeight} className="songs-list-skeleton" />
          <Skeleton variant="rect" height={songPanelHeight} className="songs-list-skeleton" />
          <Skeleton variant="rect" height={songPanelHeight} className="songs-list-skeleton" />
          <Skeleton variant="rect" height={songPanelHeight} className="songs-list-skeleton" />
          <Skeleton variant="rect" height={songPanelHeight} className="songs-list-skeleton" />
          <Skeleton variant="rect" height={songPanelHeight} className="songs-list-skeleton" />
        </Container>
      </div>
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
      <Header
        isDarkTheme={props.isDarkTheme}
        setIsDarkTheme={props.setIsDarkTheme}
        searchValue={searchSongValue}
        setSearchValue={setSearchSongValue}
        searchPlaceholder="title, artist, content"
      />
      <Nav />
      <Container className="ms-container">
        <Songs isDarkTheme={props.isDarkTheme} songs={sortedSongs} />
      </Container>
    </div>
  )
}
