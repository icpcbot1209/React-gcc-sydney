import React from 'react'
// reactstrap components
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
} from "reactstrap";

export const MeetingSection = () => {
  const [activeTab, setActiveTab] = React.useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };
  return (
    <div className="section section-dark text-center" id="meeting">
      <Container>
        <h2 className="title">Meeting Times</h2>
        <Row>
          <Col md="12">
            <Card className="card-plain">
              <CardBody>
                <div className="card-description text-center">
                    <h4>Sunday Worship</h4>
                    <p>Sundays - 4pm</p>
                    <p>Rhodes Community Centre</p>
                    <p>63 Blaxland Rd., Rhodes, NSW 2138</p>
                    <hr />
                    <h4>Prayer Meetings</h4>
                    <p>EMP (Tuesday-Saturday) - 7am</p>
                    <p>TNP (Tuesdays) - 7:30pm</p>
                    <p>Church Office</p>
                    <p>1/63 Tintern Ave, Telopea NSW 2117</p>
                    <hr />
                    <h4>Life Groups</h4>
                    <p>Various Times and Locations</p>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
