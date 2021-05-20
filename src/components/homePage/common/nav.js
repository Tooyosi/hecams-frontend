import Logo from 'components/common/Logo';
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Navv = () => {
return(
<Navbar collapseOnSelect bg="light" expand="lg" className='fields fixed-top'>
  <Container>
    
  <Link to='/' passHref>
    <Navbar.Brand className='text-success'>
      <div className='row'>
        <div className='col-md-3'> 
          <Logo 
          
          width='100em'/>
          {/* <img src='logo.png' width='100em' alt='sample img'/> */}
         </div>
        <div className='col-md-9'>
          <CompanyName className='field'>Ability Options LLC</CompanyName><br/>
          <Tagline className='d-none d-md-block'> 
            A home and community based service - <br/>Adult Mental Health (HCBS-AMH) <br/> Comprehensive Service Provider
          </Tagline>
        </div>
      </div>      
      </Navbar.Brand>
  </Link>

  <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/services" className="nav-link">Services</Link>
      
      <NavDropdown title="Why us" id="basic-nav-dropdown">
        <Link className='dropdown-item' to="/whyus">Why us</Link>
        <Link className='dropdown-item' to="/about">About us</Link>
        <Link className='dropdown-item' to="/mission">Our Mission</Link>
      </NavDropdown>

      <a href="/apply" className="nav-link">Jobs</a>
      <Link to="/contact" className="nav-link">Contact us</Link>
      <a href="/login" className="nav-link">Staff Login</a>
      <a href="https://0120a630-41e8-451f-ac66-3702e18f6fbb.filesusr.com/ugd/d6e898_76134ad843ba426c91602e0682136c54.pdf" target='_blank' rel="noreferrer" className="nav-link">
        Our Brochue
      </a>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

    )
}

export default Navv

const Tagline = styled.p`
  line-height: 1;
  font-size: 0.6em;
  color: grey;
`

const CompanyName = styled.b`
  margin-bottom: 0px;
  text-transform: uppercase
`