import { ApolloServer, gql } from 'apollo-server-micro';
import { query } from '../../lib/db'
import { getNewSong } from '../../lib/utils';
import {forEach} from 'lodash';

const typeDefs = gql`
type SongEntry {
  id: ID
  title: String
  content: String
}

type Song {
  id: ID
  title: String!
  artist: String
  entries: [SongEntry]
}

type Query {
  song(id: String!): Song
}
`;

const resolvers = {
  Query: {
    song: async (_, { id }) => {
      try {
        const results = await query(
          `
        SELECT 
          song.id as songId, 
          song.title as songTitle,
          song.artist as songArtist,
          song_entry.id as entryId, 
          song_entry.title as entryTitle, 
          song_entry.content as entryContent
        FROM 
          song
        LEFT JOIN song_entry on song_entry.song_id = song.id
        WHERE song.id = ?
        `,
          id
        )

        let song = getNewSong({ addEntry: false });
        forEach(results, data => {
          song.id = data.songId;
          song.title = data.songTitle;
          song.artist = data.songArtist;
          song.entries.push({ id: data.entryId, title: data.entryTitle, content: data.entryContent });
        });

        return song
      } catch (e) {
        console.error(e.message);
      }
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false,
  },
}

export default server.createHandler({ path: "/api/get-song" });
