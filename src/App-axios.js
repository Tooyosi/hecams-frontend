import logo from './logo.svg';
import './App.css';
import React from "react";
import axios from "axios";

function App() {
  const [string, setString] = React.useState("hello");

  React.useEffect(() => {
    console.log("Reset Button", "test logsssss");



    axios
        .get('http://18.188.135.202:8443/time')
        .then(response => {
          console.log(response.data);
          setString(response.data);
        });




  }, []);



  return (
      <div>

        <p>{string}</p>


      </div>
  );

}

export default App;
