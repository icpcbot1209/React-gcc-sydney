import React from 'react'
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Label,
  FormGroup,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
} from "reactstrap";

export const MeetingSection = () => {
  const [activeTab, setActiveTab] = React.useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };
  return (
    <div className="section landing-section">
      <Container>
        <div className="nav-tabs-navigation">
          <div className="nav-tabs-wrapper">
            <Nav role="tablist" tabs>
              <NavItem>
                <NavLink
                  className={activeTab === "1" ? "active" : ""}
                  onClick={() => {
                    toggle("1");
                  }}
                >
                  Meeting Times
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={activeTab === "2" ? "active" : ""}
                  onClick={() => {
                    toggle("2");
                  }}
                >
                  Internship
                </NavLink>
              </NavItem>
            </Nav>
          </div>
        </div>
        {/* Tab panes */}
        <TabContent className="following" activeTab={activeTab}>
          <TabPane tabId="1" id="follows">
            <Row>
              <Col className="text-center ml-auto mr-auto" md="6">
                  <h4>Sunday Worship</h4>
                  <p>Sundays - 4pm</p>
                  <p>Rhodes Community Centre</p>
                  <p>63 Blaxland Rd., Rhodes, NSW 2138</p>
                  <hr />
                  <h4>PRAYER MEETINGS</h4>
                  <p>EMP (Tuesday-Saturday) - 7am</p>
                  <p>TNP (Tuesdays) - 7:30pm</p>
                  <p>Church Office</p>
                  <p>1/63 Tintern Ave, Telopea NSW 2117</p>
              </Col>
            </Row>
          </TabPane>
          <TabPane className="text-justify" tabId="2" id="following">
            <h4>Church Background</h4>
            <p>Located in Rydalmere (Sunday worship) and Telopea (church office) NSW, Grace Community Chapel Sydney was planted in late 2020.</p>
            <p>After visiting from America several times over the years, God made clear the need for more disciple-making churches that were gospel centered, Spirit-filled, and theologically sound. Pastor Paul and his family took up this call in faith with a team of brothers and sisters that was sold on the vision to make disciples of Jesus Christ all throughout Sydney, Australia, and beyond.</p>
            <p>Although a new church plant still in its’ infancy, with limited resources, GCC is offering this internship as Pastor Paul is convicted to mentor, develop, and give opportunities to younger pastors in the Sydney area to learn more about ministry and learn what it takes to make disciples of Jesus Christ in the church ministry context.</p>
            <p>Refer to our church website to learn more about our story, leadership, and beliefs.</p>
          
            <h4>Job Description</h4>
            <p>As a Pastoral Intern, you will</p>
            <ul>
              <li>Have the opportunity to learn hands-on church planting from scratch.</li>
              <li>Help build the culture and spirituality of a church plant.</li>
              <li>Work intimately with Pastor Paul who has a heart to mentor and work with younger pastors.</li>
            </ul>
            <p>Further details of the internship will be discussed privately.</p>

            <h4>Qualifications</h4>
            <p>Ideal for Bible college students/seminarians.</p>
            <p>Teachable and humble spirit, willing to learn and expand their horizon.</p>
            <p>Have a calling for ministry.</p>
          </TabPane>


        </TabContent>


      </Container>
    </div>
  )
}
