import React, {useEffect} from "react";
import { withRouter } from "react-router-dom";

function ScrollToTop(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
    
  }, [])
  return props.children
}


export default withRouter(ScrollToTop);
