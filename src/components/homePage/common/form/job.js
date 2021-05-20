import {Button, toaster, TextInputField, FilePicker, Card} from 'evergreen-ui';
import { useForm } from "react-hook-form";
import Axios from 'axios';
import styled from 'styled-components';

const JobForm = () => {
    const { register, handleSubmit } = useForm();
    // const onSubmit = (data) => console.log(data)
    const onSubmit = (data) => Axios.post(`https://45.79.51.132:443/authenticate`, data)
    .then(res=>toaster.notify(res.data.token))
    .catch(e=>toaster.warning('Something went wrong'))
    return (
    <Section className='bg-success main-wrapper'>
        <div className='container section'>
            <div className='row'>
            
                <div className='col-md-5'>

                    <Card className='section' elevation={3} padding={32} marginTop={12} background='blueTint'>
                    <h2 className='field text-success'>Application</h2>
                    <p> Dear Candidate, please fill your details below </p>
                    
                    <form onSubmit={handleSubmit(onSubmit)}>
                
                        <TextInputField
                        ref={register({ minLength: 3, required: true })}
                        name='name'
                        label="Fullname"
                        placeholder="Fullname"
                        marginTop='0.2em'
                        width='100%'
                        />

                        <TextInputField
                        ref={register({ required: true })}
                        name='email'
                        label="Email"
                        placeholder="Email"
                        marginTop='0.2em'
                        width='100%'
                        />

                        <TextInputField
                        ref={register({ required: true }) }
                        name='role'
                        label="Role"
                        placeholder="Job Role"
                        marginTop='0.2em'
                        width='100%'
                        />

                        <FilePicker 
                            multiple 
                            width='100%' 
                            height={32} 
                            marginTop='0.2em' 
                        />

                        <Button 
                            appearance='primary' 
                            intent='success' 
                            marginTop='2em' 
                            height={36}> 
                            Submit 
                        </Button>  

                    </form>
                    </Card>
                </div>
                
            </div>
            
        </div>
    </Section>
    )}

export default JobForm

const Section = styled.section`
    background-color: green;
    background-image: linear-gradient(to right, rgba(17,153,142, 0.6), rgba(56,239,125, 0.6)), url(https://images.pexels.com/photos/3184428/pexels-photo-3184428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1500);
    background-size: cover;
    background-position: top;
    padding-top: 6em;
    padding-bottom: 6em;
`