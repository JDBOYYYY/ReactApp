import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Table, Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useConfig } from '../ConfigContext';
import './myTeam.css';

export const MyTeam = () => {
  const { t } = useTranslation();
  const { primaryColor } = useConfig();

  const [teamMembers, setTeamMembers] = useState([
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: t('developer') },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: t('designer') },
    { id: 3, name: 'Michael Brown', email: 'michael.brown@example.com', role: t('projectManager') },
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
      <h2 className="my-4">{t('myTeam')}</h2>
      <Row>
        <Col md={6}>
          <Card>
            <Card.Body>
              <h4>{t('teamMembers')}</h4>
              <Table striped bordered responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>{t('name')}</th>
                    <th>{t('email')}</th>
                    <th>{t('role')}</th>
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
              <h4>{t('inviteNewMember')}</h4>
              <Form onSubmit={handleAddMember}>
                <Form.Group controlId="newMemberName" className="mb-3">
                  <Form.Label>{t('name')}</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={t('enterMemberName')}
                    name="name"
                    value={newMember.name}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="newMemberEmail" className="mb-3">
                  <Form.Label>{t('email')}</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder={t('enterMemberEmail')}
                    name="email"
                    value={newMember.email}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="newMemberRole" className="mb-3">
                  <Form.Label>{t('role')}</Form.Label>
                  <Form.Control
                    as="select"
                    name="role"
                    value={newMember.role}
                    onChange={handleInputChange}
                  >
                    <option value="">{t('selectRole')}</option>
                    <option value="Developer">{t('developer')}</option>
                    <option value="Designer">{t('designer')}</option>
                    <option value="Project Manager">{t('projectManager')}</option>
                    <option value="Tester">{t('tester')}</option>
                  </Form.Control>
                </Form.Group>
                <Button variant={primaryColor} type="submit">
                  {t('addMember')}
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
              <h4>{t('teamRoles')}</h4>
              <Table striped bordered responsive>
                <thead>
                  <tr>
                    <th>{t('roleDescription')}</th>
                    <th>{t('description')}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{t('developer')}</td>
                    <td>{t('developerDescription')}</td>
                  </tr>
                  <tr>
                    <td>{t('designer')}</td>
                    <td>{t('designerDescription')}</td>
                  </tr>
                  <tr>
                    <td>{t('projectManager')}</td>
                    <td>{t('projectManagerDescription')}</td>
                  </tr>
                  <tr>
                    <td>{t('tester')}</td>
                    <td>{t('testerDescription')}</td>
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
              <h4>{t('projectDetails')}</h4>
              <p>{t('projectName')}</p>
              <p>{t('projectDeadline')}</p>
              <p>{t('projectDescription')}</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
