/*!

=========================================================
* Paper Kit React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useEffect } from "react";
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
} from "reactstrap";
import { useHistory, useLocation } from "react-router-dom";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import { MeetingSection } from "./MeetingSection";

function LandingPage() {
  const history = useHistory();
  const { pathname, hash, key } = useLocation();

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });

  useEffect(() => {
    if (hash === '') {
    }
    else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({behavior: 'smooth'});
        }
      }, 300);
    }
  }, [pathname, hash, key]); // do this on route change


  const gotoUrl = (url) => {
    history.push(url);
  };

  return (
    <>
      <ExamplesNavbar />
      <LandingPageHeader />
      <div className="main">
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">OUR STORY</h2>
                <h5 className="description">
                  Grace Community Chapel Sydney was birthed from years of praying and
                  waiting. After visiting Sydney several times over the years, God was
                  making it clear that there was a need for more disciple-making
                  churches that was gospel centered, Spirit-filled, and theologically
                  sound.
                </h5>
                <br />

                    <Button
                      className="btn-round"
                      color="info"
                      onClick={(e)=>gotoUrl('/about')}
                    >
                      See Details
                    </Button>
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col md="6">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-album-2" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Grace Community Chapel of NJ</h4>
                    <p className="description">
                      GCCNJ is the sending church of GCC Sydney. We envision a continual
                      partnership with GCCNJ to further accomplish the Great Commission
                      to make disciples of all nations.
                    </p>
                    <Button className="btn-link" target="_blank" rel="noreferrer" color="info" href="https://gccnj.org/">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="6">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-bulb-63" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Christian Reformed Church of North America</h4>
                    <p>
                      GCC Sydney is affiliated with the CRCNA denomination which will
                      provide denominational guidance and wisdom as well as
                      accountability for the church.
                    </p>
                    <Button className="btn-link" target="_blank" rel="noreferrer" color="info" href="https://crcna.org/">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div id="leadership" name='leadership' style={{height: 100}}></div>
        <div className="section section-dark text-center" >
          <Container>
            <h2 className="title">LEADERSHIP</h2>
            <Row>
              <Col md="12">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/paul_nam.png")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Rev. Paul Nam</CardTitle>
                        <h6 className="card-category">Leader</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      Pastor Paul Nam is the founder and Lead Pastor of Grace Community
                      Chapel Sydney. Pastor Paul is a graduate of The George Washington
                      University (B.A.) and The Southwestern Baptist Theological
                      Seminary (M.Div). He is currently pursuing a Doctorate of Ministry
                      in Discipleship from Talbot School of Theology. He also holds a
                      Foundations of Biblical Counseling Certificate from Christian
                      Counseling &amp; Educational Foundation (CCEF). He is ordained in
                      the Christian Reformed Church of North America (CRCNA). Pastor
                      Paul has served in ministry for the past 15 years and most
                      recently served as an associate pastor at Grace Community Chapel
                      of NJ for the past 9 years. His greatest passion is for the church
                      to raise bold, committed, and passionate disciples of Jesus Christ
                      that will make a great impact for the Kingdom of God. His heart is
                      for people to fall into a deep, love relationship with Jesus.
                      Pastor Paul is a devoted husband to Deborah, and a grateful father
                      to Karis, Kayla, Moses, and Matthew. He loves to eat, work out,
                      and enjoys to play and watch sports. He looks forward to learning
                      rugby, and picking up the Australian accent.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>

        <MeetingSection />

        <div className="section landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center">Keep in touch?</h2>

                <Form className="contact-form" action="mailto:info@gccsydney.org" method="post" encType="text/plain">
                  <Row>
                    <Col md="6">
                      <label>Name</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Name" type="text" name="name"/>
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label>Email</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Email" type="text" name="mail"/>
                      </InputGroup>
                    </Col>
                  </Row>
                  <label>Message</label>
                  <Input
                    name="comment"
                    placeholder="Tell us your thoughts and feelings..."
                    type="textarea"
                    rows="4"
                  />
                  <Row>
                    <Col className="ml-auto mr-auto" md="4">
                      <Button className="btn-fill" color="danger" size="lg" type="submit" value="Send">
                        Send Message
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <DemoFooter />
    </>
  );
}

export default LandingPage;
