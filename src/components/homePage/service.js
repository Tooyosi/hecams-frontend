import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const EachService = ({title, body}) => {
 return (
     <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
           <h6 className='text-success'> {title} </h6>
        </AccordionSummary>
        <AccordionDetails>
            {body}
        </AccordionDetails>
     </Accordion>
 )
}

export default EachService