import React from "react";
// reactstrap components
import { Container, Row, Col, Card, CardBody } from "reactstrap";

export const MeetingSection = () => {
  const [activeTab, setActiveTab] = React.useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  const address = "27 Iron St, North Parramatta, NSW 2151";

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
                  <p>Sundays - 11am</p>
                  <p>Rides from Parramatta Station available</p>
                  <p>{address}</p>
                  <p>info@gccsydney.org</p>
                  <hr />
                  <h4>Prayer Meetings</h4>
                  <p>EMP (Tuesday-Saturday) - 7am</p>
                  <p>TNP (Tuesdays) - 7:30pm</p>
                  <p>{address}</p>
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
  );
};
