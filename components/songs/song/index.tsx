import { useState } from 'react'
import { mutate } from 'swr'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';

function Song({ song }) {
  const [deleting, setDeleting] = useState(false)

  async function deleteSong() {
    setDeleting(true)
    let res = await fetch(`/api/delete-song?id=${song.id}`, { method: 'DELETE' })
    let json = await res.json()
    if (!res.ok) throw Error(json.message)
    mutate('/api/get-songs')
    setDeleting(false)
  }
  return (
    <Card className="ms-card">
      <CardContent>
        <Typography component="h4">
          {song.title}
        </Typography>
        <Typography variant="caption" display="block" gutterBottom color="textSecondary">
          {song.artist}
        </Typography>
        {/* <div className="flex ml-4">
          <Button
            href={`/song/edit/${song.id}`}
          >
            Edit
          </Button>
          <Button
            disabled={deleting}
            onClick={deleteSong}
          >
            {deleting ? 'Deleting ...' : 'Delete'}
          </Button>
        </div> */}
        {
          song.entries && song.entries.map(entry => (
            <Accordion className="ms-accordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                id={`${song.id}-${entry.id}`}
              >
                {entry.title}
              </AccordionSummary>
              <AccordionDetails>
                {entry.content}
              </AccordionDetails>
            </Accordion>
          ))
        }
      </CardContent>
    </Card>
  )
}

export default Song
