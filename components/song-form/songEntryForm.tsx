import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import { remove } from 'lodash';

export default function SongEntryForm({ entries, setEntries, entry, index }) {

  const onValueChanged = ({ field, value }) => {
    const entriesCopy = entries.map(obj => obj.uuid === entry.uuid ? { ...obj, [field]: value } : obj);
    setEntries(entriesCopy);
  };

  const onDeleteEntry = () => {
    let entriesCopy = { ...entries };
    entriesCopy = remove(entriesCopy, e => { return e.uuid === entry.uuid });
    setEntries(entriesCopy);
  };

  return (
    <div key={index}>
      <Button id="deleteEntry" onClick={onDeleteEntry}>
        {'Delete'}
      </Button>
      <div className="py-2">
        <TextField
          id={`entryTitle_${index}`}
          label="Header"
          placeholder="A header for this section"
          value={entry.title}
          onChange={e => onValueChanged({ field: 'title', value: e.target.value })}
        />
      </div>
      <TextField
        id={`entryContent_${index}`}
        label="Content"
        placeholder="Anything you want"
        value={entry.content}
        rows={20}
        onChange={(e) => onValueChanged({ field: 'content', value: e.target.value })}
        multiline
        variant="filled"
        style={{ width: '100%' }}
      />
    </div>
  )
}
