/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import Modal from '@mui/material/Modal';
import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

interface AddTimeEntryFormProps {
  open: boolean;
  handleClose: () => void;
  handleAddEntry: (entry: any) => void;
  existingEntry?: any;
}

const AddTimeEntryForm: React.FC<AddTimeEntryFormProps> = ({ open, handleClose, handleAddEntry, existingEntry }) => {
  const { t } = useTranslation();

  const [from, setFrom] = React.useState<string>(existingEntry?.from || '');
  const [to, setTo] = React.useState<string>(existingEntry?.to || '');
  const [hours, setHours] = React.useState<string>(existingEntry?.hours || '');
  const [entryType, setEntryType] = React.useState<string>(existingEntry?.entryType || '');
  const [project, setProject] = React.useState<string>(existingEntry?.project || '');
  const [notes, setNotes] = React.useState<string>(existingEntry?.notes || '');

  React.useEffect(() => {
    if (from && to) {
      const fromTime = dayjs(`1970-01-01T${from}`);
      const toTime = dayjs(`1970-01-01T${to}`);
      const duration = toTime.diff(fromTime, 'minute') / 60;
      setHours(duration.toFixed(2));
    } else if (from && hours) {
      const [hoursPart, minutesPart] = hours.split(':').map(Number);
      const fromTime = dayjs(`1970-01-01T${from}`);
      const toTime = fromTime.add(hoursPart, 'hour').add(minutesPart || 0, 'minute');
      setTo(toTime.format('HH:mm'));
    } else if (to && hours) {
      const [hoursPart, minutesPart] = hours.split(':').map(Number);
      const toTime = dayjs(`1970-01-01T${to}`);
      const fromTime = toTime.subtract(hoursPart, 'hour').subtract(minutesPart || 0, 'minute');
      setFrom(fromTime.format('HH:mm'));
    }
  }, [from, to, hours]);

  const handleHoursChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const timeRegex = /^([0-9]?[0-9]):([0-5][0-9])$/;
    if (timeRegex.test(value)) {
      setHours(value);
    } else {
      setHours('');
    }
  };

  const handleSubmit = () => {
    const newEntry = { from, to, hours, entryType, project, notes };
    handleAddEntry(newEntry);
    handleClose();
  };

  const isFormValid = from && to && hours && entryType && project;

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-title" variant="h6" component="h2">
          {existingEntry ? t('editTimeEntry') : t('addTimeEntry')}
        </Typography>
        <Box component="form" noValidate autoComplete="off">
          <TextField
            margin="normal"
            fullWidth
            id="from"
            label={t('from')}
            type="time"
            InputLabelProps={{
              shrink: true,
            }}
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
          <TextField
            margin="normal"
            fullWidth
            id="to"
            label={t('to')}
            type="time"
            InputLabelProps={{
              shrink: true,
            }}
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
          <TextField
            margin="normal"
            fullWidth
            id="hours"
            label={t('hours')}
            placeholder="H:mm"
            value={hours}
            onChange={handleHoursChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="entryType"
            label={t('entryType')}
            value={entryType}
            onChange={(e) => setEntryType(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="project"
            label={t('project')}
            value={project}
            onChange={(e) => setProject(e.target.value)}
          />
          <TextField
            margin="normal"
            fullWidth
            id="notes"
            label={t('notes')}
            multiline
            rows={4}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            sx={{ mt: 2 }}
            disabled={!isFormValid}
          >
            {existingEntry ? t('saveChanges') : t('addEntry')}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default AddTimeEntryForm;
