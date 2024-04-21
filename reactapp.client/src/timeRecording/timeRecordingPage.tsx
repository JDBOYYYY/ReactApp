import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

export const TimeRecording = () => {
    return (
        <Container>
            <Table striped bordered>



            <thead>
                <tr>
                    <td></td>
                    <th >Monday <br/> 15.04</th>
                    <th>Tuesday <br/> 16.04</th>
                    <th>Wednesday <br/> 17.04</th>
                    <th>Thursday <br/> 18.04</th>
                    <th>Friday <br/> 19.04</th>
                    <th>Saturday <br/> 20.04</th>
                    <th>Sunday <br/> 21.04</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Target Time</td>
                    <td >0:00</td>
                    <td>0:00</td>
                    <td>0:00</td>
                    <td>0:00</td>
                    <td>0:00</td>
                    <td>0:00</td>
                    <td>0:00</td>
                    <td>0:00</td>
                </tr>
                <tr>
                    <td>Registered time</td>
                    <td >0:00</td>
                    <td>0:00</td>
                    <td>0:00</td>
                    <td>0:00</td>
                    <td>0:00</td>
                    <td>0:00</td>
                    <td>0:00</td>
                    <td>0:00</td>
                </tr>
                <tr>
                    <td>Difference</td>
                    <td >0:00</td>
                    <td>0:00</td>
                    <td>0:00</td>
                    <td>0:00</td>
                    <td>0:00</td>
                    <td>0:00</td>
                    <td>0:00</td>
                    <td>0:00</td>
                </tr>
            </tbody>
        </Table>
        </Container>
    )
}