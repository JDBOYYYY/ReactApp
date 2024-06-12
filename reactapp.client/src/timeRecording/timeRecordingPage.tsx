import { useState, useEffect } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import './TimeRecording.css';
import WeekPicker from '../../components/WeekPicker';
import EditButton from '../../components/editButton';
import { Paper, Typography, Box, Button as MuiButton } from '@mui/material';
import AddTimeEntryForm from './addTimeEntryForm';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import StartIcon from '@mui/icons-material/PlayArrow';
import EndIcon from '@mui/icons-material/Stop';
import BreakStartIcon from '@mui/icons-material/Coffee';
import BreakEndIcon from '@mui/icons-material/CheckCircle';
import OvertimeIcon from '@mui/icons-material/AccessTime';
import { useTranslation } from 'react-i18next';
import { useConfig } from '../ConfigContext';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const TimeRecording = () => {
  const { t } = useTranslation();
  const { primaryColor } = useConfig();

  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [weekDates, setWeekDates] = useState<Date[]>([]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [editingEntry, setEditingEntry] = useState<any>(null);
  const [entries, setEntries] = useState<any[]>([]);

  useEffect(() => {
    const calculateWeekDates = (date: Date) => {
      const startOfWeek = new Date(date);
      startOfWeek.setDate(date.getDate() - ((date.getDay() + 6) % 7));
      return Array.from({ length: 7 }, (_, i) => {
        const day = new Date(startOfWeek);
        day.setDate(startOfWeek.getDate() + i);
        return day;
      });
    };
    const newWeekDates = calculateWeekDates(selectedDate);
    setWeekDates(newWeekDates);
    console.log('Week dates set:', newWeekDates);
  }, [selectedDate]);

  const handleDateClick = (date: Date) => {
    console.log('Date clicked:', date);
    setSelectedDate(date);
  };

  const handleMouseEnter = (event: any) => {
    const index = event.target.cellIndex;
    const rows = event.target.closest('table').rows;
    for (let i = 0; i < rows.length; i++) {
      if (rows[i].cells[index]) {
        rows[i].cells[index].classList.add('highlight-column');
      }
    }
  };

  const handleMouseLeave = (event: any) => {
    const index = event.target.cellIndex;
    const rows = event.target.closest('table').rows;
    for (let i = 0; i < rows.length; i++) {
      if (rows[i].cells[index]) {
        rows[i].cells[index].classList.remove('highlight-column');
      }
    }
  };

  const handleOpen = () => {
    setEditingEntry(null);
    setModalOpen(true);
  };

  const handleClose = () => setModalOpen(false);

  const handleAddEntry = (entry: any) => {
    if (editingEntry !== null) {
      setEntries(entries.map((item, index) => (index === editingEntry ? entry : item)));
    } else {
      setEntries([...entries, entry]);
    }
  };

  const handleEdit = (index: number) => {
    setEditingEntry(index);
    setModalOpen(true);
  };

  const data = {
    labels: weekDates.map((date) => date.toLocaleDateString('en-US', { weekday: 'long' })),
    datasets: [
      {
        label: t('registeredTimeHours'),
        data: weekDates.map(() => Math.floor(Math.random() * 8)), // Example data
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: t('timeRegisteredPerDay'),
      },
    },
  };

  return (
    <Container>
      <Row>
        <Col md={3}></Col>
        <Col md={3}>
          <WeekPicker selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
        </Col>
        <Col md={3} className="text-center quick-entries">
          <Typography variant="h5" gutterBottom>
            {t('quickEntries')}
          </Typography>
          <Box display="grid" gridTemplateColumns="1fr 1fr" gap={2}>
            <MuiButton
              variant="contained"
              color={primaryColor}
              className="button-width"
              startIcon={<StartIcon />}
              title={t('startShift')}
            >
              {t('startShift')}
            </MuiButton>
            <MuiButton
              variant="contained"
              color={primaryColor}
              className="button-width"
              startIcon={<EndIcon />}
              title={t('endShift')}
            >
              {t('endShift')}
            </MuiButton>
            <MuiButton
              variant="contained"
              color={primaryColor}
              className="button-width"
              startIcon={<BreakStartIcon />}
              title={t('breakStart')}
            >
              {t('breakStart')}
            </MuiButton>
            <MuiButton
              variant="contained"
              color={primaryColor}
              className="button-width"
              startIcon={<BreakEndIcon />}
              title={t('breakEnd')}
            >
              {t('breakEnd')}
            </MuiButton>
            <MuiButton
              variant="contained"
              color={primaryColor}
              className="button-width"
              startIcon={<OvertimeIcon />}
              title={t('addOvertime')}
            >
              {t('addOvertime')}
            </MuiButton>
          </Box>
        </Col>
        <Col md={3}></Col>
      </Row>
      <Row>
        <Col md={9} style={{ paddingRight: '0px', height: '189px' }}>
          <Table striped bordered>
            <thead>
              <tr>
                <td></td>
                {weekDates.map((date, i) => (
                  <th
                    key={i}
                    onClick={() => handleDateClick(date)}
                    onMouseOver={handleMouseEnter}
                    onMouseOut={handleMouseLeave}
                  >
                    {date.toLocaleDateString('en-US', { weekday: 'long' })}<br />
                    {date.toLocaleDateString('en-US', { day: '2-digit', month: '2-digit' })}
                  </th>
                ))}
                <th>{t('total')}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{t('targetTime')}</td>
                {weekDates.map((date, i) => (
                  <td key={i} onClick={() => handleDateClick(date)} onMouseOver={handleMouseEnter} onMouseOut={handleMouseLeave}>
                    0:00
                  </td>
                ))}
                <td>0:00</td>
              </tr>
              <tr>
                <td>{t('registeredTime')}</td>
                {weekDates.map((date, i) => (
                  <td key={i} onClick={() => handleDateClick(date)} onMouseOver={handleMouseEnter} onMouseOut={handleMouseLeave}>
                    0:00
                  </td>
                ))}
                <td>0:00</td>
              </tr>
              <tr>
                <td>{t('difference')}</td>
                {weekDates.map((date, i) => (
                  <td key={i} onClick={() => handleDateClick(date)} onMouseOver={handleMouseEnter} onMouseOut={handleMouseLeave}>
                    0:00
                  </td>
                ))}
                <td>0:00</td>
              </tr>
            </tbody>
          </Table>
        </Col>
        <Col md={3} className="centerText" style={{ paddingLeft: '0px' }}>
          <Paper elevation={3} className="dateDisplay">
            <Typography variant="h3">{selectedDate.getDate()}</Typography>
            <Typography variant="h4">{selectedDate.toLocaleDateString('en-US', { weekday: 'long' })}</Typography>
            <Typography variant="h5">{selectedDate.toLocaleDateString('en-US', { month: 'long' })}</Typography>
          </Paper>
        </Col>
      </Row>
      <Row className="my-4">
        <Col md={12} className="d-flex justify-content-center">
          <MuiButton variant="outlined">{t('timeRecording')}</MuiButton>{' '}
          <MuiButton variant="outlined" style={{ marginLeft: '10px' }}>{t('expenses')}</MuiButton>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Table striped bordered>
            <thead>
              <tr>
                <th>{t('date')}</th>
                <th>{t('from')}</th>
                <th>{t('to')}</th>
                <th>{t('hours')}</th>
                <th>{t('entryType')}</th>
                <th>{t('project')}</th>
                <th>{t('notes')}</th>
                <th>{t('edit')}</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry, index) => (
                <tr key={index}>
                  <td>{selectedDate.toLocaleDateString()}</td>
                  <td>{entry.from}</td>
                  <td>{entry.to}</td>
                  <td>{entry.hours}</td>
                  <td>{entry.entryType}</td>
                  <td>{entry.project}</td>
                  <td>{entry.notes}</td>
                  <td>
                    <MuiButton variant="outlined" onClick={() => handleEdit(index)}>
                      <EditButton />
                    </MuiButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row>
        <Col md={12} className="d-flex justify-content-end">
          <MuiButton variant="contained" color={primaryColor} onClick={handleOpen}>
            {t('addEntry')}
          </MuiButton>
          <AddTimeEntryForm
            open={modalOpen}
            handleClose={handleClose}
            handleAddEntry={handleAddEntry}
            existingEntry={editingEntry !== null ? entries[editingEntry] : null}
          />
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Bar data={data} options={options} />
        </Col>
      </Row>
    </Container>
  );
};
