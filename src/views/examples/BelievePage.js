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


const arrBelieve = [
  {title: 'BIBLE', content: 'We believe the Christian Scriptures, both the Old and New Testaments, to be the inspired Word of God, without error in the original manuscripts, the complete revelation of God’s will for the salvation of human beings and the Divine and final authority for all Christian faith and life. The Scriptures define the identity and the action of what it means to be a Christian.', where: '(Psalm 119; 1 Tim 3:16; 2 Pet 1:20, 21; 1 Cor 2:13)'},
  {title: 'GOD', content: 'We believe in One God, Creator of all things, visible and invisible, infinitely perfect and eternally existing in three persons: Father, Son, and the Holy Spirit.', where: '(Jn 17:3; Matt 28:19, 20; Deut 6:4, 5)'},
  {title: 'JESUS CHRIST', content: 'We believe that Jesus Christ, the eternal Son, is fully God and fully man, having been conceived by the Holy Spirit and born of the Virgin Mary. He suffered under Pontius Pilate and died on the cross in order to atone for our sins. On the third day, He bodily rose from the dead and thereafter ascended into heaven and is now sitting at the right hand of the Father, interceding for us. On the Day, He will come again to judge the living and the dead and reign as the king.', where: '(Jn 1:1ff; Lk 1:35; 1 Cor 15:1-12; Jn 14:8, 9; Lk 24:51; Col 3:1, 1 Jn 2:1,2; Rom 8:34)'},
  {title: 'HOLY SPIRIT', content: 'We believe that the Holy Spirit, in all He does, glorifies the Lord Jesus Christ. He convicts the world of sin, righteousness, and judgment and regenerates sinners who believe in Christ to be born again and brings them into union with Christ, thus giving them a new identity. He indwells in the believers to sanctify, seal, fill, guides, instruct, comfort, equip, and empower them, and bestows spiritual gifts to the believer for Christ-like living and service for the body of Christ.', where: '(Jn 16:7-14; Titus 3:5; Eph 4:11-12; Rom 8:9-17; 12:4-8; 1 Cor 3:16; 12:4-5, 11-13, 19; Galatians 5:25)'},
  {title: 'FALL OF MAN', content: 'We believe that all human beings, both male and female, were created in the image and likeness of God to represent Him on the earth and have a relationship with Him. However, they fell into sin, and as a result, their God-like image has been severely marred, though not entirely lost. Consequently, sin corrupts every aspect of their lives and they live in bondage to the sinful desires. Only by the regeneration by the Holy Spirit, can the believers experience the renewal of the image in Christ and live a life in true freedom.', where: '(Genesis 3:1-6; Romans 3:10-19; Romans 1:18, 32)'},
  {title: 'GOSPEL', content: 'We believe that the atoning work of Jesus Christ on the cross and His resurrection from the dead is the only ground for justification and salvation. Only by faith in Christ and His work, not by our own works of righteousness is justification possible. Through faith, the justified sinners can be born again by the work of the Holy Spirit, and be united with Christ and gain new life and identity as the forgiven children of God.', where: '(Rom 3:21-26; Gal 4:4-6; 2 Cor 5:21; Jn 3:5-8; Jn 3:16; Eph 2:8,9)'},
  {title: 'BAPTISM', content: 'We believe that water baptism and the Lord’s Supper are ordinances to be observed by the Church during the present age. The execution of these important ordinances, however, is not basis for salvation.', where: '(Matt 28:19, 20; Lk 22:15-20; Lk 11:22-34; Acts: 2:41; Rom 6:3-6; 1 Cor 11:20-29)'},
  {title: 'CHURCH', content: 'We believe that the universal or invisible Church consists of those who have been born again and united with Christ by the work of the Holy Spirit. These believers are given various spiritual gifts to build the unity of the Body in love and help one another to live godly lives, especially reminding each other who they are in Christ and how they should live.', where: '(Matt 16:18; 1 Cor 12; 14:26; Eph 4:12; Col 3:15; Act 2:42-46)'},
  {title: 'RETURN OF CHRIST', content: 'We believe in the personal return of Jesus Christ. Upon His return, those that have been united with Him will bodily resurrect and witness the transformation of themselves into the full likeness of Christ, thereby experiencing no more pain, suffering, guilt and shame, which have been the manifestations of sin.', where: '(Jn 3:2-3, Col 3:4; Acts 1:11; Titus 2:13; 1 Thess 4:13-18)'}
];

const BelievePage = () => {
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
          {/* <h4 className="title text-center">
            What We Believe
          </h4> */}
          <div className="mt-4"></div>

          <Row>
            <Col className="ml-auto mr-auto text-justify" md="8">
              {arrBelieve.map((item, k)=>(
                <div key={k}>
                  <h5 className="text-center" style={{fontWeight: 'bold' }}>{item.title}</h5>
                  <p>{item.content}</p>
                  <p>{item.where}</p>
                  <br/>                
                </div>
              ))}

              <div className="text-center">
                Please visit <a href="https://crca.org.au/" target="_blank" rel="noreferrer">https://crca.org.au/</a> for more information of what we believe and adhere to. 
              </div>
            </Col>
          </Row>

        </Container>
      </div>
      <DemoFooter />
    </>
  );
}

export default BelievePage;