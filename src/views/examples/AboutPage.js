import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

const AboutPage = () => {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <ProfilePageHeader />
      <div className="section profile-content">
        <Container>
          <div style={{textAlign: 'center'}}>
            <img
              alt="..."
              style={{maxWidth: '100%'}}
              className="img-rounded img-responsive section-img"
              src={require("assets/img/our_story.jpg")}
            />
          </div>

          <h4 className="title text-center" id="vision">
            Our Vision & Mission
          </h4>

          <Row>
            <Col className="ml-auto mr-auto text-justify" md="8">
              <p>
                Grace Community Chapel exists is to raise radical disciples of Jesus
                Christ that will be released into our communities and the world to
                make a great impact for the Kingdom of God.
              </p>
              <br/>
              <p>
                GCC’s vision to make radical disciples will be accomplished
                by faithfully teaching and preaching the Word of God,
                building an authentic and gospel-centered community,
                and by exercising our gifts and talents to reach our
                communities and the world through local outreach and
                global missions.
              </p>
            </Col>
          </Row>

          <h4 className="title text-center" id="story">
            Our Story
          </h4>

          <Row>
            <Col className="ml-auto mr-auto text-justify" md="8">
              <p>
                Grace Community Chapel Sydney was birthed from years of praying and waiting. After visiting Sydney several times over the years, God was making it clear that there was a need for more disciple-making churches that was gospel centered, Spirit-filled, and theologically sound. Once the opportunity finally came, Pastor Paul and his family took up this call in faith with a team of brothers and sisters that was sold on the same vision to make disciples of Jesus Christ and to expand the Kingdom of God. We pray that GCC will join the other churches in Sydney and be part of the greater narrative and vision to make disciples all throughout Sydney, Australia, and beyond.
              </p>
              <br/>
              <p>  
                God in his sovereignty opened doors for Pastor Paul and his family to arrive in Sydney in 2020. The rest of the team is slowly coming to join Pastor Paul as the bans were lifted. 
              </p>
              <br/>
              <p> 
                Pastor Paul and the team have been sent out by Grace Community Chapel of NJ (gccnj.org). Although an autonomous and independent church plant, GCC Sydney plans to continue to partner with GCCNJ in disciple-making and other Kingdom endeavors to reach the nations. GCC Sydney is also affiliated with the Christian Reformed Church of North America (crcna.org) denomination, and is currently in the process of joining the Christian Reformed Church Australia (crc.org.au).
              </p>
              <br />

            </Col>
          </Row>
        </Container>
      </div>
      <DemoFooter />
    </>
  );
}

export default AboutPage;