import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import DataTable from "../../components/Table/DataTable"
import moment from 'moment';
import DeleteData from '../DeleteData/DeleteData';
import { toast } from "react-toastify";
import axios from "axios";
// import LeadPreview from './Lead Preview/LeadPreview';
// import AssignTo from './AssignTo';
// import ChangeStage from './ChangeStage';
// import MultipleAssignTo from './MultipleAssignTo';
import { useNavigate } from "react-router-dom"
import { all_routes } from '../../pages/Router/all_routes';
import { render } from '@testing-library/react';


const ManageCustomerList = ({
    data,
    onLeadDetails,
    togglePopup,
    fetchLeadData,
    setEditCompany,
    setCompanyDetails,
    manageColumns,
    pageSize,
    totalPages,
}) => {
    const navigate = useNavigate();
    const [stars, setStars] = useState({});
    const [leadId, setLeadId] = useState(null)
    const apiUrl = import.meta.env.VITE_API_URL;
    const Token = localStorage.getItem('token') || '';
    const [leadPreview, setLeadPreview] = useState(false);
    const [leadDetails, setLeadDetails] = useState({});
    const [leadForAssign, setLeadForAssign] = useState({});
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    const route = all_routes;


    const togglePopupTwo = () => {
        togglePopup((prev) => !prev);
    };
    const togglePopupThree = () => {
        setEditCompany((prev) => !prev)
    }
    const handleStarToggle = (index) => {
        setStars((prevStars) => ({
            ...prevStars,
            [index]: !prevStars[index],
        }));
    };
    const handleDelete = async () => {
        if (leadId) {
            try {
                await axios.delete(`${apiUrl}/customer/delete-customer/${leadId}`, {
                    headers: {
                        Authorization: `Bearer ${Token}`
                    }
                })
                fetchLeadData()
                toast.success('Customer deleted successfully!')
                setLeadId(null)
            } catch (error) {
                toast.error(error.message)
            }
        }
    }
    const handleClone = async (leadId) => {
        try {
            if (leadId) {
                try {
                    await axios.get(`${apiUrl}/customer/clone-customer/${leadId}`, {
                        headers: {
                            Authorization: `Bearer ${Token}`
                        }
                    })
                    fetchLeadData()
                    toast.success('Customer cloned successfully!')
                } catch (error) {
                    toast.error(error.message)
                }
            }
        } catch (error) {

        }
    }
    const handleSelectedRowKeysChange = (newSelectedRowKeys) => {
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const handleFetchData = (page) => {
        fetchLeadData(page);
    }

    const columns = [
        {
            title: "",
            dataIndex: "",
            key: "customerId",
            render: (text, record, index) => (
                <div
                    className={`set-star rating-select ${stars[index] ? "filled" : ""}`}
                    onClick={() => handleStarToggle(index)}
                    key={index}
                >
                    <i className="fa fa-star"></i>
                </div>
            ),
        },
        {
            title: "Customer Name",
            dataIndex: "customerName",
            key: "customerId",
            render: (text, record, index) => (
                <div className="table-avatar d-flex align-items-center" key={index}>
                    {console.log("record =>", record)}
                    {record.customerPic ?
                        <Link to={`/sales/leads-details/${record?.convertedLeadId}`} className="avatar">
                            <img
                                className="avatar-img"
                                src={record?.customerPicUrl}
                            // alt={text}
                            />
                        </Link>
                        :
                        <Link className="company-img">
                            <span className="menu-list-icon ">
                                <i className="ti ti-user" />
                            </span>
                        </Link>
                    }
                    <Link
                       to={`/sales/leads-details/${record?.convertedLeadId}`}
                        className="profile-split d-flex flex-column"
                    >
                        {record.customerName} <span>Id: {record.customerId}</span>
                    </Link>
                </div>
            ),
            sorter: (a, b) => a.phone.length - b.phone.length,
        },
        {
            title: "Customer Mobile1",
            dataIndex: "customerMobile1",
            key: "customerMobile1",
            sorter: (a, b) => a.phone.length - b.phone.length,
        },
        {
            title: "Customer Mobile2",
            dataIndex: "customerMobile2",
            key: "customerMobile2",
            sorter: (a, b) => a.phone.length - b.phone.length,
        },
        {
            title: "Customer Mobile3",
            dataIndex: "customerMobile3",
            key: "customerMobile3",
            sorter: (a, b) => a.phone.length - b.phone.length,
        },
        {
            title: "Customer Email",
            dataIndex: "customerEmail",
            key: "customerId",
            sorter: (a, b) => a.email.length - b.email.length,
        },


        {
            title: "Country",
            dataIndex: "country",
            sorter: (a, b) =>
                a.location.length - b.location.length,
        },
        {
            title: "State",
            dataIndex: "state",
            render: (text, record) => <div>
                {record?.state?.name}
            </div>,
            sorter: (a, b) =>
                a.location.length - b.location.length,
        },
        {
            title: "City",
            dataIndex: "city",
            render: (text, record) => <div>
                {record?.city?.name}
            </div>,
            sorter: (a, b) =>
                a.location.length - b.location.length,
        },
        {
            title: "Owner",
            dataIndex: "owner",
            key: "customerId",
            render: (text, record, index) => (
                <div className="table-avatar d-flex align-items-center" key={index}>
                    {record.ownerImg ?
                        <Link to={route.customerDetails} className="avatar">
                            <img
                                className="avatar-img"
                                src={record?.ownerImg}
                            // alt={text}
                            />
                        </Link>
                        :
                        <i className="ti ti-user" />
                    }
                    <Link
                        to={route.customerDetails}
                        className="profile-split d-flex flex-column"
                    >
                        {record.owner}
                    </Link>
                </div>
            ),
            sorter: (a, b) => a.owner.length - b.owner.length,
        },
        {
            title: "Company Name",
            dataIndex: "leadId",
            key: "leadId",
            render: (text, record) => (
                <>
                    {record.companyName ?
                        <div className="table-avatar d-flex align-items-center">
                            <Link to="#" className="company-img">
                                {record.companyImg ?
                                    <img src={record.companyImg} /> :
                                    <span className="menu-list-icon ">
                                        <i className="ti ti-building-community" />
                                    </span>
                                }
                            </Link>
                            <Link
                                to="#"
                                className="profile-split d-flex flex-column"
                                onClick={() => {
                                    togglePopupThree(true)
                                    if (record?.company) {
                                        setCompanyDetails(record.company)
                                    }
                                }}
                            >
                                {record.companyName}
                            </Link>
                        </div>
                        :
                        <div className="table-avatar d-flex align-items-center">
                            <Link className="company-img">
                                <span className="menu-list-icon ">
                                    <i className="ti ti-user" />
                                </span>
                            </Link>
                            <Link
                                to="#"
                                className="profile-split d-flex flex-column"
                            >
                                Independent
                            </Link>
                        </div>
                    }
                </>
            ),
        },
        {
            title: "Company Email",
            dataIndex: "leadId",
            key: "leadId",
            render: (text, record) => (
                <>

                    <div className="table-avatar d-flex align-items-center">
                        <Link
                            to="#"
                            className="profile-split d-flex flex-column"
                            onClick={() => {
                                togglePopupThree(true)
                                if (record?.company) {
                                    setCompanyDetails(record.company)
                                }
                            }}
                        >
                            <span>{record.companyEmail}</span>
                        </Link>
                    </div>
                </>
            ),
        },
        {
            title: "Company Location",
            key: "customerId",
            render: (text, record) => (
                <div className="table-avatar d-flex align-items-center">
                    <Link
                        to="#"
                        className="profile-split d-flex flex-column"
                        onClick={() => {
                            togglePopupThree(true)
                            if (record?.company) {
                                setCompanyDetails(record.company)
                            }
                        }}
                    >
                        {record.companyCountry && <span>{record.companyCountry}, {record.companyCity}</span>}
                    </Link>
                </div>
            ),
        },
        {
            title: "Company Mobile",
            dataIndex: "leadId",
            key: "leadId",
            render: (text, record) => (
                <div className="table-avatar d-flex align-items-center">
                    <Link
                        to="#"
                        className="profile-split d-flex flex-column"
                        onClick={() => {
                            togglePopupThree(true)
                            if (record?.company) {
                                setCompanyDetails(record.company)
                            }
                        }}
                    >
                        <span>{record?.company?.companyMobile1}</span>
                    </Link>
                </div>
            ),
        },
        {
            title: "Source",
            dataIndex: "source",
            key: "source",
            // sorter: (a, b) =>
            //     a.company_name.length - b.company_name.length,

        },
        {
            title: "Industry",
            dataIndex: "industry",
            key: "industry",
            // sorter: (a, b) =>
            //     a.company_name.length - b.company_name.length,

        },
        {
            title: "Tags",
            dataIndex: "tags",
            key: "tags",
            // sorter: (a, b) =>
            //     a.company_name.length - b.company_name.length,
            render: (text, record) => {
                return <ul>
                    {text.map((val, index) => <li key={index} >
                        <p className="badge badge-tag badge-purple-light">
                            {val}
                        </p>
                    </li>)}
                </ul>
            }
        },
        {
            title: "Created Date",
            dataIndex: "createdAt",
            key: "createdAt",
            // sorter: (a, b) =>
            //     a.company_name.length - b.company_name.length,
            render: (text) => {
                return moment(text).format("DD MMM YYYY, hh:mm a")
            }
        },
        {
            title: "Rating",
            dataIndex: "rating",
            render: (text, record, index) => (
                <div className="set-star" key={index}>
                    <i className="fa fa-star filled me-2" />
                    {text}
                </div>
            ),
            sorter: (a, b) => a.rating.length - b.rating.length,
        },
        {
            title: "Contact",
            dataIndex: "",
            key: "customerId",
            render: (index) => (
                <div className="social-links d-flex align-items-center" key={index}>
                    <li>
                        <Link to="#">
                            <i className="ti ti-mail me-2"></i>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <i className="ti ti-phone-check me-2"></i>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <i className="ti ti-message-circle-share me-2"></i>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <i className="ti ti-brand-skype me-2"></i>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <i className="ti ti-brand-facebook "></i>
                        </Link>
                    </li>
                </div>
            ),
            sorter: (a, b) => a.owner.length - b.owner.length,
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "customerId",
            render: (text, index) => (
                <div key={index}>
                    {text === "active" && (
                        <span className="badge badge-pill badge-status bg-success">{text}</span>
                    )}
                    {text === "inactive" && (
                        <span className="badge badge-pill badge-status bg-danger">{text}</span>
                    )}
                </div>),
            sorter: (a, b) => a.owner.length - b.owner.length,

        },
        {
            title: "Action",
            dataIndex: "action",
            key: "customerId",
            render: (index) => (
                <div className="dropdown table-action" key={index}>
                    <Link
                        to="#"
                        className="action-icon"
                        data-bs-toggle="dropdown"
                        aria-expanded="true"
                    >
                        <i className="fa fa-ellipsis-v"></i>
                    </Link>
                    <div
                        className="dropdown-menu dropdown-menu-right"
                        style={{
                            position: "absolute",
                            inset: "0px auto auto 0px",
                            margin: "0px",
                            transform: "translate3d(-99.3333px, 35.3333px, 0px)",
                        }}
                        data-popper-placement="bottom-start"
                    >
                        <Link
                            className="dropdown-item edit-popup"
                            to="#"
                            onClick={() =>
                                setActivityToggleTwo(prev => !prev)
                            }
                        >
                            <i className="ti ti-edit text-blue"></i> Edit
                        </Link>
                        <Link
                            className="dropdown-item"
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_contact"
                        >
                            <i className="ti ti-trash text-danger"></i> Delete
                        </Link>
                    </div>
                </div>
            ),
        },
    ];

    const modifiedColumns = columns.filter((column, index) => {
        if (index == 0) {
            return column
        }

        for (const ele in manageColumns) {
            if (column.title == ele && manageColumns[ele] == true) {
                return column
            }
        }
    })

    // console.log('data in LeadList =>', data)

    return (
        <>
            <div className="table-responsive custom-table">
                <DataTable
                    dataSource={data}
                    columns={modifiedColumns}
                    onSelectionChange={handleSelectedRowKeysChange}
                    pageSize={pageSize}
                    totalPages={totalPages}
                    onFetchRecord={handleFetchData}
                />
            </div>
            <div className="row align-items-center">
                <div className="col-md-6">
                    <div className="datatable-length" />
                </div>
                <div className="col-md-6">
                    <div className="datatable-paginate" />
                </div>
            </div>
            <DeleteData title="Customer" onDeleteHandler={handleDelete} />

            {/* <LeadPreview
                leadPreview={leadPreview}
                setLeadPreview={setLeadPreview}
                leadDetails={leadDetails} 
                setLeadDetails={setLeadDetails}
            /> */}

            {/* <AssignTo
                leadForAssign={leadForAssign}
                fetchLeadData={fetchLeadData}
            />

            <ChangeStage
                leadForAssign={leadForAssign}
                fetchLeadData={fetchLeadData}
            />

            <MultipleAssignTo
                selectedRowKeys={selectedRowKeys}
                fetchLeadData={fetchLeadData}
                setSelectedRowKeys={setSelectedRowKeys}
            /> */}


        </>
    )
}

export default ManageCustomerList