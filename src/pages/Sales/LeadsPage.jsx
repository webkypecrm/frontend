import { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
// import DateRangePicker from "react-bootstrap-daterangepicker";
// import "bootstrap-daterangepicker/daterangepicker.css";
import {
    countryoptions1,
    languageOptions,
    optiondeals,
    optionindustry,
    options,
    optionschoose,
    optionsource,
    optionssymbol,
} from "../../selectOption/selectOption";
import DataTable from "../../components/Table/DataTable"
import ImageWithBasePath from "../../components/ImageWithBasePath";
import { all_routes } from "../Router/all_routes";
import { leadsData } from "../../data/leadsData"


const LeadsPage = () => {

    const route = all_routes;
    const [adduser, setAdduser] = useState(false);
    const [addcompany, setAddCompany] = useState(false);
    const [modalTitle, setModalTitle] = useState("Add New Lead");
    const data = leadsData;

    const togglePopup = (isEditing) => {
        setModalTitle(isEditing ? "Edit Lead" : "Add New Lead");
        setAdduser(!adduser);
    };
    const addcompanyPopup = () => {
        setAddCompany(!addcompany);
    };

    const [stars, setStars] = useState({});

    const handleStarToggle = (index) => {
        setStars((prevStars) => ({
            ...prevStars,
            [index]: !prevStars[index],
        }));
    };
    const columns = [
        {
            title: "",
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
            dataIndex: "lead_name",
            key: "lead_name",
            // sorter: (a: TableData, b: TableData) =>
            //   a.lead_name.length - b.lead_name.length,
        },

        {
            title: "Company Name",
            render: (text, record) => (
                <div className="table-avatar d-flex align-items-center">
                    <Link to="/crm/company-details" className="company-img">
                        <ImageWithBasePath src={record.image} alt="UserImage" />
                    </Link>
                    <Link
                        to="/crm/company-details"
                        className="profile-split d-flex flex-column"
                    >
                        {record.company_name}
                        <span>{text.company_address}</span>
                    </Link>
                </div>
            ),
        },
        {
            title: "Phone",
            dataIndex: "phone",
            key: "phone",
            // sorter: (a: TableData, b: TableData) =>
            //   a.company_name.length - b.company_name.length,
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
            // sorter: (a: TableData, b: TableData) =>
            //   a.company_name.length - b.company_name.length,
        },
        {
            title: "Lead Status",
            dataIndex: "status",
            render: (text) => (
                <div>
                    {text === "Closed" && (
                        <span className="badge badge-pill badge-status bg-success">
                            {text}
                        </span>
                    )}
                    {text === "Connected" && (
                        <span className="badge badge-pill badge-status bg-warning">
                            {text}
                        </span>
                    )}
                    {text === "Lost" && (
                        <span className="badge badge-pill badge-status bg-danger">
                            {text}
                        </span>
                    )}
                    {text === "Not connected" && (
                        <span className="badge badge-pill badge-status bg-pending">
                            {text}
                        </span>
                    )}
                </div>
            ),
            sorter: true,
        },
        {
            title: "Created Date",
            dataIndex: "created_date",
            key: "created_date",
            // sorter: (a: TableData, b: TableData) =>
            //   a.company_name.length - b.company_name.length,
        },
        {
            title: "Lead Owner",
            dataIndex: "owner",
            key: "owner",
            // sorter: (a: TableData, b: TableData) =>
            //   a.company_name.length - b.company_name.length,
        },
        {
            title: "Action",
            dataIndex: "action",
            render: () => (
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
                            onClick={() => togglePopup(true)}
                        >
                            <i className="ti ti-edit text-blue" /> Edit
                        </Link>

                        <Link
                            className="dropdown-item"
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_contact"
                        >
                            <i className="ti ti-trash text-danger"></i> Delete
                        </Link>

                        <Link className="dropdown-item" to="#">
                            <i className="ti ti-clipboard-copy text-blue-light" /> clone
                        </Link>
                    </div>
                </div>
            ),
        },
    ];
    // const initialSettings = {
    //     endDate: new Date("2020-08-11T12:30:00.000Z"),
    //     ranges: {
    //         "Last 30 Days": [
    //             new Date("2020-07-12T04:57:17.076Z"),
    //             new Date("2020-08-10T04:57:17.076Z"),
    //         ],
    //         "Last 7 Days": [
    //             new Date("2020-08-04T04:57:17.076Z"),
    //             new Date("2020-08-10T04:57:17.076Z"),
    //         ],
    //         "Last Month": [
    //             new Date("2020-06-30T18:30:00.000Z"),
    //             new Date("2020-07-31T18:29:59.999Z"),
    //         ],
    //         "This Month": [
    //             new Date("2020-07-31T18:30:00.000Z"),
    //             new Date("2020-08-31T18:29:59.999Z"),
    //         ],
    //         Today: [
    //             new Date("2020-08-10T04:57:17.076Z"),
    //             new Date("2020-08-10T04:57:17.076Z"),
    //         ],
    //         Yesterday: [
    //             new Date("2020-08-09T04:57:17.076Z"),
    //             new Date("2020-08-09T04:57:17.076Z"),
    //         ],
    //     },
    //     startDate: new Date("2020-08-04T04:57:17.076Z"), // Set "Last 7 Days" as default
    //     timePicker: false,
    // };
    const [newContents, setNewContents] = useState([0]);

    const addNewContent = () => {
        setNewContents([...newContents, newContents.length]);
    };

    return <>
        <>
            {/* Page Wrapper */}
            <div className="page-wrapper">
                <div className="content">
                    <div className="row">
                        <div className="col-md-12">
                            {/* Page Header */}
                            <div className="page-header">
                                <div className="row align-items-center">
                                    <div className="col-8">
                                        <h4 className="page-title">
                                            Leads<span className="count-title">123</span>
                                        </h4>
                                    </div>
                                    <div className="col-4 text-end">
                                        <div className="head-icons">
                                            {/* <CollapseHeader /> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* /Page Header */}
                            <div className="card main-card">
                                <div className="card-body">
                                    {/* Search */}
                                    <div className="search-section">
                                        <div className="row">
                                            <div className="col-md-5 col-sm-4">
                                                <div className="form-wrap icon-form">
                                                    <span className="form-icon">
                                                        <i className="ti ti-search" />
                                                    </span>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Search User"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-7 col-sm-8">
                                                <div className="export-list text-sm-end">
                                                    <ul>
                                                        <li>
                                                            <div className="export-dropdwon">
                                                                <Link
                                                                    to="#"
                                                                    className="dropdown-toggle"
                                                                    data-bs-toggle="dropdown"
                                                                >
                                                                    <i className="ti ti-package-export" />
                                                                    Export
                                                                </Link>
                                                                <div className="dropdown-menu  dropdown-menu-end">
                                                                    <ul>
                                                                        <li>
                                                                            <Link to="#">
                                                                                <i className="ti ti-file-type-pdf text-danger" />
                                                                                Export as PDF
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link to="#">
                                                                                <i className="ti ti-file-type-xls text-green" />
                                                                                Export as Excel{" "}
                                                                            </Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                to="#"
                                                                className="btn btn-primary add-popup"
                                                                onClick={() => togglePopup(false)}
                                                            >
                                                                <i className="ti ti-square-rounded-plus" />
                                                                Add Leads
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Search */}
                                    {/* Filter */}
                                    <div className="filter-section filter-flex">
                                        <div className="sortby-list">
                                            <ul>
                                                <li>
                                                    <div className="sort-dropdown drop-down">
                                                        <Link
                                                            to="#"
                                                            className="dropdown-toggle"
                                                            data-bs-toggle="dropdown"
                                                        >
                                                            <i className="ti ti-sort-ascending-2" />
                                                            Sort{" "}
                                                        </Link>
                                                        <div className="dropdown-menu  dropdown-menu-start">
                                                            <ul>
                                                                <li>
                                                                    <Link to="#">
                                                                        <i className="ti ti-circle-chevron-right" />
                                                                        Ascending
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="#">
                                                                        <i className="ti ti-circle-chevron-right" />
                                                                        Descending
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="#">
                                                                        <i className="ti ti-circle-chevron-right" />
                                                                        Recently Viewed
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="#">
                                                                        <i className="ti ti-circle-chevron-right" />
                                                                        Recently Added
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="form-wrap icon-form">
                                                        <span className="form-icon">
                                                            <i className="ti ti-calendar" />
                                                        </span>
                                                        {/* <DateRangePicker
                                                            initialSettings={initialSettings}
                                                        >
                                                            <input
                                                                className="form-control bookingrange"
                                                                type="text"
                                                            />
                                                        </DateRangePicker> */}
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="filter-list">
                                            <ul>
                                                <li>
                                                    <div className="manage-dropdwon">
                                                        <Link
                                                            to="#"
                                                            className="btn btn-purple-light"
                                                            data-bs-toggle="dropdown"
                                                            data-bs-auto-close="false"
                                                        >
                                                            <i className="ti ti-columns-3" />
                                                            Manage Columns
                                                        </Link>
                                                        <div className="dropdown-menu  dropdown-menu-md-end">
                                                            <h4>Want to manage datatables?</h4>
                                                            <p>
                                                                Please drag and drop your column to reorder
                                                                your table and enable see option as you want.
                                                            </p>
                                                            <ul>
                                                                <li>
                                                                    <p>
                                                                        <i className="ti ti-grip-vertical" />
                                                                        Name
                                                                    </p>
                                                                    <div className="status-toggle">
                                                                        <input
                                                                            type="checkbox"
                                                                            id="col-name"
                                                                            className="check"
                                                                        />
                                                                        <label
                                                                            htmlFor="col-name"
                                                                            className="checktoggle"
                                                                        />
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <p>
                                                                        <i className="ti ti-grip-vertical" />
                                                                        Phone
                                                                    </p>
                                                                    <div className="status-toggle">
                                                                        <input
                                                                            type="checkbox"
                                                                            id="col-phone"
                                                                            className="check"
                                                                        />
                                                                        <label
                                                                            htmlFor="col-phone"
                                                                            className="checktoggle"
                                                                        />
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <p>
                                                                        <i className="ti ti-grip-vertical" />
                                                                        Email
                                                                    </p>
                                                                    <div className="status-toggle">
                                                                        <input
                                                                            type="checkbox"
                                                                            id="col-email"
                                                                            className="check"
                                                                        />
                                                                        <label
                                                                            htmlFor="col-email"
                                                                            className="checktoggle"
                                                                        />
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <p>
                                                                        <i className="ti ti-grip-vertical" />
                                                                        Location
                                                                    </p>
                                                                    <div className="status-toggle">
                                                                        <input
                                                                            type="checkbox"
                                                                            id="col-tag"
                                                                            className="check"
                                                                        />
                                                                        <label
                                                                            htmlFor="col-tag"
                                                                            className="checktoggle"
                                                                        />
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <p>
                                                                        <i className="ti ti-grip-vertical" />
                                                                        Created Date
                                                                    </p>
                                                                    <div className="status-toggle">
                                                                        <input
                                                                            type="checkbox"
                                                                            id="col-loc"
                                                                            className="check"
                                                                        />
                                                                        <label
                                                                            htmlFor="col-loc"
                                                                            className="checktoggle"
                                                                        />
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <p>
                                                                        <i className="ti ti-grip-vertical" />
                                                                        Last Activity
                                                                    </p>
                                                                    <div className="status-toggle">
                                                                        <input
                                                                            type="checkbox"
                                                                            id="col-rate"
                                                                            className="check"
                                                                        />
                                                                        <label
                                                                            htmlFor="col-rate"
                                                                            className="checktoggle"
                                                                        />
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <p>
                                                                        <i className="ti ti-grip-vertical" />
                                                                        Status
                                                                    </p>
                                                                    <div className="status-toggle">
                                                                        <input
                                                                            type="checkbox"
                                                                            id="col-owner"
                                                                            className="check"
                                                                        />
                                                                        <label
                                                                            htmlFor="col-owner"
                                                                            className="checktoggle"
                                                                        />
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <p>
                                                                        <i className="ti ti-grip-vertical" />
                                                                        Action
                                                                    </p>
                                                                    <div className="status-toggle">
                                                                        <input
                                                                            type="checkbox"
                                                                            id="col-contact"
                                                                            className="check"
                                                                            defaultChecked={true}
                                                                        />
                                                                        <label
                                                                            htmlFor="col-contact"
                                                                            className="checktoggle"
                                                                        />
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="form-sorts dropdown">
                                                        <Link
                                                            to="#"
                                                            data-bs-toggle="dropdown"
                                                            data-bs-auto-close="false"
                                                        >
                                                            <i className="ti ti-filter-share" />
                                                            Filter
                                                        </Link>
                                                        <div className="filter-dropdown-menu dropdown-menu  dropdown-menu-md-end">
                                                            <div className="filter-set-view">
                                                                <div className="filter-set-head">
                                                                    <h4>
                                                                        <i className="ti ti-filter-share" />
                                                                        Filter
                                                                    </h4>
                                                                </div>

                                                                <div
                                                                    className="accordion"
                                                                    id="accordionExample"
                                                                >
                                                                    <div className="filter-set-content">
                                                                        <div className="filter-set-content-head">
                                                                            <Link
                                                                                to="#"
                                                                                data-bs-toggle="collapse"
                                                                                data-bs-target="#collapseTwo"
                                                                                aria-expanded="true"
                                                                                aria-controls="collapseTwo"
                                                                            >
                                                                                Country
                                                                            </Link>
                                                                        </div>
                                                                        <div
                                                                            className="filter-set-contents accordion-collapse collapse show"
                                                                            id="collapseTwo"
                                                                            data-bs-parent="#accordionExample"
                                                                        >
                                                                            <div className="filter-content-list">
                                                                                <div className="form-wrap icon-form">
                                                                                    <span className="form-icon">
                                                                                        <i className="ti ti-search" />
                                                                                    </span>
                                                                                    <input
                                                                                        type="text"
                                                                                        className="form-control"
                                                                                        placeholder="Search Country"
                                                                                    />
                                                                                </div>
                                                                                <ul>
                                                                                    <li>
                                                                                        <div className="filter-checks">
                                                                                            <label className="checkboxs">
                                                                                                <input
                                                                                                    type="checkbox"
                                                                                                    defaultChecked
                                                                                                />
                                                                                                <span className="checkmarks" />
                                                                                            </label>
                                                                                        </div>
                                                                                        <div className="collapse-inside-text">
                                                                                            <h5>India</h5>
                                                                                        </div>
                                                                                    </li>
                                                                                    <li>
                                                                                        <div className="filter-checks">
                                                                                            <label className="checkboxs">
                                                                                                <input type="checkbox" />
                                                                                                <span className="checkmarks" />
                                                                                            </label>
                                                                                        </div>
                                                                                        <div className="collapse-inside-text">
                                                                                            <h5>USA</h5>
                                                                                        </div>
                                                                                    </li>
                                                                                    <li>
                                                                                        <div className="filter-checks">
                                                                                            <label className="checkboxs">
                                                                                                <input type="checkbox" />
                                                                                                <span className="checkmarks" />
                                                                                            </label>
                                                                                        </div>
                                                                                        <div className="collapse-inside-text">
                                                                                            <h5>France</h5>
                                                                                        </div>
                                                                                    </li>
                                                                                    <li>
                                                                                        <div className="filter-checks">
                                                                                            <label className="checkboxs">
                                                                                                <input type="checkbox" />
                                                                                                <span className="checkmarks" />
                                                                                            </label>
                                                                                        </div>
                                                                                        <div className="collapse-inside-text">
                                                                                            <h5>United Kingdom</h5>
                                                                                        </div>
                                                                                    </li>
                                                                                    <li>
                                                                                        <div className="filter-checks">
                                                                                            <label className="checkboxs">
                                                                                                <input type="checkbox" />
                                                                                                <span className="checkmarks" />
                                                                                            </label>
                                                                                        </div>
                                                                                        <div className="collapse-inside-text">
                                                                                            <h5>UAE</h5>
                                                                                        </div>
                                                                                    </li>
                                                                                    <li>
                                                                                        <div className="filter-checks">
                                                                                            <label className="checkboxs">
                                                                                                <input type="checkbox" />
                                                                                                <span className="checkmarks" />
                                                                                            </label>
                                                                                        </div>
                                                                                        <div className="collapse-inside-text">
                                                                                            <h5>Italy</h5>
                                                                                        </div>
                                                                                    </li>
                                                                                    <li>
                                                                                        <div className="filter-checks">
                                                                                            <label className="checkboxs">
                                                                                                <input type="checkbox" />
                                                                                                <span className="checkmarks" />
                                                                                            </label>
                                                                                        </div>
                                                                                        <div className="collapse-inside-text">
                                                                                            <h5>Japan</h5>
                                                                                        </div>
                                                                                    </li>
                                                                                    <li>
                                                                                        <div className="filter-checks">
                                                                                            <label className="checkboxs">
                                                                                                <input type="checkbox" />
                                                                                                <span className="checkmarks" />
                                                                                            </label>
                                                                                        </div>
                                                                                        <div className="collapse-inside-text">
                                                                                            <h5>Germany</h5>
                                                                                        </div>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="filter-set-content">
                                                                        <div className="filter-set-content-head">
                                                                            <Link
                                                                                to="#"
                                                                                className="collapsed"
                                                                                data-bs-toggle="collapse"
                                                                                data-bs-target="#owner"
                                                                                aria-expanded="false"
                                                                                aria-controls="owner"
                                                                            >
                                                                                Owner
                                                                            </Link>
                                                                        </div>
                                                                        <div
                                                                            className="filter-set-contents accordion-collapse collapse"
                                                                            id="owner"
                                                                            data-bs-parent="#accordionExample"
                                                                        >
                                                                            <div className="filter-content-list">
                                                                                <div className="form-wrap icon-form">
                                                                                    <span className="form-icon">
                                                                                        <i className="ti ti-search" />
                                                                                    </span>
                                                                                    <input
                                                                                        type="text"
                                                                                        className="form-control"
                                                                                        placeholder="Search Owner"
                                                                                    />
                                                                                </div>
                                                                                <ul>
                                                                                    <li>
                                                                                        <div className="filter-checks">
                                                                                            <label className="checkboxs">
                                                                                                <input
                                                                                                    type="checkbox"
                                                                                                    defaultChecked
                                                                                                />
                                                                                                <span className="checkmarks" />
                                                                                            </label>
                                                                                        </div>
                                                                                        <div className="collapse-inside-text">
                                                                                            <h5>Hendry</h5>
                                                                                        </div>
                                                                                    </li>
                                                                                    <li>
                                                                                        <div className="filter-checks">
                                                                                            <label className="checkboxs">
                                                                                                <input type="checkbox" />
                                                                                                <span className="checkmarks" />
                                                                                            </label>
                                                                                        </div>
                                                                                        <div className="collapse-inside-text">
                                                                                            <h5>Guillory</h5>
                                                                                        </div>
                                                                                    </li>
                                                                                    <li>
                                                                                        <div className="filter-checks">
                                                                                            <label className="checkboxs">
                                                                                                <input type="checkbox" />
                                                                                                <span className="checkmarks" />
                                                                                            </label>
                                                                                        </div>
                                                                                        <div className="collapse-inside-text">
                                                                                            <h5>Jami</h5>
                                                                                        </div>
                                                                                    </li>
                                                                                    <li>
                                                                                        <div className="filter-checks">
                                                                                            <label className="checkboxs">
                                                                                                <input type="checkbox" />
                                                                                                <span className="checkmarks" />
                                                                                            </label>
                                                                                        </div>
                                                                                        <div className="collapse-inside-text">
                                                                                            <h5>Theresa</h5>
                                                                                        </div>
                                                                                    </li>
                                                                                    <li>
                                                                                        <div className="filter-checks">
                                                                                            <label className="checkboxs">
                                                                                                <input type="checkbox" />
                                                                                                <span className="checkmarks" />
                                                                                            </label>
                                                                                        </div>
                                                                                        <div className="collapse-inside-text">
                                                                                            <h5>Espinosa</h5>
                                                                                        </div>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="filter-set-content">
                                                                        <div className="filter-set-content-head">
                                                                            <Link
                                                                                to="#"
                                                                                className="collapsed"
                                                                                data-bs-toggle="collapse"
                                                                                data-bs-target="#Status"
                                                                                aria-expanded="false"
                                                                                aria-controls="Status"
                                                                            >
                                                                                Status
                                                                            </Link>
                                                                        </div>
                                                                        <div
                                                                            className="filter-set-contents accordion-collapse collapse"
                                                                            id="Status"
                                                                            data-bs-parent="#accordionExample"
                                                                        >
                                                                            <div className="filter-content-list">
                                                                                <ul>
                                                                                    <li>
                                                                                        <div className="filter-checks">
                                                                                            <label className="checkboxs">
                                                                                                <input
                                                                                                    type="checkbox"
                                                                                                    defaultChecked
                                                                                                />
                                                                                                <span className="checkmarks" />
                                                                                            </label>
                                                                                        </div>
                                                                                        <div className="collapse-inside-text">
                                                                                            <h5>Active</h5>
                                                                                        </div>
                                                                                    </li>
                                                                                    <li>
                                                                                        <div className="filter-checks">
                                                                                            <label className="checkboxs">
                                                                                                <input type="checkbox" />
                                                                                                <span className="checkmarks" />
                                                                                            </label>
                                                                                        </div>
                                                                                        <div className="collapse-inside-text">
                                                                                            <h5>Inactive</h5>
                                                                                        </div>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="filter-set-content">
                                                                        <div className="filter-set-content-head">
                                                                            <Link
                                                                                to="#"
                                                                                className="collapsed"
                                                                                data-bs-toggle="collapse"
                                                                                data-bs-target="#collapseOne"
                                                                                aria-expanded="false"
                                                                                aria-controls="collapseOne"
                                                                            >
                                                                                Rating
                                                                            </Link>
                                                                        </div>
                                                                        <div
                                                                            className="filter-set-contents accordion-collapse collapse"
                                                                            id="collapseOne"
                                                                            data-bs-parent="#accordionExample"
                                                                        >
                                                                            <div className="filter-content-list">
                                                                                <ul>
                                                                                    <li>
                                                                                        <div className="filter-checks">
                                                                                            <label className="checkboxs">
                                                                                                <input
                                                                                                    type="checkbox"
                                                                                                    defaultChecked
                                                                                                />
                                                                                                <span className="checkmarks" />
                                                                                            </label>
                                                                                        </div>
                                                                                        <div className="rating">
                                                                                            <i className="fa fa-star filled" />
                                                                                            <i className="fa fa-star filled" />
                                                                                            <i className="fa fa-star filled" />
                                                                                            <i className="fa fa-star filled" />
                                                                                            <i className="fa fa-star filled" />
                                                                                            <span>5.0</span>
                                                                                        </div>
                                                                                    </li>
                                                                                    <li>
                                                                                        <div className="filter-checks">
                                                                                            <label className="checkboxs">
                                                                                                <input type="checkbox" />
                                                                                                <span className="checkmarks" />
                                                                                            </label>
                                                                                        </div>
                                                                                        <div className="rating">
                                                                                            <i className="fa fa-star filled" />
                                                                                            <i className="fa fa-star filled" />
                                                                                            <i className="fa fa-star filled" />
                                                                                            <i className="fa fa-star filled" />
                                                                                            <i className="fa fa-star" />
                                                                                            <span>4.0</span>
                                                                                        </div>
                                                                                    </li>
                                                                                    <li>
                                                                                        <div className="filter-checks">
                                                                                            <label className="checkboxs">
                                                                                                <input type="checkbox" />
                                                                                                <span className="checkmarks" />
                                                                                            </label>
                                                                                        </div>
                                                                                        <div className="rating">
                                                                                            <i className="fa fa-star filled" />
                                                                                            <i className="fa fa-star filled" />
                                                                                            <i className="fa fa-star filled" />
                                                                                            <i className="fa fa-star" />
                                                                                            <i className="fa fa-star" />
                                                                                            <span>3.0</span>
                                                                                        </div>
                                                                                    </li>
                                                                                    <li>
                                                                                        <div className="filter-checks">
                                                                                            <label className="checkboxs">
                                                                                                <input type="checkbox" />
                                                                                                <span className="checkmarks" />
                                                                                            </label>
                                                                                        </div>
                                                                                        <div className="rating">
                                                                                            <i className="fa fa-star filled" />
                                                                                            <i className="fa fa-star filled" />
                                                                                            <i className="fa fa-star" />
                                                                                            <i className="fa fa-star" />
                                                                                            <i className="fa fa-star" />
                                                                                            <span>2.0</span>
                                                                                        </div>
                                                                                    </li>
                                                                                    <li>
                                                                                        <div className="filter-checks">
                                                                                            <label className="checkboxs">
                                                                                                <input type="checkbox" />
                                                                                                <span className="checkmarks" />
                                                                                            </label>
                                                                                        </div>
                                                                                        <div className="rating">
                                                                                            <i className="fa fa-star filled" />
                                                                                            <i className="fa fa-star" />
                                                                                            <i className="fa fa-star" />
                                                                                            <i className="fa fa-star" />
                                                                                            <i className="fa fa-star" />
                                                                                            <span>1.0</span>
                                                                                        </div>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="filter-set-content">
                                                                        <div className="filter-set-content-head">
                                                                            <Link
                                                                                to="#"
                                                                                className="collapsed"
                                                                                data-bs-toggle="collapse"
                                                                                data-bs-target="#collapseThree"
                                                                                aria-expanded="false"
                                                                                aria-controls="collapseThree"
                                                                            >
                                                                                Tags
                                                                            </Link>
                                                                        </div>
                                                                        <div
                                                                            className="filter-set-contents accordion-collapse collapse"
                                                                            id="collapseThree"
                                                                            data-bs-parent="#accordionExample"
                                                                        >
                                                                            <div className="filter-content-list">
                                                                                <ul>
                                                                                    <li>
                                                                                        <div className="filter-checks">
                                                                                            <label className="checkboxs">
                                                                                                <input
                                                                                                    type="checkbox"
                                                                                                    defaultChecked
                                                                                                />
                                                                                                <span className="checkmarks" />
                                                                                            </label>
                                                                                        </div>
                                                                                        <div className="collapse-inside-text">
                                                                                            <h5>Promotion</h5>
                                                                                        </div>
                                                                                    </li>
                                                                                    <li>
                                                                                        <div className="filter-checks">
                                                                                            <label className="checkboxs">
                                                                                                <input type="checkbox" />
                                                                                                <span className="checkmarks" />
                                                                                            </label>
                                                                                        </div>
                                                                                        <div className="collapse-inside-text">
                                                                                            <h5>Rated</h5>
                                                                                        </div>
                                                                                    </li>
                                                                                    <li>
                                                                                        <div className="filter-checks">
                                                                                            <label className="checkboxs">
                                                                                                <input type="checkbox" />
                                                                                                <span className="checkmarks" />
                                                                                            </label>
                                                                                        </div>
                                                                                        <div className="collapse-inside-text">
                                                                                            <h5>Rejected</h5>
                                                                                        </div>
                                                                                    </li>
                                                                                    <li>
                                                                                        <div className="filter-checks">
                                                                                            <label className="checkboxs">
                                                                                                <input type="checkbox" />
                                                                                                <span className="checkmarks" />
                                                                                            </label>
                                                                                        </div>
                                                                                        <div className="collapse-inside-text">
                                                                                            <h5>Collab</h5>
                                                                                        </div>
                                                                                    </li>
                                                                                    <li>
                                                                                        <div className="filter-checks">
                                                                                            <label className="checkboxs">
                                                                                                <input type="checkbox" />
                                                                                                <span className="checkmarks" />
                                                                                            </label>
                                                                                        </div>
                                                                                        <div className="collapse-inside-text">
                                                                                            <h5>Calls</h5>
                                                                                        </div>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="filter-reset-btns">
                                                                    <div className="row">
                                                                        <div className="col-6">
                                                                            <Link to="#" className="btn btn-light">
                                                                                Reset
                                                                            </Link>
                                                                        </div>
                                                                        <div className="col-6">
                                                                            <Link
                                                                                to={route.contactList}
                                                                                className="btn btn-primary"
                                                                            >
                                                                                Filter
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="view-icons">
                                                        <Link to="/sales/leads" className="active">
                                                            <i className="ti ti-list-tree" />
                                                        </Link>
                                                        <Link to="/sales/leads-kanban">
                                                            <i className="ti ti-grid-dots" />
                                                        </Link>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* /Filter */}
                                    {/* Manage Users List */}
                                    <div className="table-responsive custom-table">
                                        <DataTable dataSource={data} columns={columns} />
                                    </div>
                                    <div className="row align-items-center">
                                        <div className="col-md-6">
                                            <div className="datatable-length" />
                                        </div>
                                        <div className="col-md-6">
                                            <div className="datatable-paginate" />
                                        </div>
                                    </div>
                                    {/* /Manage Users List */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Page Wrapper */}
            {/* Add User */}
            <div className={`toggle-popup ${adduser ? "sidebar-popup" : ""}`}>
                <div className="sidebar-layout">
                    <div className="sidebar-header">
                        <h4>{modalTitle}</h4>
                        <Link
                            to="#"
                            className="sidebar-close toggle-btn"
                            onClick={togglePopup}
                        >
                            <i className="ti ti-x" />
                        </Link>
                    </div>
                    <div className="toggle-body">
                        <div className="pro-create">
                            <form>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-wrap">
                                            <label className="col-form-label">
                                                Lead Name <span className="text-danger">*</span>
                                            </label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-wrap">
                                            <div className="radio-wrap">
                                                <label className="col-form-label">Lead Type</label>
                                                <div className="d-flex flex-wrap">
                                                    <div className="radio-btn">
                                                        <input
                                                            type="radio"
                                                            className="status-radio"
                                                            id="person"
                                                            name="leave"
                                                            defaultChecked
                                                        />
                                                        <label htmlFor="person">Person</label>
                                                    </div>
                                                    <div className="radio-btn">
                                                        <input
                                                            type="radio"
                                                            className="status-radio"
                                                            id="org"
                                                            name="leave"
                                                        />
                                                        <label htmlFor="org">Organization</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-wrap">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <label className="col-form-label">
                                                    Company <span className="text-danger">*</span>
                                                </label>
                                                <Link
                                                    to="#"
                                                    className="add-new add-new-company add-popups"
                                                    onClick={addcompanyPopup}
                                                >
                                                    <i className="ti ti-square-rounded-plus me-2" />
                                                    Add New
                                                </Link>
                                            </div>
                                            <Select
                                                className="select"
                                                options={options}
                                                classNamePrefix="react-select"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-wrap">
                                            <label className="col-form-label">
                                                Value <span className="text-danger">*</span>
                                            </label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-wrap">
                                            <label className="col-form-label">
                                                Currency <span className="text-danger">*</span>
                                            </label>
                                            <Select
                                                className="select"
                                                options={optionssymbol}
                                                classNamePrefix="react-select"
                                            />
                                        </div>
                                    </div>
                                    {newContents.map((index) => (
                                        <div className="col-md-12" key={index}>
                                            <div className="add-product-new">
                                                <div className="row align-items-end">
                                                    <div className="col-md-8">
                                                        <div className="form-wrap mb-2">
                                                            <label className="col-form-label">
                                                                Phone <span className="text-danger">*</span>
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                defaultValue="+1 875455453"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 d-flex align-items-center">
                                                        <div className="form-wrap w-100 mb-2">
                                                            <Select
                                                                className="select"
                                                                options={optionschoose}
                                                                classNamePrefix="react-select"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    <div className="col-md-12">
                                        <Link
                                            onClick={addNewContent}
                                            to="#"
                                            className="add-new add-new-phone mb-3 d-block"
                                        >
                                            <i className="ti ti-square-rounded-plus me-2" />
                                            Add New
                                        </Link>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-wrap">
                                            <label className="col-form-label">
                                                Source <span className="text-danger">*</span>
                                            </label>
                                            <Select
                                                className="select"
                                                options={optionsource}
                                                classNamePrefix="react-select"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-wrap">
                                            <label className="col-form-label">
                                                Industry <span className="text-danger">*</span>
                                            </label>
                                            <Select
                                                className="select"
                                                options={optionindustry}
                                                classNamePrefix="react-select"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-wrap">
                                            <label className="col-form-label">Owner</label>
                                            {/* <SelectWithImage2 /> */}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-wrap">
                                            <label className="col-form-label">Tags </label>
                                            <input
                                                className="input-tags form-control"
                                                type="text"
                                                data-role="tagsinput"
                                                name="Label"
                                                defaultValue="Rated"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-wrap">
                                            <label className="col-form-label">
                                                Description <span className="text-danger">*</span>
                                            </label>
                                            <textarea
                                                className="form-control"
                                                rows={5}
                                                defaultValue={""}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="radio-wrap form-wrap">
                                            <label className="col-form-label">Visibility</label>
                                            <div className="d-flex flex-wrap">
                                                <div className="radio-btn">
                                                    <input
                                                        type="radio"
                                                        className="status-radio"
                                                        id="public1"
                                                        name="visible"
                                                    />
                                                    <label htmlFor="public1">Public</label>
                                                </div>
                                                <div className="radio-btn">
                                                    <input
                                                        type="radio"
                                                        className="status-radio"
                                                        id="private1"
                                                        name="visible"
                                                    />
                                                    <label htmlFor="private1">Private</label>
                                                </div>
                                                <div
                                                    className="radio-btn"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#access_view"
                                                >
                                                    <input
                                                        type="radio"
                                                        className="status-radio"
                                                        id="people1"
                                                        name="visible"
                                                    />
                                                    <label htmlFor="people1">Select People</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="radio-wrap form-wrap">
                                            <label className="col-form-label">Status</label>
                                            <div className="d-flex flex-wrap">
                                                <div className="radio-btn">
                                                    <input
                                                        type="radio"
                                                        className="status-radio"
                                                        id="active1"
                                                        name="status"
                                                        defaultChecked
                                                    />
                                                    <label htmlFor="active1">Active</label>
                                                </div>
                                                <div className="radio-btn">
                                                    <input
                                                        type="radio"
                                                        className="status-radio"
                                                        id="inactive1"
                                                        name="status"
                                                    />
                                                    <label htmlFor="inactive1">Inactive</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="submit-button text-end">
                                    <Link to="#" className="btn btn-light sidebar-close">
                                        Cancel
                                    </Link>
                                    <Link
                                        to="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#create_contact"
                                        className="btn btn-primary"
                                    >
                                        Create
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Add User */}
            <div className="modal custom-modal fade" id="save_view" role="dialog">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add New View</h5>
                            <button
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                <i className="ti ti-x" />
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-wrap">
                                    <label className="col-form-label">View Name</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="modal-btn text-end">
                                    <Link
                                        to="#"
                                        className="btn btn-light"
                                        data-bs-dismiss="modal"
                                    >
                                        Cancel
                                    </Link>
                                    <button type="submit" className="btn btn-danger">
                                        Save
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`toggle-popup2 ${addcompany ? "sidebar-popup" : ""}`}>
                <div className="sidebar-layout">
                    <div className="sidebar-header">
                        <h4>Add New Company</h4>
                        <Link
                            to="#"
                            className="sidebar-close2 toggle-btn"
                            onClick={addcompanyPopup}
                        >
                            <i className="ti ti-x" />
                        </Link>
                    </div>
                    <div className="toggle-body">
                        <div className="pro-create">
                            <form>
                                <div className="accordion-lists" id="list-accord">
                                    {/* Basic Info */}
                                    <div className="user-accordion-item">
                                        <Link
                                            to="#"
                                            className="accordion-wrap"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#basic"
                                        >
                                            <span>
                                                <i className="ti ti-user-plus" />
                                            </span>
                                            Basic Info
                                        </Link>
                                        <div
                                            className="accordion-collapse collapse show"
                                            id="basic"
                                            data-bs-parent="#list-accord"
                                        >
                                            <div className="content-collapse">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-wrap">
                                                            <div className="profile-upload">
                                                                <div className="profile-upload-img">
                                                                    <span>
                                                                        <i className="ti ti-photo" />
                                                                    </span>
                                                                    <ImageWithBasePath
                                                                        src="assets/img/icons/company-icon-03.svg"
                                                                        alt="img"
                                                                        className="preview1"
                                                                    />
                                                                    <button
                                                                        type="button"
                                                                        className="profile-remove"
                                                                    >
                                                                        <i className="ti ti-x" />
                                                                    </button>
                                                                </div>
                                                                <div className="profile-upload-content">
                                                                    <label className="profile-upload-btn">
                                                                        <i className="ti ti-file-broken" /> Upload
                                                                        File
                                                                        <input
                                                                            type="file"
                                                                            className="input-img"
                                                                        />
                                                                    </label>
                                                                    <p>JPG, GIF or PNG. Max size of 800K</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-wrap">
                                                            <label className="col-form-label">
                                                                Company Name
                                                            </label>
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-wrap">
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <label className="col-form-label">
                                                                    Email <span className="text-danger">*</span>
                                                                </label>
                                                                <div className="status-toggle small-toggle-btn d-flex align-items-center">
                                                                    <span className="me-2 label-text">
                                                                        Email Opt Out
                                                                    </span>
                                                                    <input
                                                                        type="checkbox"
                                                                        id="user"
                                                                        className="check"
                                                                        defaultChecked
                                                                    />
                                                                    <label
                                                                        htmlFor="user"
                                                                        className="checktoggle"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-wrap">
                                                            <label className="col-form-label">
                                                                Phone 1 <span className="text-danger">*</span>
                                                            </label>
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-wrap">
                                                            <label className="col-form-label">
                                                                Phone 2
                                                            </label>
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-wrap">
                                                            <label className="col-form-label">
                                                                Fax <span className="text-danger">*</span>
                                                            </label>
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-wrap">
                                                            <label className="col-form-label">
                                                                Website <span className="text-danger">*</span>
                                                            </label>
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-wrap">
                                                            <label className="col-form-label">
                                                                Ratings
                                                            </label>
                                                            <div className="icon-form-end">
                                                                <span className="form-icon">
                                                                    <i className="ti ti-star" />
                                                                </span>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    placeholder="4.2"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-wrap">
                                                            <label className="col-form-label">Owner</label>
                                                            {/* <SelectWithImage2 /> */}
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-wrap">
                                                            <label className="col-form-label">Tags </label>
                                                            <input
                                                                className="input-tags form-control"
                                                                type="text"
                                                                data-role="tagsinput"
                                                                name="Label"
                                                                defaultValue="Collab"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-wrap">
                                                            <div className="d-flex align-items-center justify-content-between">
                                                                <label className="col-form-label">
                                                                    Deals
                                                                </label>
                                                            </div>
                                                            <Select
                                                                className="select2"
                                                                options={optiondeals}
                                                                classNamePrefix="react-select"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-wrap">
                                                            <label className="col-form-label">
                                                                Source <span className="text-danger">*</span>
                                                            </label>
                                                            <Select
                                                                className="select2"
                                                                options={optionsource}
                                                                classNamePrefix="react-select"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-wrap">
                                                            <label className="col-form-label">
                                                                Industry{" "}
                                                                <span className="text-danger">*</span>
                                                            </label>
                                                            <Select
                                                                className="select2"
                                                                options={optionindustry}
                                                                classNamePrefix="react-select"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-wrap">
                                                            <label className="col-form-label">
                                                                Contact <span className="text-danger">*</span>
                                                            </label>
                                                            {/* <SelectWithImage2 /> */}
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-wrap">
                                                            <label className="col-form-label">
                                                                Currency{" "}
                                                                <span className="text-danger">*</span>
                                                            </label>
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-wrap">
                                                            <label className="col-form-label">
                                                                Language{" "}
                                                                <span className="text-danger">*</span>
                                                            </label>
                                                            <Select
                                                                className="select"
                                                                options={languageOptions}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-wrap mb-0">
                                                            <label className="col-form-label">
                                                                Description{" "}
                                                                <span className="text-danger">*</span>
                                                            </label>
                                                            <textarea
                                                                className="form-control"
                                                                rows={5}
                                                                defaultValue={""}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Basic Info */}
                                    {/* Address Info */}
                                    <div className="user-accordion-item">
                                        <Link
                                            to="#"
                                            className="accordion-wrap collapsed"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#address"
                                        >
                                            <span>
                                                <i className="ti ti-map-pin-cog" />
                                            </span>
                                            Address Info
                                        </Link>
                                        <div
                                            className="accordion-collapse collapse"
                                            id="address"
                                            data-bs-parent="#list-accord"
                                        >
                                            <div className="content-collapse">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-wrap">
                                                            <label className="col-form-label">
                                                                Street Address{" "}
                                                            </label>
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-wrap">
                                                            <label className="col-form-label">City </label>
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-wrap">
                                                            <label className="col-form-label">
                                                                State / Province{" "}
                                                            </label>
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-wrap mb-wrap">
                                                            <label className="col-form-label">
                                                                Country
                                                            </label>
                                                            <Select
                                                                className="select"
                                                                options={countryoptions1}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-wrap mb-wrap">
                                                            <label className="col-form-label">
                                                                Zipcode{" "}
                                                            </label>
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Address Info */}
                                    {/* Social Profile */}
                                    <div className="user-accordion-item">
                                        <Link
                                            to="#"
                                            className="accordion-wrap collapsed"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#social"
                                        >
                                            <span>
                                                <i className="ti ti-social" />
                                            </span>
                                            Social Profile
                                        </Link>
                                        <div
                                            className="accordion-collapse collapse"
                                            id="social"
                                            data-bs-parent="#list-accord"
                                        >
                                            <div className="content-collapse">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-wrap">
                                                            <label className="col-form-label">
                                                                Facebook
                                                            </label>
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-wrap">
                                                            <label className="col-form-label">Skype </label>
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-wrap">
                                                            <label className="col-form-label">
                                                                Linkedin{" "}
                                                            </label>
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-wrap">
                                                            <label className="col-form-label">
                                                                Twitter
                                                            </label>
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-wrap mb-wrap">
                                                            <label className="col-form-label">
                                                                Whatsapp
                                                            </label>
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-wrap mb-wrap">
                                                            <label className="col-form-label">
                                                                Instagram
                                                            </label>
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Social Profile */}
                                    {/* Access */}
                                    <div className="user-accordion-item">
                                        <Link
                                            to="#"
                                            className="accordion-wrap collapsed"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#access"
                                        >
                                            <span>
                                                <i className="ti ti-accessible" />
                                            </span>
                                            Access
                                        </Link>
                                        <div
                                            className="accordion-collapse collapse"
                                            id="access"
                                            data-bs-parent="#list-accord"
                                        >
                                            <div className="content-collapse">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="radio-wrap form-wrap">
                                                            <label className="col-form-label">
                                                                Visibility
                                                            </label>
                                                            <div className="d-flex flex-wrap">
                                                                <div className="radio-btn">
                                                                    <input
                                                                        type="radio"
                                                                        className="status-radio"
                                                                        id="public"
                                                                        name="visible"
                                                                    />
                                                                    <label htmlFor="public">Public</label>
                                                                </div>
                                                                <div className="radio-btn">
                                                                    <input
                                                                        type="radio"
                                                                        className="status-radio"
                                                                        id="private"
                                                                        name="visible"
                                                                    />
                                                                    <label htmlFor="private">Private</label>
                                                                </div>
                                                                <div
                                                                    className="radio-btn"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#access_view"
                                                                >
                                                                    <input
                                                                        type="radio"
                                                                        className="status-radio"
                                                                        id="people"
                                                                        name="visible"
                                                                    />
                                                                    <label htmlFor="people">
                                                                        Select People
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="radio-wrap">
                                                            <label className="col-form-label">Status</label>
                                                            <div className="d-flex flex-wrap">
                                                                <div className="radio-btn">
                                                                    <input
                                                                        type="radio"
                                                                        className="status-radio"
                                                                        id="active"
                                                                        name="status"
                                                                        defaultChecked
                                                                    />
                                                                    <label htmlFor="active">Active</label>
                                                                </div>
                                                                <div className="radio-btn">
                                                                    <input
                                                                        type="radio"
                                                                        className="status-radio"
                                                                        id="inactive"
                                                                        name="status"
                                                                    />
                                                                    <label htmlFor="inactive">Inactive</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Access */}
                                </div>
                                <div className="submit-button text-end">
                                    <Link to="#" className="btn btn-light sidebar-close2">
                                        Cancel
                                    </Link>
                                    <button type="submit" className="btn btn-primary">
                                        Create
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="modal custom-modal fade"
                id="delete_contact"
                role="dialog"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header border-0 m-0 justify-content-end">
                            <button
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                <i className="ti ti-x" />
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="success-message text-center">
                                <div className="success-popup-icon">
                                    <i className="ti ti-trash-x" />
                                </div>
                                <h3>Remove Leads?</h3>
                                <p className="del-info">
                                    Are you sure you want to remove lead you selected.
                                </p>
                                <div className="col-lg-12 text-center modal-btn">
                                    <Link
                                        to="#"
                                        className="btn btn-light"
                                        data-bs-dismiss="modal"
                                    >
                                        Cancel
                                    </Link>
                                    <Link to="/leads" className="btn btn-danger">
                                        Yes, Delete it
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    </>
}


export default LeadsPage