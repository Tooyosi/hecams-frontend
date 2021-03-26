import React from "react";

const Auth = ({ children }) => (
  <React.Suspense fallback={<i className="pi pi-spin pi-spinner" style={{ fontSize: '2rem' }}></i>}>
    <div className="pages-body login-page p-d-flex p-flex-column">
      <div className="topbar p-p-3 p-d-flex p-jc-between p-flex-row p-ai-center">
        <div className="topbar-left p-ml-3 p-d-flex">
          <div className="logo">
            <img src="assets/layout/images/logo2x.png" alt="" />
          </div>
        </div>
        <div className="topbar-right p-mr-3 p-d-flex">
          {/* <Button onClick={goDashboard} type="button" label="DASHBOARD"
            className="p-button-text p-button-plain topbar-button"></Button> */}
        </div>
      </div>

      <div className="p-grid p-justify-center p-mt-auto p-mb-auto">
        <div className="p-col-12 p-md-6 p-lg-4">
          {children}
        </div>
      </div>
    </div>
  </React.Suspense>
);

export default Auth;
