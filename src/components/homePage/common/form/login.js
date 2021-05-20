import {Button, TextInput, InfoSignIcon, Card} from 'evergreen-ui';
import { useForm } from "react-hook-form";
import styled from 'styled-components';
import api, { getRequestError } from '../../../../services/api';
// import  { useAuth } from '../../../../services/api/auth';
// import Axios from 'axios';
const LoginForm = () => {
    const { register, handleSubmit, } = useForm();
    // const onSubmit = (data) => console.log(data)
    // const onSubmit = (data) => Axios.post(`https://45.79.51.132:443/authenticate`, data)
    // .then(res=>toaster.notify(res.data.token))
    // .catch(e=>toaster.warning('Something went wrong'))

    
    const onSubmit = (data) => api({ method: 'post', url: '/authenticate', data })
    .then(res => console.log(res.data))
    .catch(e => console.log(getRequestError(e)));
console.log(onSubmit)
    return (
<Section className='bg-success main-wrapper'>
<div className='container section'>
    <div className='row'>
        <div className='col-md-5'>
            <Card className='section' elevation={3} padding={32} marginTop={12} background='blueTint'>
            <h2 className='field text-success'>Staff login</h2>
            <p> Enter your credientials to access your online workspace </p>
    <form onSubmit={handleSubmit(onSubmit)}>           
        <TextInput
            ref={register({ minLength: 3, required: true })}
            name='username'
            label="Enter your HR number"
            placeholder="Enter your Staff ID"
            marginTop='0.5em'
            width='100%'
        />

        <TextInput
            ref={register({ minLength: 3, required: true }) }
            name='password'
            label="Enter your Password"
            placeholder='Enter Password'
            marginTop='1em'
            width='100%'
        />

        <Button appearance='primary' intent='success' marginTop='2em' height={36}> Login </Button><br/><br/>
        <InfoSignIcon marginRight={3} /> <small>Forget Password</small>
    </form>
    </Card>
        </div>          
    </div>     
</div>
</Section>
    )}

export default LoginForm

const Section = styled.section`
    background-color: green;
    background-image: linear-gradient(to right, rgba(17,153,142, 0.6), rgba(56,239,125, 0.6)), url(https://images.pexels.com/photos/3184428/pexels-photo-3184428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1500);
    background-size: cover;
    background-position: top;
    padding-top: 6em;
    padding-bottom: 6em;
`