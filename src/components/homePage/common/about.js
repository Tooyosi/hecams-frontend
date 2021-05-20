import React from 'react';
import {Link} from 'react-router-dom'

const AboutDiv = () => {
return(
<section id='about' className="bg-light">
    <div className="container">       
    <div className='row'>

        <div className='col-md-6'>
            <img alt='capture' width='100%' src='https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'/>
        </div>

        <div className='col-md-6'>
            <h2 className=' text-uppercase text-success field'>Welcome to Ability Options LLC</h2>    <br/>
            <h5 className='text-justify' style={{lineHeight: '1.5'}}>
            We provide home and community-based services to adults with serious mental illness (SMI) and extended tenure in psychiatric hospital as well as those individuals with frequent arrests. 
            {/* The arrays of services are designed to be appropriate to each individual’s needs, to enable him or her to live and experience successful tenure in their chosen community. Services are designed to support long term recovery from mental illness. */}
            </h5>
            <br/><br/>
            <Link to='/services'>
            <button className='btn btn-success btn-lg'>View Services</button>
            </Link>
        </div>

    </div> <br/><br/>
    </div>
</section> 
)}

export default AboutDiv

