import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Sidebar = () => {
    const role = localStorage.getItem("Role");

    const [isActive, setIsActive] = useState(false);

    useEffect(() => {


        if (isActive) {
            document.body.classList.add('sidebar-main');
        } else {
            document.body.classList.remove('sidebar-main');
        }
    }, [isActive]);

    const handleClick = () => {
        setIsActive(prevState => !prevState);
    };

    return (
        <div
            className="iq-sidebar"
        >
            <div className="iq-sidebar-logo d-flex justify-content-between">
                <a href="index.html">
                    <img src="assets/images/logo.png" className="img-fluid" alt="Logo" />
                    <span>Trade</span>
                </a>
                <div className="iq-menu-bt-sidebar">
                    <div className="iq-menu-bt align-self-center">
                        <div onClick={handleClick} className={`wrapper-menu ${isActive ? 'open' : ''}`}>
                            <div className="main-circle">
                                <i className="ri-more-fill" />
                            </div>
                            <div className="hover-circle">
                                <i className="ri-more-2-fill" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                id="sidebar-scrollbar"
                data-scrollbar="true"
                tabIndex={-1}
                style={{ overflow: 'hidden', outline: 'none' }}
            >
                <div className="scroll-content">
                    <nav className="iq-sidebar-menu">

                        <ul className="iq-menu">
                            {role === 'Admin' ? (
                                <>
                                    <li className="active">
                                        <Link to="/dashboards" className="iq-waves-effect">
                                            <i className="ri-hospital-fill" />
                                            <span>Dashboard</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/adduser" className="iq-waves-effect">
                                            <i className="ri-hospital-fill" />
                                            <span>Create Account</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="strategygroup" className="iq-waves-effect">
                                            <i className="la la-sellsy" />
                                            <span>Strategies Group</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/addscript" className="iq-waves-effect">
                                            <i className="ri-home-8-fill" />
                                            <span>Add Script</span>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="/clientservice" className="iq-waves-effect">
                                            <i className="ri-group-fill" />
                                            <span>Client Service</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="brokercredential" className="iq-waves-effect">
                                            <i className="lab la-mendeley" />
                                            <span>Broker Credential</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="userlog" className="iq-waves-effect">
                                            <i className="la la-cog" />
                                            <span>User Script Details</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="servicereport" className="iq-waves-effect">
                                            <i className="la la-envelope-open" />
                                            <span>Service Report</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/tradehistory" className="iq-waves-effect">
                                            <i className="las la-history"></i>
                                            <span>Trade History</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="clientactivity" className="iq-waves-effect">
                                            <i className="las la-radiation-alt" />
                                            <span>Client Activity</span>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="clientreport" className="iq-waves-effect">
                                            <i className="la la-map-marker" />
                                            <span>Client Thread Report</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="smtp" className="iq-waves-effect">
                                            <i className="la la-palette" />
                                            <span>SMTP Details</span>
                                        </Link>
                                    </li>
                                    
                                </>
                            ) : (
                                <>
                                    <li className="active">
                                        <Link to="/userdashboard" className="iq-waves-effect">
                                            <i className="ri-hospital-fill" />
                                            <span>Dashboard</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/adduser" className="iq-waves-effect">
                                            <i className="ri-hospital-fill" />
                                            <span>Profile</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/userbroker" className="iq-waves-effect">
                                            <i className="ri-home-8-fill" />
                                            <span>Broker Credential</span>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="/userscript" className="iq-waves-effect">
                                            <i className="ri-group-fill" />
                                            <span>Add Script Parameter</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="brokercredential" className="iq-waves-effect">
                                            <i className="lab la-mendeley" />
                                            <span>Technical Patterns</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="userlog" className="iq-waves-effect">
                                            <i className="la la-cog" />
                                            <span>Update Script Parameter</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="servicereport" className="iq-waves-effect">
                                            <i className="la la-envelope-open" />
                                            <span>Discontinue Trade</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/tradehistory" className="iq-waves-effect">
                                            <i className="las la-history"></i>
                                            <span>Continue Trade</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="clientactivity" className="iq-waves-effect">
                                            <i className="las la-radiation-alt" />
                                            <span>Square Off</span>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="clientreport" className="iq-waves-effect">
                                            <i className="la la-map-marker" />
                                            <span>Trading Report</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="smtp" className="iq-waves-effect">
                                            <i className="la la-palette" />
                                            <span>Trade History</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="strategygroup" className="iq-waves-effect">
                                            <i className="la la-sellsy" />
                                            <span>Trade Response</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="strategygroup" className="iq-waves-effect">
                                            <i className="la la-sellsy" />
                                            <span>Net P&L</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="strategygroup" className="iq-waves-effect">
                                            <i className="la la-sellsy" />
                                            <span>Panel Track</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="strategygroup" className="iq-waves-effect">
                                            <i className="la la-sellsy" />
                                            <span>Description</span>
                                        </Link>
                                    </li>
                                </>
                            )}
                        </ul>

                    </nav>
                    <div className="p-3" />
                </div>
                <div className="scrollbar-track scrollbar-track-x" style={{ display: 'none' }}>
                    <div
                        className="scrollbar-thumb scrollbar-thumb-x"
                        style={{ width: 80, transform: 'translate3d(0px, 0px, 0px)' }}
                    />
                </div>
                <div className="scrollbar-track scrollbar-track-y" style={{ display: 'block' }}>
                    <div
                        className="scrollbar-thumb scrollbar-thumb-y"
                        style={{
                            height: '84.5734px',
                            transform: 'translate3d(0px, 0px, 0px)',
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
