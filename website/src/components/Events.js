import meter1 from "../assets/Img/agm 1.jpeg";
import meter2 from "../assets/Img/agm 2.jpeg";
import meter3 from "../assets/Img/badminton 1.png";
import meter7 from "../assets/Img/club dance fair 1.jpg";
import meter8 from "../assets/Img/dumpling 1.jpg";        
import meter10 from "../assets/Img/infomart 1.JPG";
import meter12 from "../assets/Img/lunar 1.CR2";
import meter13 from "../assets/Img/mid autumn 1.jpeg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export const Events = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="event" id="events">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="event-bx wow zoomIn">
                        <h2>Events</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>First Annual General Meeting</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>First Annual General Meeting</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Badminton event</h5>
                            </div>
                            <div className="item">
                                <img src={meter7} alt="Image" />
                                <h5>KGK Club Fair</h5>
                            </div>
                            <div className="item">
                                <img src={meter8} alt="Image" />
                                <h5>Dumpling making event</h5>
                            </div>
                            <div className="item">
                                <img src={meter10} alt="Image" />
                                <h5>InfoMart</h5>
                            </div>
                            <div className="item">
                                <img src={meter13} alt="Image" />
                                <h5>Mid Autumn Festival</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}