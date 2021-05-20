import Head from "../../components/homePage/common/headAlt"
import HomeLayout from "../../layout/HomepageLayout"

const AboutUs = () => {
    const content = {
        heading: 'About us',
        body: "Ability Options, LLC Helping find individualized solutions to individuals with severe mental illness" 
    }
 return(
     <HomeLayout>
         <Head 
            heading={content.heading} 
            body={content.body}
        />

     </HomeLayout>
 )
}

export default AboutUs