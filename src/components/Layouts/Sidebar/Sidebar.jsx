
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ImageWithBasePath from "../../ImageWithBasePath";
import Scrollbars from "react-custom-scrollbars-2";
import { all_routes } from "../../../pages/Router/all_routes";

const Sidebar = ({ setExpandMenu }) => {
    const Location = useLocation();
    const [openMenus, setOpenMenus] = useState({})
    const route = all_routes;
    const profileName = localStorage.getItem('name') || '';
    const type = localStorage.getItem('type') || '';
    const profilePic = localStorage.getItem('profilePic') || '';

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
        // setOpenMenus({
        //     [menu]: !openMenus[menu]
        // })
    };

    // useEffect(() => {

    //     console.log('openMenus =>', openMenus)

    // }, [openMenus])

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
                                <img src={profilePic ? profilePic : "assets/img/profiles/gajenn.png"} className="img-fluid" alt="Profile" />
                                <div className="user-names">
                                    <h5>{profileName}</h5>
                                    <h6>{type == "1" ? "Admin" : "Employee"}</h6>
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
                                        className={openMenus['dashboard'] ? "subdrop active active" : 'subdrop'}
                                        onClick={() => {
                                            handleMenu('dashboard')
                                        }}
                                    >
                                        <i className="ti ti-layout-2"></i><span>DASHBOARD</span><span className="menu-arrow"></span>
                                    </Link>
                                    {openMenus["dashboard"] &&
                                        <ul>
                                            <li><Link to={route.salesDashboard}>Sales Dashboard</Link></li>
                                            <li><Link to={route.salesDashboard}>Support Dashboard</Link></li>
                                            <li><Link to={route.salesDashboard}>Staff Dashboard</Link></li>
                                        </ul>
                                    }
                                </li>
                                <li className="submenu">
                                    <Link to="#"
                                        className={openMenus['hrms'] ? "subdrop active" : "subdrop"}
                                        onClick={() => {
                                            handleMenu('hrms')
                                        }}
                                    >
                                        <i className="ti ti-file-invoice"></i><span>HRMS</span><span className="menu-arrow"></span>
                                    </Link>
                                    {openMenus['hrms'] &&
                                        <ul>
                                            <li><Link to={route.manageStaff}>Manage Staff </Link></li>
                                            <li><Link to={route.rolesPermissions}>Staff Attendance</Link></li>
                                            <li><Link to={route.rolesPermissions}>Staff Leaves</Link></li>
                                            <li><Link to={route.rolesPermissions}>Staff Salary</Link></li>
                                            <li><Link to={route.rolesPermissions}>Staff Targets</Link></li>
                                            <li><Link to={route.rolesPermissions}>Staff Achievements</Link></li>
                                            <li><Link to={route.rolesPermissions}>Staff Incentives</Link></li>
                                            <li><Link to={route.rolesPermissions}>Staff Rewards</Link></li>
                                            {/* <li><Link to={route.rolesPermissions}>Staff KYC </Link></li>
                                            <li><Link to={route.rolesPermissions}>Staff Exit</Link></li>
                                            <li><Link to={route.rolesPermissions}>Staff Knowledge Transfer</Link></li> */}
                                        </ul>
                                    }

                                </li>
                                {/* <li className="submenu">
                                    <Link to="#"
                                        className={openMenus['incentives'] ? "subdrop active" : "subdrop"}
                                        onClick={() => {
                                            handleMenu('incentives')
                                        }}
                                    >
                                        <i className="ti ti-file-invoice"></i><span>INCENTIVES</span><span className="menu-arrow"></span>
                                    </Link>
                                    {openMenus['incentives'] &&
                                        <ul>
                                            <li><Link to={route.rolesPermissions}>Staff Targets</Link></li>
                                            <li><Link to={route.rolesPermissions}>Staff Achievements</Link></li>
                                            <li><Link to={route.rolesPermissions}>Staff Incentives</Link></li>
                                            <li><Link to={route.rolesPermissions}>Staff Rewards</Link></li>
                                        </ul>
                                    }

                                </li> */}

                                <li className="submenu">
                                    <Link to="#"
                                        className={openMenus['product'] ? "subdrop active" : "subdrop"}
                                        onClick={() => {
                                            handleMenu('product')
                                        }}
                                    >
                                        <i className="ti ti-brand-slack"></i><span>PRODUCT</span><span className="menu-arrow"></span>
                                    </Link>
                                    {openMenus["product"] &&
                                        <ul>
                                            <li><Link to={route.product}>Manage Product</Link></li>
                                            <li><Link to={route.product}>Disabled Product </Link></li>
                                            <li><Link to={route.product}>Add Product</Link></li>
                                        </ul>
                                    }

                                </li>

                                <li className="submenu">
                                    <Link to="#"
                                        className={openMenus['services'] ? "subdrop active" : "subdrop"}
                                        onClick={() => {
                                            handleMenu('services')
                                        }}
                                    >
                                        <i className="ti ti-file-report"></i><span>SERVICES</span><span className="menu-arrow"></span>
                                    </Link>
                                    {openMenus["services"] &&
                                        <ul>
                                            <li><Link to={route.services}>Manage Services</Link></li>
                                            <li><Link to={route.services}>Disabled Services </Link></li>
                                            <li><Link to={route.services}>Add Services</Link></li>
                                        </ul>
                                    }

                                </li>

                                <li className="submenu">
                                    <Link to="#"
                                        className={openMenus['sales'] ? "subdrop active" : "subdrop"}
                                        onClick={() => {
                                            handleMenu('sales')
                                        }}
                                    >
                                        <i className="ti ti-chart-arcs">
                                        </i><span>SALES</span>
                                        <span className="menu-arrow"></span></Link>
                                    {openMenus['sales'] &&
                                        <ul>
                                            <li><Link to={route.leads}>Manage Leads</Link></li>
                                            <li><Link to={route.leads}>Add Lead</Link></li>
                                            <li><Link to={route.leads}>Proposal Template</Link></li>
                                        </ul>
                                    }

                                </li>
                                <li className="submenu">
                                    <Link to="#"
                                        className={openMenus['task'] ? "subdrop active" : "subdrop"}
                                        onClick={() => {
                                            handleMenu('task')
                                        }}>
                                        <i className="ti ti-list-check">
                                        </i><span>TASKS</span>
                                        <span className="menu-arrow"></span></Link>
                                    {openMenus['task'] &&
                                        <ul>
                                            <li><Link to={route.tasks}>Task Category</Link></li>
                                            <li><Link to={route.tasks}>New Tasks</Link></li>
                                            <li><Link to={route.tasks}>Assigned Tasks </Link></li>
                                            <li><Link to={route.tasks}>Open Tasks</Link></li>
                                            <li><Link to={route.tasks}>In Process Tasks</Link></li>
                                            <li><Link to={route.tasks}>Closed Tasks</Link></li>
                                        </ul>
                                    }

                                </li>
                                <li className="submenu">
                                    <Link to="#"
                                        className={openMenus['Menu6'] ? "subdrop active" : "subdrop"}
                                        onClick={() => {
                                            handleMenu('Menu6')
                                        }}>
                                        <i className="ti ti-user-up">
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
                                        <i className="ti ti-report-money">
                                        </i><span>FINANCE</span>
                                        <span className="menu-arrow"></span></Link>
                                    <ul>
                                        <li><Link to={route.customerList}>View Contracts</Link></li>
                                        <li><Link to={route.customerList}>Payment Schedule</Link></li>
                                        <li><Link to={route.customerList}>Create Invoices</Link></li>
                                        <li><Link to={route.customerList}>New Invoices</Link></li>
                                        <li><Link to={route.customerList}>Due Invoices</Link></li>
                                        <li><Link to={route.customerList}>Paid Invoices</Link></li>
                                        <li><Link to={route.customerList}>Customer SOA</Link></li>
                                        <li><Link to={route.customerList}>Connect Zoho</Link></li>
                                        <li><Link to={route.customerList}>Connect SAP</Link></li>
                                        <li><Link to={route.customerList}>Connect Tally</Link></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <Link to="#"
                                        className={openMenus['Menu8'] ? "subdrop active" : "subdrop"}
                                        onClick={() => {
                                            handleMenu('Menu8')
                                        }}
                                    >
                                        <i className="ti ti-ticket">
                                        </i><span>SUPPORT</span>
                                        <span className="menu-arrow"></span></Link>
                                    <ul>
                                        {/* <li><Link to={route.ticketStage}>Support Category</Link></li>
                                        <li><Link to={route.ticketStage}>Support Sub Category</Link></li> */}
                                        <li><Link to={route.ticketStage}>Create Support Ticket</Link></li>
                                        <li><Link to={route.ticketStage}>Open Tickets</Link></li>
                                        <li><Link to={route.ticketStage}>In Process Tickets</Link></li>
                                        <li><Link to={route.ticketStage}>Closed Tickets</Link></li>
                                        <li><Link to={route.ticketStage}>Hold Tickets</Link></li>
                                        <li><Link to={route.ticketStage}>AI Chatbot</Link></li>
                                        <li><Link to={route.ticketStage}>Video Chat</Link></li>
                                        <li><Link to={route.ticketStage}>Voice Calls</Link></li>
                                        {/* <li><Link to={route.ticketStage}>Manage FAQ</Link></li> */}
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <Link to="#"
                                        className={openMenus['Menu9'] ? "subdrop active" : "subdrop"}
                                        onClick={() => {
                                            handleMenu('Menu9')
                                        }}>
                                        <i className="ti ti-timeline-event-exclamation">
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
                                        className={openMenus['menu-sub'] ? "subdrop active" : "subdrop"}
                                        onClick={() => {
                                            handleMenu('menu-sub')
                                        }}

                                    >
                                        <i className="ti ti-building-community"></i><span>SUBSCRIPTION</span><span className="menu-arrow"></span>
                                    </Link>
                                    {openMenus['menu-sub'] &&
                                        <ul>
                                            <li><Link to={route.companies}>Manage Companies </Link></li>
                                            <li><Link to={route.membershipplan}>Membership Plans </Link></li>
                                            <li><Link to={route.membershipAddon}>Membership Addons </Link></li>
                                            <li><Link to={route.membershipTransaction}>Transactions </Link></li>
                                        </ul>
                                    }

                                </li>
                                <li className="submenu">
                                    <Link to="#"
                                        className={openMenus['expense'] ? "subdrop active" : "subdrop"}
                                        onClick={() => {
                                            handleMenu('expense')
                                        }}

                                    >
                                        <i className="ti ti-file-delta"></i><span>EXPENSE</span><span className="menu-arrow"></span>
                                    </Link>
                                    {openMenus['expense'] &&
                                        <ul>
                                            {/* <li><Link to={route.salesDashboard}>Expense Category </Link></li>
                                            <li><Link to={route.salesDashboard}>Expense Sub Category </Link></li> */}
                                            <li><Link to={route.salesDashboard}>Create Expense</Link></li>
                                            <li><Link to={route.salesDashboard}>Manage Expense</Link></li>
                                            <li><Link to={route.salesDashboard}>Expense Summary</Link></li>
                                            <li><Link to={route.salesDashboard}>AI-Expense Summary</Link></li>
                                            <li><Link to={route.membershipTransaction}>Connect with Zoho</Link></li>
                                        </ul>
                                    }

                                </li>
                                <li className="submenu">
                                    <Link to="#"
                                        className={openMenus['setting'] ? "subdrop active" : "subdrop"}
                                        onClick={() => {
                                            handleMenu('setting')
                                        }}>
                                        <i className="ti ti-settings-cog">
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
                                <li className="submenu">
                                    <Link to="#"
                                        className={openMenus['setup'] ? "subdrop active" : "subdrop"}
                                        onClick={() => {
                                            handleMenu('setup')
                                        }}>
                                        <i className="ti ti-settings-cog">
                                        </i><span>SETUP</span>
                                        <span className="menu-arrow"></span></Link>
                                    {openMenus['setup'] &&
                                        <ul>
                                            <li className="submenu submenu-two subdrop">
                                                <Link to="#"
                                                    className={openMenus['staff-master'] ? "subdrop active" : "subdrop"}
                                                    onClick={() => {
                                                        handleMenu('staff-master')
                                                    }} >
                                                    Staff Master
                                                    <span className="menu-arrow inside-submenu"></span></Link>
                                                {openMenus['staff-master'] &&
                                                    <ul>
                                                        <li><Link to={route.department}> Department </Link></li>
                                                        <li><Link to={route.role}>Roles</Link></li>
                                                        <li><Link to={route.group}>Group </Link></li>
                                                        <li><Link to="#">Permissions</Link></li>
                                                        <li><Link to={route.workShift}>Working Shift</Link></li>
                                                        <li><Link to={route.jobType}>Job Type</Link></li>
                                                    </ul>
                                                }
                                            </li>
                                            <li className="submenu submenu-two subdrop">
                                                <Link to="#"
                                                    className={openMenus['product-master'] ? "subdrop active" : "subdrop"}
                                                    onClick={() => {
                                                        handleMenu('product-master')
                                                    }} >
                                                    Product Master
                                                    <span className="menu-arrow inside-submenu"></span></Link>
                                                {openMenus['product-master'] &&
                                                    <ul>
                                                        <li><Link to={route.companySettings}>Category</Link></li>
                                                        <li><Link to={route.localization}>Sub Category</Link></li>
                                                        <li><Link to={route.prefixes}>Tax</Link></li>
                                                        <li><Link to={route.preference}>Unit</Link></li>
                                                    </ul>
                                                }
                                            </li>
                                            <li className="submenu submenu-two subdrop">
                                                <Link to="#"
                                                    className={openMenus['service-master'] ? "subdrop active" : "subdrop"}
                                                    onClick={() => {
                                                        handleMenu('service-master')
                                                    }} >
                                                    Services Master
                                                    <span className="menu-arrow inside-submenu"></span></Link>
                                                {openMenus['service-master'] &&
                                                    <ul>
                                                        <li><Link to={route.companySettings}>Category</Link></li>
                                                        <li><Link to={route.localization}>Sub Category</Link></li>
                                                        <li><Link to={route.prefixes}>Tax</Link></li>
                                                        <li><Link to={route.preference}>Unit</Link></li>
                                                    </ul>
                                                }
                                            </li>
                                            <li className="submenu submenu-two subdrop">
                                                <Link to="#"
                                                    className={openMenus['sales-master'] ? "subdrop active" : "subdrop"}
                                                    onClick={() => {
                                                        handleMenu('sales-master')
                                                    }} >
                                                    Sales Master
                                                    <span className="menu-arrow inside-submenu"></span></Link>
                                                {openMenus['sales-master'] &&
                                                    <ul>
                                                        <li><Link to={route.source}>Source</Link></li>
                                                        <li><Link to={route.reasons}>Reasons</Link></li>
                                                        <li><Link to={route.industry}>Industry</Link></li>
                                                        <li><Link to={route.stage}>Stage</Link></li>

                                                    </ul>
                                                }
                                            </li>
                                            <li className="submenu submenu-two subdrop">
                                                <Link to="#"
                                                    className={openMenus['task-master'] ? "subdrop active" : "subdrop"}
                                                    onClick={() => {
                                                        handleMenu('task-master')
                                                    }} >
                                                    Task Master
                                                    <span className="menu-arrow inside-submenu"></span></Link>
                                                {openMenus['task-master'] &&
                                                    <ul>
                                                        <li><Link to={route.taskCategory}>Category</Link></li>
                                                        <li><Link to={route.taskSubCategory}>Sub Category</Link></li>
                                                    </ul>
                                                }
                                            </li>
                                            <li className="submenu submenu-two subdrop">
                                                <Link to="#"
                                                    className={openMenus['customer-master'] ? "subdrop active" : "subdrop"}
                                                    onClick={() => {
                                                        handleMenu('customer-master')
                                                    }} >
                                                    Customer Master
                                                    <span className="menu-arrow inside-submenu"></span></Link>
                                                {openMenus['customer-master'] &&
                                                    <ul>
                                                        <li><Link to={route.storage}>Group</Link></li>
                                                        <li><Link to={route.banIpAddrress}>Flag</Link></li>

                                                    </ul>
                                                }
                                            </li>
                                            <li className="submenu submenu-two subdrop">
                                                <Link to="#"
                                                    className={openMenus['finance-master'] ? "subdrop active" : "subdrop"}
                                                    onClick={() => {
                                                        handleMenu('finance-master')
                                                    }} >
                                                    Finance Master
                                                    <span className="menu-arrow inside-submenu"></span></Link>
                                                {openMenus['finance-master'] &&
                                                    <ul>
                                                        <li><Link to={route.sources}>GST</Link></li>
                                                    </ul>
                                                }
                                            </li>
                                            <li className="submenu submenu-two subdrop">
                                                <Link to="#"
                                                    className={openMenus['subMenu8'] ? "subdrop active" : "subdrop"}
                                                    onClick={() => {
                                                        handleMenu('subMenu8')
                                                    }} >
                                                    Support Master
                                                    <span className="menu-arrow inside-submenu"></span></Link>
                                                {openMenus['subMenu8'] &&
                                                    <ul>
                                                        <li><Link to={route.companySettings}>Category</Link></li>
                                                        <li><Link to={route.localization}>Sub Category</Link></li>
                                                        <li><Link to={route.localization}>FAQ Category</Link></li>
                                                        <li><Link to={route.localization}>FAQ Sub Category</Link></li>
                                                    </ul>
                                                }
                                            </li>
                                            <li className="submenu submenu-two subdrop">
                                                <Link to="#"
                                                    className={openMenus['marketing-master'] ? "subdrop active" : "subdrop"}
                                                    onClick={() => {
                                                        handleMenu('marketing-master')
                                                    }} >
                                                    Marketing Master
                                                    <span className="menu-arrow inside-submenu"></span></Link>
                                                {openMenus['marketing-master'] &&
                                                    <ul>
                                                        <li><Link to={route.sources}>Campaign Type</Link></li>
                                                        <li><Link to={route.lostReason}>UTM Source</Link></li>
                                                        <li><Link to={route.contactStage}>Vendor Category</Link></li>
                                                    </ul>
                                                }
                                            </li>
                                            <li className="submenu submenu-two subdrop">
                                                <Link to="#"
                                                    className={openMenus['expense-master'] ? "subdrop active" : "subdrop"}
                                                    onClick={() => {
                                                        handleMenu('expense-master')
                                                    }} >
                                                    Expense Master
                                                    <span className="menu-arrow inside-submenu"></span></Link>
                                                {openMenus['expense-master'] &&
                                                    <ul>
                                                        <li><Link to={route.companySettings}>Category</Link></li>
                                                        <li><Link to={route.localization}>Sub Category</Link></li>
                                                    </ul>
                                                }
                                            </li>
                                        </ul>
                                    }
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



