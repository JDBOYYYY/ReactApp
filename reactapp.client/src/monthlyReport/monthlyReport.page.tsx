import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import BasicDatePicker from '../../components/Picker'

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

const generateMonthData = (): MonthData => {
    const monthData: MonthData = {};
    const startDate = new Date(2023, 3, 1); 
    for (let day = 1; day <= 30; day++) {
        const currentDate = new Date(startDate.getFullYear(), startDate.getMonth(), day);
        const dayString = `${currentDate.toLocaleDateString('en-US', { weekday: 'long' })} ${currentDate.getDate().toString().padStart(2, '0')}.${(currentDate.getMonth() + 1).toString().padStart(2, '0')}`;
        monthData[dayString] = [
            { from: "8:00", to: "8:30", hrs: "0:30", entryType: "Working hours", notes: "TimeWise WISE, [WISE-6736] Name of the jira Ticket" },
            { from: "8:30", to: "10:30", hrs: "2:00", entryType: "Working hours", notes: "TimeWise WISE, [WISE-6736] Name of the jira Ticket" },
            { from: "10:30", to: "11:00", hrs: "0:30", entryType: "Working hours", notes: "TimeWise WISE, [WISE-6736] Name of the jira Ticket" },
            { from: "11:00", to: "16:00", hrs: "5:00", entryType: "Working hours", notes: "Standard workday" },
        ];
    }
return monthData;
};

export const MonthlyReport: React.FC = () => {
    const data = generateMonthData();
    return (
        <>
            <div className='button-print'>
                <div>
                    <h2>Report of month April 2024 </h2>
                    <p>Szymon Zimonczyk (Software Development)</p>
                    </div>
                <div><BasicDatePicker/></div>
                <div>
                    <Button variant="primary" size="sm">
                        Print
                    </Button>
                    </div>
            </div>
        <Container fluid>
            <Row>
                <Table striped bordered>
                    <colgroup>
                        <col style={{ width: '45px', minWidth: '45px' }} />
                        <col style={{ width: '45px', minWidth: '45px' }} />
                        <col style={{ width: '45px', minWidth: '45px' }} />
                        <col style={{ width: '45px', minWidth: '45px' }} />
                        <col style={{ width: '45px', minWidth: '45px' }} />
                        <col style={{ width: '45px', minWidth: '45px' }} />
                        <col style={{ width: '100px', minWidth: '100px' }} />
                        <col style={{ width: '300px', minWidth: '300px' }} />
                    </colgroup>
                    <thead>
                        <tr>
                            <th>Day</th>
                            <th>From</th>
                            <th>To</th>
                            <th>Hrs</th>
                            <th>+</th>
                            <th>Targ.</th>
                            <th>Diff.</th>
                            <th>Entry type</th>
                            <th>Notes</th>
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
                                <td style={{ backgroundColor: 'rgb(196, 153, 147)' }}>{entry.entryType}</td>
                                <td>{entry.notes}</td>
                            </tr>
                            ))}
                            <tr>
                                <td colSpan={3}>Subtotal</td>
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
            </Row> 
        </Container>
    </>
    );
}
