import Head from "../../components/homePage/common/head"
import HomeLayout from "../../layout/HomepageLayout"

const WhyUs = () => {
    const content = {
        capture: 'https://images.pexels.com/photos/5700171/pexels-photo-5700171.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        heading: 'Why us',
        body: "Ability Options LLC offers services to Longterm psychiatric hospitalization, Jail Diversion, Emergency department Diversion. We endeavor to be one of the leading providers of a wide range of quality Home and Community Base Health Care Services, while at the same time be recognized for enduring dedication to provide innovative, professional, and compassionate care to the communities we serve." 
    }
 return(
     <HomeLayout>
         <Head 
            capture={content.capture}
            heading={content.heading} 
            body={content.body}
        />

     </HomeLayout>
 )
}

export default WhyUs