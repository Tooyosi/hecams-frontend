import styled from 'styled-components';

const Head = ({heading, body}) => {
    const content = {
        capture: 'https://static.wixstatic.com/media/a9ff3b_914acae97e4641b091c242a02a5c80b7.jpg/v1/fill/w_300,h_300,al_c,lg_1,q_80/a9ff3b_914acae97e4641b091c242a02a5c80b7.webp',
        capture02: 'https://static.wixstatic.com/media/a9ff3b_8167393dbf9f4c7fbd2f596ea3dd9548.jpg/v1/fill/w_300,h_300,al_c,lg_1,q_80/a9ff3b_8167393dbf9f4c7fbd2f596ea3dd9548.webp',
        capture03:'https://static.wixstatic.com/media/a9ff3b_54a7dc4a44a443f1b11dadba998f9b09.jpg/v1/fill/w_300,h_300,al_c,lg_1,q_80/a9ff3b_54a7dc4a44a443f1b11dadba998f9b09.webp',
    }
    return(
        <Section className=''>
            <div className="container">
           
                <br/><br/>
                <h1 className='text-center'>{heading}</h1><br/>
                <div className="row">
                    <div className="col-md-4">    
                    <Img src={content.capture} width='100%' alt='main-img'/>
                    </div>
                    <div className="col-md-4">
                    <Img src={content.capture02} width='100%' alt='main-img'/>
                    </div>
                    <div className="col-md-4">
                    <Img src={content.capture03} width='100%' alt='main-img'/>
                    </div>
                </div>
                <br/><br/>
                <div className='row justify-content-center'>
                    <div className="col-md-7">
                    
                    <p className='text-justify'>{body}</p>
                    </div>
                </div>
               
                
            </div>
        </Section>

    )
}

export default Head;

const Img = styled.img`
border-bottom-left-radius: 10px;
border-top-right-radius: 10px;
margin-top: 1em;
margin-bottom: 1em;
`

const Section = styled.section`
    background-color: green;
    color: white;
    background: linear-gradient(to right, rgba(17,153,142, 0.9), rgba(56,239,125, 0.9));
`