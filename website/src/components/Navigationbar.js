import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState , useEffect} from 'react';

export const Navigationbar = () => {
    const[activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50){
                setScrolled(true);
            } else{
                setScrolled(false);
            }
        }

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    },[])
    onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }   

  return (
    <Navbar expand="lg" className={scrolled ? 'scrolled': ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={''} alr="Logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink ==='home' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#event"className={activeLink ==='event' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('event')}>Event</Nav.Link>
            <Nav.Link href="#about"className={activeLink ==='about' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('about')}>About</Nav.Link>
            <Nav.Link href="#team"className={activeLink ==='team' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('team')}>Our Team</Nav.Link>

          </Nav>
          <span className="navbar-text">
            <div className='social-icons'>
                <a href='#'><img src={''} alt='Facebook'/></a>
                <a href='#'><img src={''} alt='Facebook'/></a>
                <a href='#'><img src={''} alt='Facebook'/></a>
            </div>
            <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
