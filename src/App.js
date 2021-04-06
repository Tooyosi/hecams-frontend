import React, { useState } from "react"
import './App.css';
import Routes from './routes/Routes';


export const RTLContext = React.createContext();

function App() {
  const [isRTL, setRTL] = useState(false);
  return (
    <RTLContext.Provider value={isRTL}>

      <Routes />
    </RTLContext.Provider>
  );
}

export default App;
