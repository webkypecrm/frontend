
import { useState } from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../ImageWithBasePath";
import Scrollbars from "react-custom-scrollbars-2";
import { all_routes } from "../../pages/Router/all_routes";

const Sidebar = ({ setExpandMenu }) => {
    const [openMenus, setOpenMenus] = useState({})
    const route = all_routes;
    const toggle = () => {
        setExpandMenu(true);
    };

    const toggle2 = () => {
        setExpandMenu(false);
    };


    function handleMenu(menu) {
        setOpenMenus((prevState) => ({
            ...prevState,
            [menu]: !prevState[menu],
        }));
    };


    return <div
        className="sidebar"
        id="sidebar"
        onMouseEnter={toggle}
        onMouseLeave={toggle2}
    >
        <Scrollbars>
            <div className="sidebar-inner slimscroll">
                <div id="sidebar-menu" className="sidebar-menu">
                    <ul>
                        <li className="clinicdropdown">
                            <Link to="profile.html">
                                <ImageWithBasePath src="assets/img/profiles/avatar-14.jpg" className="img-fluid" alt="Profile" />
                                <div className="user-names">
                                    <h5>Adrian Davies</h5>
                                    <h6>Tech Lead</h6>
                                </div>
                            </Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <h6 className="submenu-hdr">Main Menu</h6>
                            <ul>
                                <li className="submenu">
                                    <Link to="#"
                                        className={openMenus['menu1'] ? "subdrop active" : "subdrop"}
                                        onClick={() => {
                                            handleMenu('menu1')
                                        }}
                                    >
                                        <i className="ti ti-layout-2"></i><span>Dashboard</span><span className="menu-arrow"></span>
                                    </Link>
                                    {openMenus["menu1"] &&
                                        <ul>
                                            <li><Link to="dashboard/sales-dashboard">Sales Dashboard</Link></li>
                                            <li><Link to="dashboard/support-dashboard">Support Dashboard</Link></li>
                                            <li><Link to="dashboard/staff-dashboard" >Staff Dashboard</Link></li>
                                        </ul>
                                    }

                                </li>
                                <li className="submenu">
                                    <Link to="#"
                                        className={openMenus['application'] ? "subdrop active" : "subdrop"}
                                        onClick={() => {
                                            handleMenu('application')
                                        }}
                                    >
                                        <i className="ti ti-layout-2"></i><span>Application</span><span className="menu-arrow"></span>
                                    </Link>
                                    {openMenus["application"] &&
                                        <ul>
                                            <li><Link to={route.chat}>Chat</Link></li>
                                            <li className="submenu submenu-two subdrop">
                                                <Link to="#"
                                                    className={openMenus['applicationCalls'] ? "subdrop active" : "subdrop"}
                                                    onClick={() => {
                                                        handleMenu('applicationCalls')
                                                    }} >
                                                    Call
                                                    <span className="menu-arrow inside-submenu"></span></Link>
                                                {openMenus['applicationCalls'] &&
                                                    <ul>
                                                        <li><Link to={route.videoCall}>Video Call</Link></li>
                                                        <li><Link to={route.audioCall}>Audio Call</Link></li>
                                                        <li><Link to={route.callHistory}>Call History</Link></li>
                                                    </ul>
                                                }
                                            </li>
                                            <li><Link to={route.calendar} >Calender</Link></li>
                                            <li><Link to={route.email}>Email</Link></li>
                                            <li><Link to={route.todo} >To Do</Link></li>
                                            <li><Link to={route.notes}>Notes</Link></li>
                                            <li><Link to={route.fileManager} >File Manager</Link></li>
                                        </ul>
                                    }
                                </li>

                                <li className="submenu">
                                    <Link to="#"
                                        className={openMenus['menu-sub'] ? "subdrop active" : "subdrop"}
                                        onClick={() => {
                                            handleMenu('menu-sub')
                                        }}

                                    >
                                        <i className="ti ti-layout-2"></i><span>Subscription</span><span className="menu-arrow"></span>
                                    </Link>
                                    {openMenus['menu-sub'] &&
                                        <ul>
                                            <li><Link to={route.companies}>Manage Companies </Link></li>
                                        </ul>
                                    }

                                </li>

                                <li className="submenu">
                                    <Link to="#"
                                        className={openMenus['menu2'] ? "subdrop active" : "subdrop"}
                                        onClick={() => {
                                            handleMenu('menu2')
                                        }}

                                    >
                                        <i className="ti ti-layout-2"></i><span>HRMS</span><span className="menu-arrow"></span>
                                    </Link>
                                    {openMenus['menu2'] &&
                                        <ul>
                                            <li><Link to={route.manageStaff}>Manage Staff </Link></li>
                                            <li><Link to={route.manageStaff}>Add Staff</Link></li>
                                            <li><Link to={route.manageStaff}>Active Staff </Link></li>
                                            <li><Link to={route.manageStaff}>In Active Staff </Link> </li>
                                            <li><Link to={route.rolesPermissions}>Role & Permissions</Link></li>
                                            <li><Link to={route.rolesPermissions}>Staff Grouping</Link></li>
                                            <li><Link to={route.rolesPermissions}>Staff Department</Link></li>
                                            <li><Link to={route.rolesPermissions}>Staff Designation</Link></li>
                                        </ul>
                                    }

                                </li>

                                <li className="submenu">
                                    <Link to="#"
                                        className={openMenus['menu3'] ? "subdrop active" : "subdrop"}
                                        onClick={() => {
                                            handleMenu('menu3')
                                        }}
                                    >
                                        <i className="ti ti-layout-2"></i><span>PRODUCT/SERVICES</span><span className="menu-arrow"></span>
                                    </Link>
                                    {openMenus["menu3"] &&
                                        <ul>
                                            <li className="submenu submenu-two subdrop">
                                                <Link to="#"
                                                    className={openMenus['subMenu1'] ? "subdrop active" : "subdrop"}
                                                    onClick={() => {
                                                        handleMenu('subMenu1')
                                                    }} >
                                                    Type
                                                    <span className="menu-arrow inside-submenu"></span></Link>
                                                {openMenus['subMenu1'] &&
                                                    <ul>
                                                        <li><Link to="product.html">Product</Link></li>
                                                        <li><Link to="service.html">Service</Link></li>
                                                    </ul>
                                                }
                                            </li>
                                            <li><Link to="calendar.html">Select Category</Link></li>
                                            <li><Link to="todo.html">Name </Link></li>
                                            <li><Link to="notes.html">Permissions</Link></li>
                                            <li><Link to="file-manager.html">Unit </Link></li>
                                            <li><Link to="file-manager.html">Tax</Link></li>
                                            <li><Link to="file-manager.html">Product Listing</Link></li>
                                        </ul>
                                    }

                                </li>
                                <li className="submenu">
                                    <Link to="#"
                                        className={openMenus['Menu4'] ? "subdrop active" : "subdrop"}
                                        onClick={() => {
                                            handleMenu('Menu4')
                                        }}
                                    >
                                        <i className="ti ti-brand-airtable">
                                        </i><span>SALES</span>
                                        <span className="menu-arrow"></span></Link>
                                    <ul>
                                        <li><Link to={route.leads}>Manage Leads</Link></li>
                                        <li><Link to={route.leads}>Add Lead</Link></li>
                                        <li><Link to={route.leads}>Leads Source </Link></li>
                                        <li><Link to={route.leads}>Lost Reasons</Link></li>
                                        <li><Link to={route.leads}>Industry</Link></li>
                                        <li><Link to={route.leads}>Lead Stage</Link></li>
                                        <li><Link to={route.leads}>Proposal Template</Link></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <Link to="#"
                                        className={openMenus['Menu5'] ? "subdrop active" : "subdrop"}
                                        onClick={() => {
                                            handleMenu('Menu5')
                                        }}>
                                        <i className="ti ti-brand-airtable">
                                        </i><span>TASKS</span>
                                        <span className="menu-arrow"></span></Link>
                                    <ul>
                                        <li><Link to={route.tasks}>Task Category</Link></li>
                                        <li><Link to={route.tasks}>New Tasks</Link></li>
                                        <li><Link to={route.tasks}>Assigned Tasks </Link></li>
                                        <li><Link to={route.tasks}>Open Tasks</Link></li>
                                        <li><Link to={route.tasks}>In Process Tasks</Link></li>
                                        <li><Link to={route.tasks}>Closed Tasks</Link></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <Link to="#"
                                        className={openMenus['Menu6'] ? "subdrop active" : "subdrop"}
                                        onClick={() => {
                                            handleMenu('Menu6')
                                        }}>
                                        <i className="ti ti-brand-airtable">
                                        </i><span>CUSTOMERS</span>
                                        <span className="menu-arrow"></span></Link>
                                    <ul>
                                        <li><Link to={route.customerList}>Manage Customer</Link></li>
                                        <li><Link to={route.customerList}>Add Contacts</Link></li>
                                        <li><Link to={route.customerList}>Add Customer</Link></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <Link to="#"
                                        className={openMenus['Menu7'] ? "subdrop active" : "subdrop"}
                                        onClick={() => {
                                            handleMenu('Menu7')
                                        }}>
                                        <i className="ti ti-brand-airtable">
                                        </i><span>FINANCE</span>
                                        <span className="menu-arrow"></span></Link>
                                    <ul>
                                        <li><Link to={route.customerList}>Add Contact</Link></li>
                                        <li><Link to={route.customerList}>Add Customer</Link></li>
                                        <li><Link to={route.customerList}>Manage Customer</Link></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <Link to="#"
                                        className={openMenus['Menu8'] ? "subdrop active" : "subdrop"}
                                        onClick={() => {
                                            handleMenu('Menu8')
                                        }}
                                    >
                                        <i className="ti ti-brand-airtable">
                                        </i><span>SUPPORT</span>
                                        <span className="menu-arrow"></span></Link>
                                    <ul>
                                        <li><Link to={route.ticketStage}>Support Category</Link></li>
                                        <li><Link to={route.ticketStage}>Ticket Stage</Link></li>
                                        <li><Link to={route.ticketStage}>Ticket Priority</Link></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <Link to="#"
                                        className={openMenus['Menu9'] ? "subdrop active" : "subdrop"}
                                        onClick={() => {
                                            handleMenu('Menu9')
                                        }}>
                                        <i className="ti ti-brand-airtable">
                                        </i><span>MARKETING</span>
                                        <span className="menu-arrow"></span></Link>
                                    <ul>
                                        <li><Link to={route.campaign}>Campaigns</Link></li>
                                        <li><Link to={route.email}>Emails</Link></li>
                                        <li><Link to={route.deals}>Deals</Link></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <Link to="#"
                                        className={openMenus['Menu10'] ? "subdrop active" : "subdrop"}
                                        onClick={() => {
                                            handleMenu('Menu10')
                                        }}>
                                        <i className="ti ti-brand-airtable">
                                        </i><span>SETTINGS</span>
                                        <span className="menu-arrow"></span></Link>
                                    <ul>
                                        <li className="submenu submenu-two subdrop">
                                            <Link to="#"
                                                className={openMenus['subMenu2'] ? "subdrop active" : "subdrop"}
                                                onClick={() => {
                                                    handleMenu('subMenu2')
                                                }} >
                                                General Settings
                                                <span className="menu-arrow inside-submenu"></span></Link>
                                            {openMenus['subMenu2'] &&
                                                <ul>
                                                    <li><Link to={route.profile}>Profile</Link></li>
                                                    <li><Link to={route.security}>Security</Link></li>
                                                    <li><Link to={route.notification}>Notification</Link></li>
                                                    <li><Link to={route.connectedApps}>Connected App</Link></li>
                                                </ul>
                                            }
                                        </li>
                                        <li className="submenu submenu-two subdrop">
                                            <Link to="#"
                                                className={openMenus['subMenu3'] ? "subdrop active" : "subdrop"}
                                                onClick={() => {
                                                    handleMenu('subMenu3')
                                                }} >
                                                Website Settings
                                                <span className="menu-arrow inside-submenu"></span></Link>
                                            {openMenus['subMenu3'] &&
                                                <ul>
                                                    <li><Link to={route.companySettings}>Company Setting</Link></li>
                                                    <li><Link to={route.localization}>Localization</Link></li>
                                                    <li><Link to={route.prefixes}>Prefixes</Link></li>
                                                    <li><Link to={route.preference}>Preference</Link></li>
                                                    <li><Link to={route.appearance}>Appearance</Link></li>
                                                    <li><Link to={route.language}>Language</Link></li>
                                                </ul>
                                            }
                                        </li>
                                        <li className="submenu submenu-two subdrop">
                                            <Link to="#"
                                                className={openMenus['subMenu4'] ? "subdrop active" : "subdrop"}
                                                onClick={() => {
                                                    handleMenu('subMenu4')
                                                }} >
                                                App Settings
                                                <span className="menu-arrow inside-submenu"></span></Link>
                                            {openMenus['subMenu4'] &&
                                                <ul>
                                                    <li><Link to={route.invoiceSettings}>Invoice</Link></li>
                                                    <li><Link to={route.printers}>Printers</Link></li>
                                                    <li><Link to={route.customFields}>Custom Fields</Link></li>

                                                </ul>
                                            }
                                        </li>
                                        <li className="submenu submenu-two subdrop">
                                            <Link to="#"
                                                className={openMenus['subMenu5'] ? "subdrop active" : "subdrop"}
                                                onClick={() => {
                                                    handleMenu('subMenu5')
                                                }} >
                                                System Settings
                                                <span className="menu-arrow inside-submenu"></span></Link>
                                            {openMenus['subMenu5'] &&
                                                <ul>
                                                    <li><Link to={route.emailSettings}>Email</Link></li>
                                                    <li><Link to={route.smsGateways}>SMS-Gateways</Link></li>
                                                    <li><Link to={route.gdprCookies}>GDPR-Cookies</Link></li>

                                                </ul>
                                            }
                                        </li>
                                        <li className="submenu submenu-two subdrop">
                                            <Link to="#"
                                                className={openMenus['subMenu6'] ? "subdrop active" : "subdrop"}
                                                onClick={() => {
                                                    handleMenu('subMenu6')
                                                }} >
                                                Financial Settings
                                                <span className="menu-arrow inside-submenu"></span></Link>
                                            {openMenus['subMenu6'] &&
                                                <ul>
                                                    <li><Link to={route.paymentGateways}>Payment Gateways</Link></li>
                                                    <li><Link to={route.bankAccount}>Bank Accounts</Link></li>
                                                    <li><Link to={route.taxRates}>Tax Rates</Link></li>
                                                    <li><Link to={route.currencies}>Currencies</Link></li>

                                                </ul>
                                            }
                                        </li>
                                        <li className="submenu submenu-two subdrop">
                                            <Link to="#"
                                                className={openMenus['subMenu7'] ? "subdrop active" : "subdrop"}
                                                onClick={() => {
                                                    handleMenu('subMenu7')
                                                }} >
                                                Other Settings
                                                <span className="menu-arrow inside-submenu"></span></Link>
                                            {openMenus['subMenu7'] &&
                                                <ul>
                                                    <li><Link to={route.storage}>Storage</Link></li>
                                                    <li><Link to={route.banIpAddrress}>Ban IP Address</Link></li>

                                                </ul>
                                            }
                                        </li>
                                        <li className="submenu submenu-two subdrop">
                                            <Link to="#"
                                                className={openMenus['subMenu8'] ? "subdrop active" : "subdrop"}
                                                onClick={() => {
                                                    handleMenu('subMenu8')
                                                }} >
                                                Master
                                                <span className="menu-arrow inside-submenu"></span></Link>
                                            {openMenus['subMenu8'] &&
                                                <ul>
                                                    <li><Link to={route.sources}>Sources</Link></li>
                                                    <li><Link to={route.lostReason}>Lost Reasons</Link></li>
                                                    <li><Link to={route.contactStage}>Contact Stage</Link></li>
                                                    <li><Link to={route.industry}>Industry</Link></li>
                                                    <li><Link to={route.calls}>Calls</Link></li>
                                                </ul>
                                            }
                                        </li>

                                    </ul>
                                </li>
                            </ul>
                        </li>

                    </ul>
                </div>
            </div>
        </Scrollbars>
    </div>



}

export default Sidebar;



