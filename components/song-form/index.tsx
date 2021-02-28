import { useState, useEffect } from 'react'
import SongEntryForm from './songEntryForm';
import Router from 'next/router'
import Button from '@material-ui/core/Button'
import { getNewSongEntry } from '../../lib/utils';

export default function SongForm({ song, apiEndpoint, apiMethod }) {
  if (!song) {
    return null;
  }

  const [songTitle, setSongTitle] = useState('')
  const [songArtist, setSongArtist] = useState('')
  const [songEntries, setSongEntries] = useState(song.entries || [])
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
      setSongTitle(song.title)  
      setSongArtist(song.artist) 
  }, [song.title, song.artist])

  async function submitHandler(e) {    
    setSubmitting(true)
    e.preventDefault()
    try {
      const res = await fetch(apiEndpoint, {
        method: apiMethod,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: song.id,
          title: songTitle,
          artist: songArtist,
          entries: songEntries
        }),
      })
      setSubmitting(false)
      const json = await res.json()
      if (!res.ok) throw Error(json.message)
      Router.push('/')
    } catch (e) {
      throw Error(e.message)
    }
  }

  const addEntry = () => {
    let entries = [...songEntries];
    entries.push(getNewSongEntry());
    setSongEntries(entries);
  }

  return (
    <>
      <Button id="addEntry" onClick={addEntry}>
        {'Add Entry'}
      </Button>
      <form onSubmit={submitHandler}>
        <div className="my-4">
          <label htmlFor="title">
            <h3 className="font-bold">Title</h3>
          </label>
          <input
            id="title"
            className="shadow border rounded w-full"
            type="text"
            name="title"
            value={songTitle}
            onChange={(e) => setSongTitle(e.target.value)}
            required
          />
        </div>
        <div className="my-4">
          <label htmlFor="artist">
            <h3 className="font-bold">Artist</h3>
          </label>
          <input
            id="artist"
            className="shadow border rounded w-full"
            type="text"
            name="artist"
            value={songArtist}
            onChange={(e) => setSongArtist(e.target.value)}
          />
        </div>
        {
          songEntries.map((entry, index: number) => (
            <SongEntryForm key={index} entries={songEntries} setEntries={setSongEntries} entry={entry} index={index} />
          ))
        }
        <Button id="save" disabled={submitting} type="submit">
          {submitting ? 'Saving ...' : 'Save'}
        </Button>
      </form>
    </>
  )
}
