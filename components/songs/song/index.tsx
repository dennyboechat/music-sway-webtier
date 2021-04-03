import React, { useState, useEffect, useContext, createRef, Ref } from 'react';
// import { mutate } from 'swr'
// import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
// import Slider from '@material-ui/core/Slider';
import Markdown from '../../../components/markdown';
// import { pageScrollDown } from '../../../lib/utils';
import themeContext from '../../../context/themeContext';
// import InteractiveButton from '../../interactive-button';
// import SnackBar from '../../snack-bar';
import { forEach } from 'lodash';

function Song(props: { song }) {
  // const [deleting, setDeleting] = useState(false);
  // const [scrollSpeed, setScrollSpeed] = useState(0);
  const { isDarkTheme } = useContext(themeContext);
  const markdownRef = createRef<HTMLSpanElement>();

  useEffect(() => {
    if (markdownRef && markdownRef.current) {
      let paragraphs = markdownRef.current.getElementsByTagName('p');
      if (paragraphs) {
        forEach(paragraphs, paragraph => {
          paragraph.addEventListener('click', highlightParagraph);
        });
      }
    }
  }, [])

  // async function deleteSong() {
  //   setDeleting(true);
  //   let res = await fetch(`/api/delete-song?id=${props.song.id}`, { method: 'DELETE' });
  //   let json = await res.json();
  //   if (!res.ok) {
  //     throw Error(json.message);
  //   }
  //   mutate('/api/get-songs');
  //   setDeleting(false);
  // }

  // const handleScrollSpeedChange = (e, newValue) => {
  //   setScrollSpeed(newValue);
  //   pageScrollDown(newValue);
  // };

  const cardClassName = isDarkTheme ? 'ms-card ms-card-dark' : 'ms-card ms-card-light';

  const highlightParagraph = (e) => {
    if (e && e.target && e.target.style) {
      const highlighClassName = isDarkTheme ? 'paragraph-highlight-dark' : 'paragraph-highlight-light';

      if (e.target.classList.contains(highlighClassName)) {
        e.target.classList.remove(highlighClassName);
      } else {
        e.target.classList.add(highlighClassName);
      }
    }
  };

  return (
    <Card className={cardClassName}>
      <CardContent>
        <div className="song-card-header">
          <div className="song-card-title-header">
            <Typography component="h4" color="primary">
              {props.song.title}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom color="textSecondary">
              {props.song.artist}
            </Typography>
          </div>
          {/* <InteractiveButton onClick={deleteSong} loading={deleting} tooltip="Delete" /> */}
        </div>
        {/* <div className="flex ml-4">
          <Button
            href={`/song/edit/${props.song.id}`}
          >
            Edit
          </Button>
        </div> */}
        {
          props.song.entries && props.song.entries.map(entry => (
            <Accordion id={`${props.song.id}-${entry.id}`} className="ms-accordion">
              <AccordionSummary
                id={`${props.song.id}-${entry.id}-summary`}
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography className="ms-accordion-title">{entry.title}</Typography>
                {/* <Slider
                  id={`${props.song.id}-${entry.id}-slider`}
                  value={scrollSpeed}
                  defaultValue={0}
                  step={1}
                  marks
                  min={0}
                  max={5}
                  onChange={handleScrollSpeedChange}
                  onClick={e => e.stopPropagation()}
                  className="ms-accordion-scroll-speed"
                  aria-labelledby="continuous-slider"
                /> */}
              </AccordionSummary>
              <AccordionDetails>
                <span ref={markdownRef as Ref<HTMLSpanElement>}>
                  <Markdown className="markdown-text" content={entry.content} />
                </span>
              </AccordionDetails>
            </Accordion>
          ))
        }
      </CardContent>
      {/* <SnackBar id="songDeleted" message="Song was deleted." show={true} /> */}
    </Card>
  )
}

export default Song
