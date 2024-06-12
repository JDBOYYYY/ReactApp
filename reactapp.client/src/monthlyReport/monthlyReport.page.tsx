import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import dayjs, { Dayjs } from 'dayjs';
import BasicDatePicker from '../../components/Picker';
import { useTranslation } from 'react-i18next';
import { useConfig } from '../ConfigContext';
import './monthlyReport.css';

interface TimeEntry {
  from: string;
  to: string;
  hrs: string;
  entryType: string;
  notes: string;
}

interface MonthData {
  [key: string]: TimeEntry[];
}

const generateMonthData = (year: number, month: number): MonthData => {
  const monthData: MonthData = {};
  const startDate = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  for (let day = 1; day <= daysInMonth; day++) {
    const currentDate = new Date(startDate.getFullYear(), startDate.getMonth(), day);
    const dayString = `${currentDate.toLocaleDateString('en-US', { weekday: 'long' })} ${currentDate.getDate().toString().padStart(2, '0')}.${(currentDate.getMonth() + 1).toString().padStart(2, '0')}`;
    monthData[dayString] = [
      { from: '8:00', to: '8:30', hrs: '0:30', entryType: 'Working hours', notes: 'TimeWise WISE, [WISE-6736] Name of the jira Ticket' },
      { from: '8:30', to: '10:30', hrs: '2:00', entryType: 'Working hours', notes: 'TimeWise WISE, [WISE-6736] Name of the jira Ticket' },
      { from: '10:30', to: '11:00', hrs: '0:30', entryType: 'Working hours', notes: 'TimeWise WISE, [WISE-6736] Name of the jira Ticket' },
      { from: '11:00', to: '16:00', hrs: '5:00', entryType: 'Working hours', notes: 'Standard workday' },
    ];
  }
  return monthData;
};

export const MonthlyReport: React.FC = () => {
  const { t } = useTranslation();
  const { primaryColor } = useConfig();
  const today = new Date();
  const [currentDate, setCurrentDate] = useState<Dayjs>(dayjs(today));

  const data = generateMonthData(currentDate.year(), currentDate.month());

  return (
    <>
      <Row>
        <Col>
          <h2>{t('monthlyReportTitle', { monthYear: currentDate.format('MMMM YYYY') })}</h2>
          <p>{t('employeeName')}</p>
        </Col>
        <Col>
          <BasicDatePicker currentDate={currentDate} onDateChange={setCurrentDate} />
        </Col>
        <Col className="text-end">
          <Button variant={primaryColor} className="me-2">{t('print')}</Button>
          <Button variant={primaryColor}>{t('excel')}</Button>
          <Button variant="secondary" className="ms-2">{t('close')}</Button>
        </Col>
      </Row>
      <Container fluid>
        <Row>
          <div className="table-responsive">
            <Table striped bordered hover className="monthly-report-table">
              <colgroup>
                <col style={{ width: '70px' }} />
                <col style={{ width: '70px' }} />
                <col style={{ width: '70px' }} />
                <col style={{ width: '70px' }} />
                <col style={{ width: '70px' }} />
                <col style={{ width: '70px' }} />
                <col style={{ width: '70px' }} />
                <col style={{ width: '150px' }} />
              </colgroup>
              <thead>
                <tr>
                  <th>{t('day')}</th>
                  <th>{t('from')}</th>
                  <th>{t('to')}</th>
                  <th>{t('hrs')}</th>
                  <th>{t('plus')}</th>
                  <th>{t('target')}</th>
                  <th>{t('difference')}</th>
                  <th>{t('entryType')}</th>
                  <th>{t('notes')}</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(data).map(([day, entries]) => (
                  <React.Fragment key={day}>
                    {entries.map((entry, index) => (
                      <tr key={index}>
                        {index === 0 && <td rowSpan={entries.length + 1}>{day}</td>}
                        <td>{entry.from}</td>
                        <td>{entry.to}</td>
                        <td>{entry.hrs}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="entry-type">{entry.entryType}</td>
                        <td>{entry.notes}</td>
                      </tr>
                    ))}
                    <tr>
                      <td colSpan={3}>{t('subtotal')}</td>
                      <td>8</td>
                      <td>8:30</td>
                      <td>-0:30</td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </React.Fragment>
                ))}
              </tbody>
            </Table>
          </div>
        </Row>
      </Container>
    </>
  );
};
