import React, { createContext, useState, useEffect } from "react";
import Logo from "components/common/Logo";
import { Messages } from 'primereact/messages';


export const AlertContext = createContext();

const Auth = ({ children }) => {

  const [message, setMessage] = useState({
    content: '',
    severity: '',
    toggle: false
  });

  useEffect(() => {
    if (message.content !== "") {
      addMessage(message.severity, message.content)
    }

  }, [message.toggle])
  const addMessage = (severity, content) => {
    message.current.show({ severity, content });
  };
  return (
    <AlertContext.Provider value={[message, setMessage]}>
      <React.Suspense fallback={<i className="pi pi-spin pi-spinner" style={{ fontSize: '2rem' }}></i>}>
        <div className="pages-body p-d-flex">

          <div className="p-grid p-justify-center p-mt-auto p-mb-auto width-100">
            <div className="p-col-12 p-md-6 p-lg-4">
              <Messages className="p-d-block" sticky ref={message} />
              <div className="card">
                <div className="card-body p-px-3">
                  <div className="input-panel p-d-flex p-flex-column p-px-3 p-py-3">

                    <div className="p-text-center">
                      <Logo />
                    </div>
                    {children}

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Suspense>
    </AlertContext.Provider>
  )
};

export default Auth;
