import React, { useState } from 'react';
import { Button, Container, Row, Col, Table } from 'react-bootstrap';
import YearPicker from '../../components/YearPicker';
import './yearReport.css';
import dayjs, { Dayjs } from 'dayjs';
import { useTranslation } from 'react-i18next';
import { useConfig } from '../ConfigContext';

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
  // ...other months data
];

export const YearReport: React.FC = () => {
  const { t } = useTranslation();
  const { primaryColor } = useConfig();
  const today = new Date();
  const [currentDate, setCurrentDate] = useState<Dayjs>(dayjs(today));

  return (
    <Container fluid className="year-report-container">
      <Row className="mb-4">
        <Col>
          <h2>{t('yearlyReport')}</h2>
          <p>Szymon Zimonczyk (Software Development)</p>
        </Col>
        <Col>
          <YearPicker currentDate={currentDate} onDateChange={setCurrentDate} />
        </Col>
        <Col className="text-end">
          <Button variant={primaryColor} className="me-2">{t('print')}</Button>
          <Button variant={primaryColor}>Excel (csv)</Button>
          <Button variant="secondary" className="ms-2">{t('close')}</Button>
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
              <th>{t('total')}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th colSpan={data.length + 2} className="section-header">{t('workingHoursSection')}</th>
            </tr>
            <tr>
              <td>{t('workingHours')}</td>
              {data.map((item, index) => (
                <td key={index}>{item.workingHours}</td>
              ))}
              <td>713:00</td>
            </tr>
            <tr>
              <td>{t('total')}</td>
              {data.map((item, index) => (
                <td key={index}>{item.workingHours}</td>
              ))}
              <td>713:00</td>
            </tr>
            <tr>
              <th colSpan={data.length + 2} className="section-header">{t('absencesSection')}</th>
            </tr>
            <tr>
              <td>{t('holiday')}</td>
              {data.map((item, index) => (
                <td key={index}>{item.absences}</td>
              ))}
              <td>104:00</td>
            </tr>
            <tr>
              <td>{t('total')}</td>
              {data.map((item, index) => (
                <td key={index}>{item.absences}</td>
              ))}
              <td>104:00</td>
            </tr>
            <tr>
              <th colSpan={data.length + 2} className="section-header">{t('grandTotalSection')}</th>
            </tr>
            <tr>
              <td>{t('grandTotal')}</td>
              {data.map((item, index) => (
                <td key={index}>{item.workingHours}</td>
              ))}
              <td>817:00</td>
            </tr>
            <tr>
              <td>{t('targetTime')}</td>
              {data.map((item, index) => (
                <td key={index}>{item.targetTime}</td>
              ))}
              <td>0:00</td>
            </tr>
            <tr>
              <td>{t('difference')}</td>
              {data.map((item, index) => (
                <td key={index}>{item.difference}</td>
              ))}
              <td>817:00</td>
            </tr>
            <tr>
              <th colSpan={data.length + 2} className="section-header">{t('holidaysSection')}</th>
            </tr>
            <tr>
              <td>{t('balancePreviousYear')}</td>
              {data.map((item, index) => (
                <td key={index}>{item.balancePrevYear}</td>
              ))}
              <td>994:40</td>
            </tr>
            <tr>
              <td>{t('creditCurrentYear')}</td>
              {data.map((item, index) => (
                <td key={index}>{item.creditCurrentYear}</td>
              ))}
              <td>224:00</td>
            </tr>
            <tr>
              <td>{t('balanceCorrections')}</td>
              {data.map((item, index) => (
                <td key={index}>{item.balanceCorrections}</td>
              ))}
              <td>0:00</td>
            </tr>
            <tr>
              <td>{t('enteredHours')}</td>
              {data.map((item, index) => (
                <td key={index}>{item.enteredHours}</td>
              ))}
              <td>-104:00</td>
            </tr>
            <tr>
              <td>{t('balanceEndOfMonth')}</td>
              {data.map((item, index) => (
                <td key={index}>{item.balanceEndMonth}</td>
              ))}
              <td>994:40</td>
            </tr>
            <tr>
              <th colSpan={data.length + 2} className="section-header">{t('overviewSection')}</th>
            </tr>
            <tr>
              <td>{t('targetTime')}</td>
              {data.map((item, index) => (
                <td key={index}>{item.targetTime}</td>
              ))}
              <td>0:00</td>
            </tr>
            <tr>
              <td>{t('overtimeShortage')}</td>
              {data.map((item, index) => (
                <td key={index}>{item.overtimeShortage}</td>
              ))}
              <td>817:00</td>
            </tr>
            <tr>
              <td>{t('subtotal')}</td>
              {data.map((item, index) => (
                <td key={index}>{item.subtotal}</td>
              ))}
              <td>817:00</td>
            </tr>
            <tr>
              <td>{t('absences')}</td>
              {data.map((item, index) => (
                <td key={index}>{item.absences}</td>
              ))}
              <td>104:00</td>
            </tr>
            <tr>
              <td>{t('presenceTime')}</td>
              {data.map((item, index) => (
                <td key={index}>{item.presenceTime}</td>
              ))}
              <td>713:00</td>
            </tr>
            <tr>
              <td>{t('presencePercentage')}</td>
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
};
