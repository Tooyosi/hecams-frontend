import React from 'react';
import '../../styles/bootstrap.css';
import '../../styles/major.css'
import Header from '../../components/homePage/common/Header';
import AboutDiv from '../../components/homePage/common/about';
import HomeLayout from '../../layout/HomepageLayout';

const Landing = () => {
    return(
    <HomeLayout>
    <Header/>
    <AboutDiv/>
    </HomeLayout>
    )
}

export default Landing