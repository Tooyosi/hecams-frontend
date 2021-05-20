import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
 return (
<Section className="main-wrapper text-white white-text-container">  
    <div className="container section">
        <div className="row">
            <div className="col-md-6">
            <h6 className="text-uppercase">Welcome to Ability Options LLC</h6>
                <h2 className='field text-uppercase'> Helping find Solutions for Mental Health </h2> <br/>
                <Link to="/login" className="field btn btn-success btn-lg">Staff Login</Link>
            </div>
        </div>
    </div>
</Section>
 
 )};

export default Header;

const Section = styled.section`
    background-color: green;
    background-image: linear-gradient(to right, rgba(17,153,142, 0.6), rgba(56,239,125, 0.6)), url(https://images.pexels.com/photos/3184428/pexels-photo-3184428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1500);
    background-size: cover;
    background-position: top;
    padding-top: 6em;
    padding-bottom: 6em;
`

