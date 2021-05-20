import {EnvelopeIcon, PhoneIcon, LocateIcon} from 'evergreen-ui'
import styled from 'styled-components'

const Footer = () => {
    return (
        <TheFooter className="footer-container white-text-container text-light bg-dark">
            <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <h2 className='text-uppercase field'>About us</h2><br/>
                    <p>Ability Options, LLC  Helping find individualized solutions to individuals with severe mental illness</p><br/>
                    
                </div>


            <div className="col-md-4"></div>
            <div className="col-md-4">
            <p>
                        <a href='mailto:amh@galacticati.com'><EnvelopeIcon marginRight={6} /> amh@galacticati.com</a> 
                        <a href='tel:18327814409'> <PhoneIcon marginLeft={12} marginRight={6}/>1-832-781-4409</a>
                    </p>
                    <p> <LocateIcon marginRight={6} /> 15116 Bellaire Blvd,  Houston TX 77083 </p>
                    <div> <p><small> © 2021 </small></p> </div>
            </div>

            </div>
            </div>
        </TheFooter>
    )
}

export default Footer;

const TheFooter = styled.footer`
    padding-top: 6em;
    padding-bottom: 6em;
`