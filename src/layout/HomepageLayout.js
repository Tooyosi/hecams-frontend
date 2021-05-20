import Navv from 'components/homePage/common/nav';
import Footer from 'components/homePage/common/footer';
import Contact from 'components/homePage/common/contact';


const HomeLayout = ({children, noContact}) => {
    return(
        <>
            <Navv/>
            {children}
           {!noContact &&  <Contact/>}
            <Footer/>
        </>
    )

}

export default HomeLayout