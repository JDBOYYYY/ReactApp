import React, { useState } from 'react';
import { Button, Container, Row, Col, Table } from 'react-bootstrap';
import YearPicker from '../../components/YearPicker';
import './yearReport.css';
import dayjs, { Dayjs } from 'dayjs';

interface ReportData {
  month: string;
  workingHours: string;
  absences: string;
  holidays: string;
  targetTime: string;
  difference: string;
  balancePrevYear: string;
  creditCurrentYear: string;
  balanceCorrections: string;
  enteredHours: string;
  balanceEndMonth: string;
  overtimeShortage: string;
  subtotal: string;
  presenceTime: string;
  presencePercentage: string;
}

const data: ReportData[] = [
  { month: 'Jan', workingHours: '176:00', absences: '0:00', holidays: '0:00', targetTime: '0:00', difference: '176:00', balancePrevYear: '874:40', creditCurrentYear: '224:00', balanceCorrections: '0:00', enteredHours: '0:00', balanceEndMonth: '1098:40', overtimeShortage: '176:00', subtotal: '176:00', presenceTime: '176:00', presencePercentage: '100,00%' },
  { month: 'Jan', workingHours: '176:00', absences: '0:00', holidays: '0:00', targetTime: '0:00', difference: '176:00', balancePrevYear: '874:40', creditCurrentYear: '224:00', balanceCorrections: '0:00', enteredHours: '0:00', balanceEndMonth: '1098:40', overtimeShortage: '176:00', subtotal: '176:00', presenceTime: '176:00', presencePercentage: '100,00%' },
  { month: 'Jan', workingHours: '176:00', absences: '0:00', holidays: '0:00', targetTime: '0:00', difference: '176:00', balancePrevYear: '874:40', creditCurrentYear: '224:00', balanceCorrections: '0:00', enteredHours: '0:00', balanceEndMonth: '1098:40', overtimeShortage: '176:00', subtotal: '176:00', presenceTime: '176:00', presencePercentage: '100,00%' },
  { month: 'Jan', workingHours: '176:00', absences: '0:00', holidays: '0:00', targetTime: '0:00', difference: '176:00', balancePrevYear: '874:40', creditCurrentYear: '224:00', balanceCorrections: '0:00', enteredHours: '0:00', balanceEndMonth: '1098:40', overtimeShortage: '176:00', subtotal: '176:00', presenceTime: '176:00', presencePercentage: '100,00%' },
  { month: 'Jan', workingHours: '176:00', absences: '0:00', holidays: '0:00', targetTime: '0:00', difference: '176:00', balancePrevYear: '874:40', creditCurrentYear: '224:00', balanceCorrections: '0:00', enteredHours: '0:00', balanceEndMonth: '1098:40', overtimeShortage: '176:00', subtotal: '176:00', presenceTime: '176:00', presencePercentage: '100,00%' },
  { month: 'Jan', workingHours: '176:00', absences: '0:00', holidays: '0:00', targetTime: '0:00', difference: '176:00', balancePrevYear: '874:40', creditCurrentYear: '224:00', balanceCorrections: '0:00', enteredHours: '0:00', balanceEndMonth: '1098:40', overtimeShortage: '176:00', subtotal: '176:00', presenceTime: '176:00', presencePercentage: '100,00%' },
  { month: 'Jan', workingHours: '176:00', absences: '0:00', holidays: '0:00', targetTime: '0:00', difference: '176:00', balancePrevYear: '874:40', creditCurrentYear: '224:00', balanceCorrections: '0:00', enteredHours: '0:00', balanceEndMonth: '1098:40', overtimeShortage: '176:00', subtotal: '176:00', presenceTime: '176:00', presencePercentage: '100,00%' },
  { month: 'Jan', workingHours: '176:00', absences: '0:00', holidays: '0:00', targetTime: '0:00', difference: '176:00', balancePrevYear: '874:40', creditCurrentYear: '224:00', balanceCorrections: '0:00', enteredHours: '0:00', balanceEndMonth: '1098:40', overtimeShortage: '176:00', subtotal: '176:00', presenceTime: '176:00', presencePercentage: '100,00%' },
  { month: 'Jan', workingHours: '176:00', absences: '0:00', holidays: '0:00', targetTime: '0:00', difference: '176:00', balancePrevYear: '874:40', creditCurrentYear: '224:00', balanceCorrections: '0:00', enteredHours: '0:00', balanceEndMonth: '1098:40', overtimeShortage: '176:00', subtotal: '176:00', presenceTime: '176:00', presencePercentage: '100,00%' },
  { month: 'Jan', workingHours: '176:00', absences: '0:00', holidays: '0:00', targetTime: '0:00', difference: '176:00', balancePrevYear: '874:40', creditCurrentYear: '224:00', balanceCorrections: '0:00', enteredHours: '0:00', balanceEndMonth: '1098:40', overtimeShortage: '176:00', subtotal: '176:00', presenceTime: '176:00', presencePercentage: '100,00%' },
  { month: 'Jan', workingHours: '176:00', absences: '0:00', holidays: '0:00', targetTime: '0:00', difference: '176:00', balancePrevYear: '874:40', creditCurrentYear: '224:00', balanceCorrections: '0:00', enteredHours: '0:00', balanceEndMonth: '1098:40', overtimeShortage: '176:00', subtotal: '176:00', presenceTime: '176:00', presencePercentage: '100,00%' },
];

export const YearReport: React.FC = () => {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState<Dayjs>(dayjs(today));

  return (
    <Container fluid className="year-report-container">
      <Row className="mb-4">
        <Col>
          <h2>Yearly report</h2>
          <p>Szymon Zimonczyk (Software Development)</p>
        </Col>
        <Col>
          <YearPicker currentDate={currentDate} onDateChange={setCurrentDate} />
        </Col>
        <Col className="text-end">
          <Button variant="success" className="me-2">Print</Button>
          <Button variant="success">Excel (csv)</Button>
          <Button variant="secondary" className="ms-2">Close</Button>
        </Col>
      </Row>
      <Row>
        <Table striped bordered hover className="yearly-report-table">
          <thead>
            <tr>
              <th> </th>
              {data.map((item, index) => (
                <th key={index}>{item.month}</th>
              ))}
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th colSpan={data.length + 2} className="section-header">Working hours</th>
            </tr>
            <tr>
              <td>Working hours</td>
              {data.map((item, index) => (
                <td key={index}>{item.workingHours}</td>
              ))}
              <td>713:00</td>
            </tr>
            <tr>
              <td>Total</td>
              {data.map((item, index) => (
                <td key={index}>{item.workingHours}</td>
              ))}
              <td>713:00</td>
            </tr>
            <tr>
              <th colSpan={data.length + 2} className="section-header">Absences</th>
            </tr>
            <tr>
              <td>Holiday</td>
              {data.map((item, index) => (
                <td key={index}>{item.absences}</td>
              ))}
              <td>104:00</td>
            </tr>
            <tr>
              <td>Total</td>
              {data.map((item, index) => (
                <td key={index}>{item.absences}</td>
              ))}
              <td>104:00</td>
            </tr>
            <tr>
              <th colSpan={data.length + 2} className="section-header">Grand total</th>
            </tr>
            <tr>
              <td>Grand total</td>
              {data.map((item, index) => (
                <td key={index}>{item.workingHours}</td>
              ))}
              <td>817:00</td>
            </tr>
            <tr>
              <td>Target time</td>
              {data.map((item, index) => (
                <td key={index}>{item.targetTime}</td>
              ))}
              <td>0:00</td>
            </tr>
            <tr>
              <td>Difference</td>
              {data.map((item, index) => (
                <td key={index}>{item.difference}</td>
              ))}
              <td>817:00</td>
            </tr>
            <tr>
              <th colSpan={data.length + 2} className="section-header">Holidays</th>
            </tr>
            <tr>
              <td>Balance previous year</td>
              {data.map((item, index) => (
                <td key={index}>{item.balancePrevYear}</td>
              ))}
              <td>994:40</td>
            </tr>
            <tr>
              <td>Credit current year</td>
              {data.map((item, index) => (
                <td key={index}>{item.creditCurrentYear}</td>
              ))}
              <td>224:00</td>
            </tr>
            <tr>
              <td>Balance corrections</td>
              {data.map((item, index) => (
                <td key={index}>{item.balanceCorrections}</td>
              ))}
              <td>0:00</td>
            </tr>
            <tr>
              <td>Entered hours</td>
              {data.map((item, index) => (
                <td key={index}>{item.enteredHours}</td>
              ))}
              <td>-104:00</td>
            </tr>
            <tr>
              <td>Balance end of month</td>
              {data.map((item, index) => (
                <td key={index}>{item.balanceEndMonth}</td>
              ))}
              <td>994:40</td>
            </tr>
            <tr>
              <th colSpan={data.length + 2} className="section-header">Overview</th>
            </tr>
            <tr>
              <td>Target time</td>
              {data.map((item, index) => (
                <td key={index}>{item.targetTime}</td>
              ))}
              <td>0:00</td>
            </tr>
            <tr>
              <td>Overtime / shortage</td>
              {data.map((item, index) => (
                <td key={index}>{item.overtimeShortage}</td>
              ))}
              <td>817:00</td>
            </tr>
            <tr>
              <td>Subtotal</td>
              {data.map((item, index) => (
                <td key={index}>{item.subtotal}</td>
              ))}
              <td>817:00</td>
            </tr>
            <tr>
              <td>Absences</td>
              {data.map((item, index) => (
                <td key={index}>{item.absences}</td>
              ))}
              <td>104:00</td>
            </tr>
            <tr>
              <td>Presence time</td>
              {data.map((item, index) => (
                <td key={index}>{item.presenceTime}</td>
              ))}
              <td>713:00</td>
            </tr>
            <tr>
              <td>Presence time in %</td>
              {data.map((item, index) => (
                <td key={index}>{item.presencePercentage}</td>
              ))}
              <td>87,27%</td>
            </tr>
          </tbody>
        </Table>
      </Row>
    </Container>
  );
}