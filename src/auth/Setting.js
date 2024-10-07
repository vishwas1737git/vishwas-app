import {Form, Container, Row, Col, Card, Nav, Button } from 'react-bootstrap';


const Settings = () => (
    <Container className="settings-container">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="p-4">
            <h2>Settings</h2>
            <Form>
              <Form.Group controlId="formLanguage">
                <Form.Label>Language</Form.Label>
                <Form.Control as="select">
                  <option>English</option>
                  <option>Spanish</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="formNotifications">
                <Form.Check type="switch" label="Receive Notifications" />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100">
                Save Settings
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
export default Settings  