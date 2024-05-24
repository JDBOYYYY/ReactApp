/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import {Col, Container, Row, Table } from 'react-bootstrap';
import './TimeRecording.css';
import WeekPicker from '../../components/WeekPicker';
import EditButton from '../../components/editButton';
import { Paper, Typography, Box, Button as MuiButton } from '@mui/material';
import AddTimeEntryForm from './addTimeEntryForm';

export const TimeRecording = () => {
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

  return (
    <Container>
      <Row>
        <Col md={3}></Col>
        <Col md={3}>
          <WeekPicker selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
        </Col>
        <Col md={3} className="text-center quick-entries">
          <Typography variant="h5" gutterBottom>
            Quick Entries
          </Typography>
          <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
            <MuiButton variant="contained" color="primary" className="button-width">
              Start Shift
            </MuiButton>
            <MuiButton variant="contained" color="primary" className="button-width">
              End Shift
            </MuiButton>
            <MuiButton variant="contained" color="primary" className="button-width">
              Break Start
            </MuiButton>
            <MuiButton variant="contained" color="primary" className="button-width">
              Break End
            </MuiButton>
            <MuiButton variant="contained" color="primary" className="button-width">
              Add Overtime
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
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Target Time</td>
                {weekDates.map((date, i) => (
                  <td key={i} onClick={() => handleDateClick(date)} onMouseOver={handleMouseEnter} onMouseOut={handleMouseLeave}>
                    0:00
                  </td>
                ))}
                <td>0:00</td>
              </tr>
              <tr>
                <td>Registered Time</td>
                {weekDates.map((date, i) => (
                  <td key={i} onClick={() => handleDateClick(date)} onMouseOver={handleMouseEnter} onMouseOut={handleMouseLeave}>
                    0:00
                  </td>
                ))}
                <td>0:00</td>
              </tr>
              <tr>
                <td>Difference</td>
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
          <MuiButton variant="outlined">Time Recording</MuiButton>{' '}
          <MuiButton variant="outlined" style={{ marginLeft: '10px' }}>Expenses</MuiButton>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Table striped bordered>
            <thead>
              <tr>
                <th>Date</th>
                <th>From</th>
                <th>To</th>
                <th>Hours</th>
                <th>Entry Type</th>
                <th>Project</th>
                <th>Notes</th>
                <th>Edit</th>
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
          <MuiButton variant="contained" color="primary" onClick={handleOpen}>
            Add Entry
          </MuiButton>
          <AddTimeEntryForm
            open={modalOpen}
            handleClose={handleClose}
            handleAddEntry={handleAddEntry}
            existingEntry={editingEntry !== null ? entries[editingEntry] : null}
          />
        </Col>
      </Row>
    </Container>
  );
};
