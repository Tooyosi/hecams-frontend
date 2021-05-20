import HomeLayout from "../../layout/HomepageLayout"
import Head from "../../components/homePage/common/headAlt"

const Mission = () => {
    const content = {
        heading: 'Our Mission',
        body: 'Serve & Protect all persons in a safe, enabling and nurturing environment free from injury, abuse, neglect or exploitation. To promote independence that is unique for each person served by preparing specialized programming for each person served. Build a company that will strive to achieve sustainability and rely less on Government funding. To employ staff that is totally committed to the vision of this company in thought, word and deed'
    }
 return(
     <HomeLayout>
         <Head heading={content.heading} body={content.body}/>
    </HomeLayout>
 )
}

export default Mission