import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Table, Card } from 'react-bootstrap';
import './myTeam.css';

export const MyTeam = () => {
  const [teamMembers, setTeamMembers] = useState([
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Developer' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'Designer' },
    { id: 3, name: 'Michael Brown', email: 'michael.brown@example.com', role: 'Project Manager' },
  ]);

  const [newMember, setNewMember] = useState({ name: '', email: '', role: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewMember({ ...newMember, [name]: value });
  };

  const handleAddMember = (e: React.FormEvent) => {
    e.preventDefault();
    setTeamMembers([...teamMembers, { ...newMember, id: teamMembers.length + 1 }]);
    setNewMember({ name: '', email: '', role: '' });
  };

  return (
    <Container fluid className="team-page-container">
      <h2 className="my-4">My Team</h2>
      <Row>
        <Col md={6}>
          <Card>
            <Card.Body>
              <h4>Team Members</h4>
              <Table striped bordered responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                  </tr>
                </thead>
                <tbody>
                  {teamMembers.map(member => (
                    <tr key={member.id}>
                      <td>{member.id}</td>
                      <td>{member.name}</td>
                      <td>{member.email}</td>
                      <td>{member.role}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <h4>Invite New Member</h4>
              <Form onSubmit={handleAddMember}>
                <Form.Group controlId="newMemberName" className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter member's name"
                    name="name"
                    value={newMember.name}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="newMemberEmail" className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter member's email"
                    name="email"
                    value={newMember.email}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="newMemberRole" className="mb-3">
                  <Form.Label>Role</Form.Label>
                  <Form.Control
                    as="select"
                    name="role"
                    value={newMember.role}
                    onChange={handleInputChange}
                  >
                    <option value="">Select role</option>
                    <option value="Developer">Developer</option>
                    <option value="Designer">Designer</option>
                    <option value="Project Manager">Project Manager</option>
                    <option value="Tester">Tester</option>
                  </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">
                  Add Member
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={12}>
          <Card>
            <Card.Body>
              <h4>Team Roles</h4>
              <Table striped bordered responsive>
                <thead>
                  <tr>
                    <th>Role</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Developer</td>
                    <td>Responsible for writing and maintaining code.</td>
                  </tr>
                  <tr>
                    <td>Designer</td>
                    <td>Responsible for designing the user interface and experience.</td>
                  </tr>
                  <tr>
                    <td>Project Manager</td>
                    <td>Responsible for overseeing the project and ensuring it meets deadlines.</td>
                  </tr>
                  <tr>
                    <td>Tester</td>
                    <td>Responsible for testing the application for bugs and issues.</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={12}>
          <Card>
            <Card.Body>
              <h4>Project Details</h4>
              <p>Project Name: Awesome Project</p>
              <p>Project Deadline: 30th June 2024</p>
              <p>Project Description: This is a detailed description of the project. It outlines the goals, objectives, and deliverables expected from the team.</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
