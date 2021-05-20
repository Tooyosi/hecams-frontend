import {EnvelopeIcon, PhoneIcon, LocateIcon} from 'evergreen-ui'
import ContactUsForm from './form/contactUsForm';

const Contact = ()=> {
    return(
    <section className="section-container main-wrapper" id="contact">
    <div className='section p-px-3'>
        <div className="row justify-content-center">
            <div className="col-xs-12 col-md-offset-2 col-md-8">
                <div className="section-container-spacer">
                    <h2 className="text-center text-uppercase text-success field">Get in touch</h2>
                    <br/>
                    <p className='text-center'>
                    <EnvelopeIcon marginRight={6} /> amh@galacticati.com
                    <PhoneIcon marginLeft={12} marginRight={6}/>1-832-781-4409
                    </p>
                    <p className='text-center'>
                        <LocateIcon marginRight={6} /> 15116 Bellaire Blvd,  Houston TX 77083
                    </p>
                    <br/>
                </div>
               <ContactUsForm/>
            </div>
        </div>
    </div>
    </section>

    )
}

export default Contact