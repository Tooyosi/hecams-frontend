import EachService from "./service"
import Head from './common/head'

const ServiceSection = () => {
    const content = 
    {
        capture: 'https://images.pexels.com/photos/23180/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        heading: 'Our Services',
        body: 'HCBS-AMH Service Provider Agencies shall provide all of the following HCBS-AMH services',
        callToActionButton: 'Read more'
    }
    const data = [
    {
        title: 'HOST HOME/COMPANION CARE',
        body: 'We provide Host home/companion care in a private residence by a host home or companion care provider who lives in the residence. Type and frequency of supervision is determined on an individual basis based on the level of need for each individual. In a host home arrangement, the host home provider owns or leases the residence.'
    },
    {
        title: 'SUPERVISED LIVING',
        body: 'We provide Host home/Supervised living provides residential assistance as needed by individuals who live in residences in which Ability Options LLC holds a property interest and that meets HCBS-AMH program certification standards.'
    },
    {
        title: 'ASSISTED LIVING',
        body: 'Assisted living services are personal care, homemaker, and chore services; medication oversight; and therapeutic, social, and recreational programming provided in a home-like environment in a licensed assisted living facility in conjunction with residing in the community based.'
    },
    {
        title: 'SUPPORTED HOME LIVING',
        body: 'Supported home living services are provided by Ability Options LLC for men and women recovering from mental illness. The residential facilities are an essential building block for many in recovery. The services are designed to provide smooth, effective transition from treatment to independent living.'
    },
    {
        title: 'RESPITE CARE',
        body: 'Respite is a service that provides temporary relief from care giving to the primary caregiver of an individual during times when the individual\'s primary caregiver would normally provide care.'
    },
    {
        title: 'PSYCHOSOCIAL REHABILITATION',
        body: 'Ability Options LLC uses evidence-based or evidence-informed interventions which support the individual’s recovery by helping the individual develop, refine and/or maintain the skills needed to function successfully in the community.'
    },
    {
        title: 'EMPLOYMENT SERVICES',
        body: 'Ability Options provides employment Services for an individual to gain work-related experience considered crucial for job placement (e.g., unpaid internship), only if such experience is vital to the person to achieve his or her vocational goal.'
    },
    {
        title: 'EMPLOYMENT ASSISTANCE',
        body: 'Ability Options LLC will help the individual obtain and maintain paid employment in the community. ​'
    },
    {
        title: 'SUPPORTED EMPLOYMENT',
        body: 'Employment is known to be a cornerstone in attaining and maintaining good mental health. It is the goal of Ability Options LLC to ensure that our individuals meet all of their long and short term goals.'
    },
    
    {
        title: 'PEER SUPPORT',
        body: 'Peer Support Services are peer-to-peer services designed to promote skills for coping with and managing mental health symptoms as well as developing a network of information and support from others who have been through similar experiences.'
    },
    {
        title: 'COMMUNITY PSYCHIATRIC SUPPORTS AND TREATMENT (CPST)',
        body: 'Ability Options LLC has contracted several counseling centers works with adults to establish and work towards their treatment goals. The Center\'s staff includes qualified mental health and substance abuse professionals addressing topics'
    },
    {
        title: 'NURSING',
        body: 'Nursing services cover ongoing chronic conditions such as wound care, medication administration (including training, monitoring, and evaluation of side effects), and supervising delegated tasks.'
    },
    {
        title: 'RESPITE CARE',
        body: 'Respite is a service that provides temporary relief from care giving to the primary caregiver of an individual during times when the individual\'s primary caregiver would normally provide care.'
    },
    {
        title: 'MINOR HOME MODIFICATIONS',
        body: 'Ability Options LLC provides minor home modifications in accordance with applicable state or local building codes. We will ensure compliance with the requirements for delivery of minor home modifications, which include requirements as to type of allowed modifications, time frames for completion, specifications for the modification inspections of modifications, and follow-up on the completion of the modification.'
    },
    {
        title: 'HOME DELIVERY MEALS',
        body: 'Ability Options provides employment Services for an individual to gain work-related experience considered crucial for job placement (e.g., unpaid internship), only if such experience is vital to the person to achieve his or her vocational goal.'
    },
    {
        title: 'TRANSITION ASSISTANCE SERVICES (TAS)',
        body: 'This are payment of set-up expenses for individuals transitioning from institutions into community settings necessary to enable individuals to establish basic households.​'
    },
    {
        title: 'SUBSTANCE USE DISORDER SERVICES (SUD)',
        body: 'Ability Options provides assessment and ambulatory group and individual counseling for substance use disorders. Services are specialized to meet the needs of individuals who have experienced extended institutional placement.'
    },

    {
        title: 'FLEXIBLE FUNDS',
        body: 'These are the monies utilized for non-clinical supports that augment the IRP to reduce symptomatology and maintain quality of life and community integration.'
    },
    {
        title: 'TRANSPORTATION SERVICES',
        body: 'Tability Options LLC will provide transportation services to clients without duplicating the transportation provided as part of other services or under the State Plan medical transportation benefit.'
    },
    {
        title: 'RECOVERY MANAGEMENT',
        body: 'Recovery Management includes services assisting beneficiaries in gaining access to needed Medicaid State Plan and HCBS-AMH services, as well as medical, social, educational, and other resources, regardless of funding source. ​'
    },

    
]
return(
    <>
    <Head 
        heading={content.heading} 
        body={content.body} 
        callToActionButton={content.callToActionButton} 
        capture={content.capture}
    />
    
    <section id='list' className='bg-light'>
    <div className='container'>
        <h3 className='text-center field text-uppercase text-success'>Our List of Services</h3>
        <br/>
        <div className='row justify-content-center'>
            <div className='col-md-8'>
                { data.map( (e) => {
                    return(
                        <EachService title={e.title} body={e.body} />
                    )
                } ) }
               
            </div>
        </div>
    </div>
    </section>
    </>
)
}
export default ServiceSection