import React from "react";

const Auth = ({ children }) => (
  <React.Suspense fallback={<i className="pi pi-spin pi-spinner" style={{ fontSize: '2rem' }}></i>}>
    <div className="layout-wrapper">
      <div className="layout-main">
        <div className="layout-content">
          <div className="p-grid p-justify-center">
            <div className="p-col-12 p-md-6 p-lg-5">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  </React.Suspense>
);

export default Auth;
