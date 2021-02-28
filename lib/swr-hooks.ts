import { request, gql } from 'graphql-request';
import useSWR from 'swr';

const songsQuery = gql`
  {
    songs {
      id 
      title 
      artist
      entries { 
        id
        title
        content
      }
    }
  }
`;

export function useSongs() {
  const { data, error } = useSWR(songsQuery, query => request('/api/get-songs', query));
  return {
    songs: data ? data.songs : [],
    isLoading: !error && !data,
    isError: error,
  }
}

const songQuery = gql`
query($id: String!) {
    song(id: $id) {
      id 
      title 
      artist
      entries { 
        id
        title
        content
      }
    }
  }
`;

export function useSong(id: String) {
  const { data, error } = useSWR(songQuery, query => request('/api/get-song', query, { id }));
  return {
    song: data ? data.song : null,
    isLoading: !error && !data,
    isError: error,
  }
}
