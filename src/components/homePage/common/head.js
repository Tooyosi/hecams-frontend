import React from 'react';
import styled from 'styled-components';

const Head = ({capture, heading, callToActionButton, body}) => {
    return (
    <Section className='main-wrapper bg-success text-light'>
        <div className='container section'>
        <div className='row no-gutter'>
            <div className='col-md-6'> <Img src={capture} width='100%' alt='main-img'/> </div>
            <div className='col-md-6'> <h1>{heading}</h1><br/>
                <h5 className='text-justify'>{body}</h5> <br/>
            {callToActionButton &&  
              <a href='services#list'>
                <button className='btn btn-light'> {callToActionButton} </button>
                </a>
            }
            </div>
        </div>
        </div>
    </Section>
    )};

export default Head;

const Img = styled.img`
border-bottom-left-radius: 10px;
border-top-right-radius: 10px;
`

const Section = styled.section`
    background-color: green;
    background: linear-gradient(to right, rgba(17,153,142, 0.6), rgba(56,239,125, 0.6));
`


