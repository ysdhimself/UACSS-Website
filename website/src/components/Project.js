import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import exec1 from "../assets/Img/Eric Bai Intro.png";
import exec2 from "../assets/Img/Angela Wong Intro.png";
import exec3 from "../assets/Img/Ivy Gu Intro.png";
import exec4 from "../assets/Img/Ivy Wang Intro.png";
import exec5 from "../assets/Img/Josephine Huynh Intro.png";
import exec6 from "../assets/Img/Kaylee Tam Intro.png";
import exec7 from "../assets/Img/Michelle Luong Intro.png";
import exec8 from "../assets/Img/Michelle Wong Intro.png";
import exec9 from "../assets/Img/Sophia Zhang Intro.png";
import exec10 from "../assets/Img/Victoria Yiu Intro.png";
import exec11 from "../assets/Img/Yuna Peng Intro.png";
import exec12 from "../assets/Img/Yvonne Chin Intro.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: exec1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: exec2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: exec3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: exec4,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: exec5,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: exec6,
    },
    {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: exec7,
      },
      {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: exec8,
      },
      {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: exec9,
      },
      {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: exec10,
      },
      {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: exec11,
      },
      {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: exec12,
      },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}