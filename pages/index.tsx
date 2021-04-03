import React, { useState } from "react";
import { Skeleton } from '@material-ui/lab';
import Nav from '@/components/nav'
import Header from '@/components/header'
import Container from '@material-ui/core/Container'
import Songs from '@/components/songs'
import { useSongs } from '@/lib/swr-hooks'
import { forEach, orderBy } from 'lodash'

export default function IndexPage() {
  const { songs, isLoading } = useSongs()
  const [searchSongValue, setSearchSongValue] = useState('');

  if (isLoading) {
    const songPanelHeight = 110;
    return (
      <div>
        <div className="header-placeholder">
          <Skeleton height={50} width={40} className="songs-list-skeleton-search" />
          <Skeleton height={50} width={250} className="songs-list-skeleton-search" />
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

  let sortedSongs = [];
  if (songs.length > 0) {
    forEach(songs, song => {
      if (song.title.toLowerCase().startsWith(searchSongValue.toLowerCase())) {
        song.filterOrder = 1;
        sortedSongs.push(song);
      } else if (song.title.toLowerCase().includes(searchSongValue.toLowerCase())) {
        song.filterOrder = 2;
        sortedSongs.push(song);
      } else if (song.artist.toLowerCase().includes(searchSongValue.toLowerCase())) {
        song.filterOrder = 3;
        sortedSongs.push(song);
      } else if (song.entries && song.entries.some(entry => (entry.content && entry.content.toLowerCase().includes(searchSongValue.toLowerCase())))) {
        song.filterOrder = 4;
        sortedSongs.push(song);
      }
    });

    sortedSongs = orderBy(sortedSongs, ['filterOrder']);
  }

  return (
    <div>
      <Header      
        searchValue={searchSongValue}
        setSearchValue={setSearchSongValue}
        searchPlaceholder="title, artist, content"
      />
      <Nav />
      <Container className="ms-container">
        <Songs songs={sortedSongs} />
      </Container>
    </div>
  )
}
