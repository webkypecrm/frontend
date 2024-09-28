import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import DataTable from "../../components/Table/DataTable"
import moment from 'moment';
import DeleteData from '../DeleteData/DeleteData';
import { toast } from "react-toastify";
import axios from "axios";
import LeadPreview from './Lead Preview/LeadPreview';
import AssignTo from './AssignTo';
import ChangeStage from './ChangeStage';
import MultipleAssignTo from './MultipleAssignTo';


const ManageLeadList = ({
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
    const [stars, setStars] = useState({});
    const [leadId, setLeadId] = useState(null)
    const apiUrl = import.meta.env.VITE_API_URL;
    const Token = localStorage.getItem('token') || '';
    const [leadPreview, setLeadPreview] = useState(false);
    const [leadDetails, setLeadDetails] = useState({});
    const [leadForAssign, setLeadForAssign] = useState({});
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);


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
                await axios.delete(`${apiUrl}/lead/delete-lead/${leadId}`, {
                    headers: {
                        Authorization: `Bearer ${Token}`
                    }
                })
                fetchLeadData()
                toast.success('Lead deleted successfully!')
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
                    await axios.get(`${apiUrl}/lead/clone-lead/${leadId}`, {
                        headers: {
                            Authorization: `Bearer ${Token}`
                        }
                    })
                    fetchLeadData()
                    toast.success('Lead cloned successfully!')
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

    let columns = [
        {
            title: () => {
                return <div
                    data-bs-toggle="modal"
                    data-bs-target="#multiple_assigned_to"
                    style={{ cursor: 'pointer' }}
                >
                    {selectedRowKeys.length > 0 ? "🔂" : ''}
                </div>
            },
            dataIndex: "",
            render: (text, record, index) => (
                <div
                    className={`set-star rating-select ${stars[index] ? "filled" : ""}`}
                    onClick={() => handleStarToggle(index)}
                >
                    <i className="fa fa-star"></i>
                </div>
            ),

        },
        {
            title: "Lead Name",
            dataIndex: "leadId",
            key: "leadId",
            // sorter: (a, b) =>
            //     a.lead_name.length - b.lead_name.length,
            render: (text, record) => {
                return <div className="table-avatar d-flex align-items-center">
                    <span className="company-img menu-list-icon bg-violet ">
                        <i className="ti ti-user-up" />
                    </span>
                    <ul>
                        <li>{record.leadName}</li>
                    </ul>
                </div>
            }
        },
        {
            title: "Lead Email",
            dataIndex: "leadId",
            key: "leadId",
            // sorter: (a, b) =>
            //     a.lead_name.length - b.lead_name.length,
            render: (text, record) => {
                return <div className="table-avatar d-flex align-items-center">
                    <span className="company-img menu-list-icon bg-warning ">
                        <i className="ti ti-mail" />
                    </span>
                    <ul>
                        <li>{record.leadEmail}</li>
                    </ul>
                </div>
            }
        },
        {
            title: "Lead Mobile1",
            dataIndex: "mobile1",
            key: "mobile1",
            // sorter: (a, b) =>
            //     a.lead_name.length - b.lead_name.length,
            render: (text, record) => {
                return <div className="table-avatar d-flex align-items-center">
                    <span className="company-img menu-list-icon bg-green ">
                        <i className="ti ti-phone" />
                    </span>
                    <ul>
                        <li>{record.leadMobile1}</li>
                    </ul>
                </div>
            }
        },
        {
            title: "Lead Mobile2",
            dataIndex: "mobile2",
            key: "mobile2",
            // sorter: (a, b) =>
            //     a.lead_name.length - b.lead_name.length,
            render: (text, record) => {
                return <div className="table-avatar d-flex align-items-center">
                    <span className="company-img menu-list-icon bg-green ">
                        <i className="ti ti-phone" />
                    </span>
                    <ul>
                        <li>{record.leadMobile2}</li>
                    </ul>
                </div>
            }
        },
        {
            title: "Lead Mobile3",
            dataIndex: "mobile3",
            key: "mobile3",
            // sorter: (a, b) =>
            //     a.lead_name.length - b.lead_name.length,
            render: (text, record) => {
                return <div className="table-avatar d-flex align-items-center">
                    <span className="company-img menu-list-icon bg-green ">
                        <i className="ti ti-phone" />
                    </span>
                    <ul>
                        <li>{record.leadMobile3}</li>
                    </ul>
                </div>
            }
        },
        {
            title: "Country",
            dataIndex: "country",
            key: "country",
            // sorter: (a, b) =>
            //     a.lead_name.length - b.lead_name.length,
            render: (text, record) => {
                return <div className="table-avatar d-flex align-items-center">
                    <span className="company-img menu-list-icon ">
                        <i className="ti ti-flag" />
                    </span>
                    <ul>
                        <li>{record.country}</li>
                    </ul>
                </div>
            }
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
            title: "Value",
            dataIndex: "value",
            key: "value",
            // sorter: (a, b) =>
            //     a.company_name.length - b.company_name.length,
            render: (text) => {
                return <span>₹ {text}</span>
            }

        },
        {
            title: "Assign To",
            dataIndex: "assignedTo",
            key: "assignedTo",
            // sorter: (a, b) =>
            //     a.company_name.length - b.company_name.length,
            render: (text, record) => {
                return <div
                    className="table-avatar d-flex align-items-center"
                    data-bs-toggle="modal"
                    data-bs-target="#assigned_to"
                    style={{ courser: 'pointer' }}
                    onClick={() => { setLeadForAssign(record) }}
                >
                    <div className="grid-footer d-flex justify-content-between">
                        <div className="users-group">
                            <ul>
                                <li>
                                    <Link to="#">
                                        {record.staff.profilePic ?
                                            <span className="menu-list-icon ">
                                                <img src={record.staff.profilePic} />
                                            </span>
                                            :
                                            <span className="menu-list-icon ">
                                                <i className="ion-person" />
                                            </span>
                                        }
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link to="#" style={{ marginLeft: '2px' }} >
                        {record.assignedTo}
                    </Link>
                </div>
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
            title: "Updates",
            dataIndex: "leadId",
            key: 'leadId',
            render: (text, record, index) => (
                <div className="social-links d-flex align-items-center" key={index}>
                    <li>
                        <Link to="#" onClick={() => {
                            setLeadPreview((prev) => !prev)
                            setLeadDetails((prev) => ({ ...record }))

                        }}>
                            <i className=" ti ti-eye me-2"></i>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#create_call"
                            onClick={() => {
                                setLeadDetails((prev) => ({ ...record }))
                            }}
                        >
                            <i className="ti ti-phone-check me-2"></i>
                        </Link>
                    </li>
                    <li>
                        <Link to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#add_notes"
                            onClick={() => {
                                setLeadDetails((prev) => ({ ...record }))
                            }}
                        >
                            <i className="ti ti-calendar-month me-2"></i>
                        </Link>
                    </li>
                    <li>
                        <Link to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#add_comments"
                            onClick={() => {
                                setLeadDetails((prev) => ({ ...record }))
                            }}
                        >
                            <i className="ti ti-note me-2"></i>
                        </Link>
                    </li>
                    <li>
                        <Link to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#add_proposal"
                            onClick={() => {
                                setLeadDetails((prev) => ({ ...record }))
                            }}
                        >
                            <i className="ti ti-mail-check me-2"></i>
                        </Link>
                    </li>
                    <li>
                        <Link to="#" onClick={() => { setLeadPreview((prev) => !prev) }}>
                            <i className="ti ti-list-check me-2"></i>
                        </Link>
                    </li>
                </div>
            ),
            // sorter: (a, b) => a.owner.length - b.owner.length,
        },
        {
            title: "Stage",
            dataIndex: "stage",
            key: 'stage',
            render: (text, record) => (
                <div
                    data-bs-toggle="modal"
                    data-bs-target="#stage_update"
                    style={{ cursor: 'pointer' }}
                    onClick={() => { setLeadForAssign(record) }}
                >
                    {text === "New Lead" && (
                        <span className="badge badge-pill badge-status bg-secondary">
                            {text}
                        </span>
                    )}
                    {text === "Proposal" && (
                        <span className="badge badge-pill badge-status bg-info">
                            {text}
                        </span>
                    )}
                    {text === "Demo" && (
                        <span className="badge badge-pill badge-status bg-info">
                            {text}
                        </span>
                    )}
                    {text === "Followup" && (
                        <span className="badge badge-pill badge-status bg-info">
                            {text}
                        </span>
                    )}
                    {text === "Dead" && (
                        <span className="badge badge-pill badge-status bg-danger">
                            {text}
                        </span>
                    )}
                    {text === "Junk" && (
                        <span className="badge badge-pill badge-status bg-danger">
                            {text}
                        </span>
                    )}
                    {text === "Not Connected" && (
                        <span className="badge badge-pill badge-status bg-danger">
                            {text}
                        </span>
                    )}
                    {text === "Connected" && (
                        <span className="badge badge-pill badge-status bg-success">
                            {text}
                        </span>
                    )}
                    {text === "Converted" && (
                        <span className="badge badge-pill badge-status bg-success">
                            {text}
                        </span>
                    )}
                </div>
            ),
            sorter: true,
        },
        {
            title: "Action",
            dataIndex: "action",
            render: (text, record) => (
                <div className="dropdown table-action">
                    <Link
                        to="#"
                        className="action-icon "
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <i className="fa fa-ellipsis-v" />
                    </Link>
                    <div className="dropdown-menu dropdown-menu-right">
                        <Link
                            className="dropdown-item"
                            to="#"
                            onClick={() => {
                                // togglePopupTwo(true),
                                togglePopupTwo(true),
                                    onLeadDetails(record)
                            }}
                        >
                            <i className="ti ti-edit text-blue" /> Edit
                        </Link>

                        <Link
                            className="dropdown-item"
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_contact"
                            onClick={() => setLeadId(record.leadId)}
                        >
                            <i className="ti ti-trash text-danger"></i> Delete
                        </Link>

                        <Link
                            className="dropdown-item"
                            to="#"
                            onClick={() => handleClone(record.leadId)}
                        >
                            <i className="ti ti-clipboard-copy text-blue-light" /> clone
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
            <DeleteData title="Lead" onDeleteHandler={handleDelete} />

            <LeadPreview
                leadPreview={leadPreview}
                setLeadPreview={setLeadPreview}
                leadDetails={leadDetails}
                setLeadDetails={setLeadDetails}
            />

            <AssignTo
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
            />
        </>
    )
}

export default ManageLeadList