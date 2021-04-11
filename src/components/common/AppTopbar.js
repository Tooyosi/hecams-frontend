import React, { useContext, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { MegaMenu } from 'primereact/megamenu';
import { useHistory } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { CSSTransition } from 'react-transition-group';
import { RTLContext } from 'App';
import Logo from './Logo';
import { logout } from 'service/authService';


const AppTopbar = (props) => {

    const isRTL = useContext(RTLContext);
    const history = useHistory();

    // Fixed for 6.1.0
    // eslint-disable-next-line
    const searchPanel = useRef(null)

    useEffect(() => {
        // Fixed for 6.1.0
        /*if (props.searchActive) {
            searchPanel.current.element.focus();
        }*/
    }, [props.searchActive])

    const onInputKeydown = (event) => {
        const key = event.which;

        //escape, tab and enter
        if (key === 27 || key === 9 || key === 13) {
            props.onSearch(false);
        }
    };

    return (
        <div className="layout-topbar p-shadow-4">
            <div className="layout-topbar-left">
                <button type="button" style={{ cursor: 'pointer' }} className="layout-topbar-logo p-link" onClick={() => history.push('/')}>
                    {/* <img id="app-logo" src="assets/layout/images/logo-light.svg" alt="ultima-layout" style={{ height: '2.25rem' }} /> */}
                    <Logo style={{width: "100px"}}/>
                </button>
                <button type="button" className="layout-menu-button p-shadow-6 p-link" onClick={props.onMenuButtonClick}>
                    <i className="pi pi-chevron-right"></i>
                </button>
                <button type="button" className="layout-topbar-mobile-button p-link">
                    <i className="pi pi-ellipsis-v fs-large" onClick={props.onMobileTopbarButtonClick}></i>
                </button>
            </div>

            <div className={classNames('layout-topbar-right', { 'layout-topbar-mobile-active': props.mobileTopbarActive })}>
                <div className="layout-topbar-actions-left">
                </div>
                <div className="layout-topbar-actions-right">
                    <ul className="layout-topbar-items">
                        <li className="layout-topbar-item layout-search-item">
                            <button className="layout-topbar-action rounded-circle p-link" onClick={() => props.onSearch(true)}>
                                <i className="pi pi-search fs-large"></i>
                            </button>
                            <CSSTransition classNames="p-toggleable" timeout={{ enter: 1000, exit: 450 }} in={props.searchActive} unmountOnExit>
                                <div className="layout-search-panel p-inputgroup">
                                    <span className="p-inputgroup-addon"><i className="pi pi-search"></i></span>
                                    <InputText type="text" placeholder="Search" onKeyDown={onInputKeydown} />
                                    <span className="p-inputgroup-addon">
                                        <Button type="button" icon="pi pi-times" className="p-button-rounded p-button-text p-button-plain" onClick={() => props.onSearch(false)}></Button>
                                    </span>
                                </div>
                            </CSSTransition>
                        </li>
                         <li className="layout-topbar-item">
                            <button className="layout-topbar-action p-d-flex p-dir-row p-jc-center p-ai-center p-px-2 rounded-circle p-link" onClick={(event) => props.onTopbarItemClick({ originalEvent: event, item: 'profile' })}>
                                <img src="assets/demo/images/avatar/amyelsner.png" alt="avatar" style={{ width: '32px', height: '32px' }} />
                            </button>

                            <CSSTransition classNames="p-toggleable" timeout={{ enter: 1000, exit: 450 }} in={props.activeTopbarItem === 'profile'} unmountOnExit>
                                <ul className="layout-topbar-action-panel p-shadow-6">
                                    <li className="layout-topbar-action-item">
                                        <button onClick={()=>logout()} className="p-d-flex p-flex-row p-ai-center p-link">
                                            <i className={classNames('pi pi-power-off', { 'p-mr-2': !isRTL, 'p-ml-2': isRTL })}></i>
                                            <span>Logout</span>
                                        </button>
                                    </li>
                                </ul>
                            </CSSTransition>
                        </li>
                    </ul>
                </div>
            </div>
        </div >
    );

}

export default AppTopbar;
