import React, { useState } from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../components/ImageWithBasePath";
// import { useDispatch, useSelector } from "react-redux";
// import {
//     setActivityTogglePopup,
//     setActivityTogglePopupTwo,
// } from "../../../core/data/redux/commonSlice";
import {
    activeList,
    initialSettings,
    options1,
    priorityList,
} from "../../selectOption/selectOption";
import Select from "react-select";
import DatePicker from "react-datepicker";
import CollapseHeader from '../../components/CollapseHeader/CollapseHeader';
// import { SelectWithImage2 } from "../../../core/common/selectWithImage2";
import { all_routes } from "../Router/all_routes";
import DateRangePicker from "react-bootstrap-daterangepicker";
import DefaultEditor from "react-simple-wysiwyg";

const Task = () => {
    const [activityToggle, setActivityToggle] = useState(false)
    const [activityToggleTwo, setActivityToggleTwo] = useState(false)
    const route = all_routes;

    // const dispatch = useDispatch();
    // const activityToggle = useSelector(
    //     (state) => state?.activityTogglePopup
    // );
    // const activityToggleTwo = useSelector(
    //     (state) => state?.activityTogglePopupTwo
    // );

    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const [selectedDate1, setSelectedDate1] = useState(new Date());
    const handleDateChange1 = (date) => {
        setSelectedDate1(date);
    };

    const meetingMode = [
        { value: "Choose", label: "Choose" },
        { value: "Calls", label: "Calls" },
        { value: "Email", label: "Email" },
        { value: "Meeting", label: "Meeting" },
    ];

    return (
        <>
            {/* Page Wrapper */}
            <div className="page-wrapper">
                <div className="content">
                    <div className="row">
                        <div className="col-md-12">
                            {/* Page Header */}
                            <div className="page-header">
                                <div className="row align-items-center">
                                    <div className="col-4">
                                        <h4 className="page-title">
                                            Task<span className="count-title">123</span>
                                        </h4>
                                    </div>
                                    <div className="col-8 text-end">
                                        <div className="head-icons">
                                            <CollapseHeader />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* /Page Header */}


                            {/* Campaign Status */}
                            <div className="row">
                                <div className="col-xl-3 col-lg-6">
                                    <div className="campaign-box bg-danger-light">
                                        <div className="campaign-img">
                                            <span>
                                                <i className="ti ti-brand-campaignmonitor" />
                                            </span>
                                            <p>Campaign</p>
                                        </div>
                                        <h2>474</h2>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-6">
                                    <div className="campaign-box bg-warning-light">
                                        <div className="campaign-img">
                                            <span>
                                                <i className="ti ti-send" />
                                            </span>
                                            <p>Sent</p>
                                        </div>
                                        <h2>454</h2>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-6">
                                    <div className="campaign-box bg-purple-light">
                                        <div className="campaign-img">
                                            <span>
                                                <i className="ti ti-brand-feedly" />
                                            </span>
                                            <p>Opened</p>
                                        </div>
                                        <h2>658</h2>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-6">
                                    <div className="campaign-box bg-success-light">
                                        <div className="campaign-img">
                                            <span>
                                                <i className="ti ti-brand-pocket" />
                                            </span>
                                            <p>Completed</p>
                                        </div>
                                        <h2>747</h2>
                                    </div>
                                </div>
                            </div>
                            {/* /Campaign Status */}
                            <div className="card main-card">
                                <div className="card-body">
                                    {/* Search */}
                                    <div className="search-section">
                                        <div className="row">

                                            <div className="col-md-5 col-sm-4" style={{
                                                display: "flex",
                                                justifyContent: "start",
                                                alignItems: "baseline",
                                                gap: "20px"
                                            }}>

                                                <div className="sortby-list">
                                                    <ul>
                                                        <li>
                                                            <div className="sort-dropdown drop-down task-drops">
                                                                <Link
                                                                    to="#"
                                                                    className="dropdown-toggle"
                                                                    data-bs-toggle="dropdown"
                                                                >
                                                                    All Tasks{" "}
                                                                </Link>
                                                                <div className="dropdown-menu  dropdown-menu-start">
                                                                    <ul>
                                                                        <li>
                                                                            <Link to={route.tasks}>
                                                                                <i className="ti ti-dots-vertical" />
                                                                                All Tasks
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link to={route.tasksImportant}>
                                                                                <i className="ti ti-dots-vertical" />
                                                                                Important
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link to={route.tasksCompleted}>
                                                                                <i className="ti ti-dots-vertical" />
                                                                                Completed
                                                                            </Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>



                                                <div className="form-wrap icon-form">
                                                    <span className="form-icon">
                                                        <i className="ti ti-search" />
                                                    </span>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Search Task"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-7 col-sm-8">
                                                <div className="export-list text-sm-end">
                                                    <ul>


                                                        <li className="all-read">
                                                            <label className="checkboxs">
                                                                <input type="checkbox" />
                                                                <span className="checkmarks" />
                                                                Mark all as read
                                                            </label>
                                                        </li>


                                                        <li>
                                                            <div className=" icon-form">
                                                                <span className="form-icon">
                                                                    <i className="ti ti-calendar" />
                                                                </span>
                                                                <DateRangePicker initialSettings={initialSettings}>
                                                                    <input
                                                                        className="form-control bookingrange"
                                                                        type="text"
                                                                    />
                                                                </DateRangePicker>
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
                                                                    {/* Filter */}
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
                                                            <Link
                                                                to="#"
                                                                className="btn btn-primary add-popup"
                                                                onClick={() =>

                                                                    setActivityToggle(prev => !prev)

                                                                }
                                                            >
                                                                <i className="ti ti-square-rounded-plus" />
                                                                Add New Task
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Search */}

                                    {/* Recent Task List */}
                                    <div className="task-wrapper">
                                        <Link
                                            to="#"
                                            className="task-accordion"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#recent"
                                        >
                                            <h4>
                                                Recent<span>24</span>
                                            </h4>
                                        </Link>
                                        <div
                                            className="tasks-activity tasks collapse show"
                                            id="recent"
                                        >
                                            <ul>
                                                <li className="task-wrap pending">
                                                    <div className="task-info">
                                                        <span className="task-icon">
                                                            <i className="ti ti-grip-vertical" />
                                                        </span>
                                                        <div className="task-checkbox">
                                                            <label className="checkboxs">
                                                                <input type="checkbox" />
                                                                <span className="checkmarks" />
                                                            </label>
                                                        </div>
                                                        <div className="set-star rating-select">
                                                            <i className="fa fa-star" />
                                                        </div>
                                                        <p>Add a form to Update Task</p>
                                                        <span className="badge badge-pill badge-status bg-green">
                                                            <i className="ti ti-phone" />
                                                            Calls
                                                        </span>
                                                        <span className="badge badge-tag bg-pending">
                                                            Pending
                                                        </span>
                                                    </div>
                                                    <div className="task-actions">
                                                        <ul>
                                                            <li className="task-time">
                                                                <span className="badge badge-tag badge-purple-light">
                                                                    Promotion
                                                                </span>
                                                            </li>
                                                            <li className="task-date">
                                                                <i className="ti ti-calendar-exclamation" />
                                                                25 Oct 2023
                                                            </li>
                                                            <li className="task-owner">
                                                                <div className="task-user">
                                                                    <ImageWithBasePath
                                                                        src="assets/img/profiles/avatar-14.jpg"
                                                                        alt="img"
                                                                    />
                                                                </div>
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
                                                                            className="dropdown-item edit-popup"
                                                                            to="#"
                                                                        // onClick={() =>
                                                                        //     dispatch(
                                                                        //         setActivityTogglePopupTwo(
                                                                        //             !activityToggleTwo
                                                                        //         )
                                                                        //     )
                                                                        // }
                                                                        >
                                                                            <i className="ti ti-edit text-blue" />{" "}
                                                                            Edit
                                                                        </Link>
                                                                        <Link
                                                                            className="dropdown-item"
                                                                            to="#"
                                                                            data-bs-toggle="modal"
                                                                            data-bs-target="#delete_activity"
                                                                        >
                                                                            <i className="ti ti-trash text-danger" />{" "}
                                                                            Delete
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li className="task-wrap pending">
                                                    <div className="task-info">
                                                        <span className="task-icon">
                                                            <i className="ti ti-grip-vertical" />
                                                        </span>
                                                        <div className="task-checkbox">
                                                            <label className="checkboxs">
                                                                <input type="checkbox" />
                                                                <span className="checkmarks" />
                                                            </label>
                                                        </div>
                                                        <div className="set-star rating-select">
                                                            <i className="fa fa-star" />
                                                        </div>
                                                        <p>Make all strokes thinner</p>
                                                        <span className="badge activity-badge bg-warning">
                                                            <i className="ti ti-mail" /> Email
                                                        </span>
                                                        <span className="badge badge-tag bg-pending">
                                                            Pending
                                                        </span>
                                                    </div>
                                                    <div className="task-actions">
                                                        <ul>
                                                            <li className="task-time">
                                                                <span className="badge badge-tag badge-danger-light">
                                                                    Rejected
                                                                </span>
                                                                <span className="badge badge-tag badge-success-light">
                                                                    Collab
                                                                </span>
                                                            </li>
                                                            <li className="task-date">
                                                                <i className="ti ti-calendar-exclamation" />
                                                                25 Oct 2023
                                                            </li>
                                                            <li className="task-owner">
                                                                <div className="task-user">
                                                                    <ImageWithBasePath
                                                                        src="assets/img/profiles/avatar-14.jpg"
                                                                        alt="img"
                                                                    />
                                                                </div>
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
                                                                            className="dropdown-item edit-popup"
                                                                            to="#"
                                                                        // onClick={() =>
                                                                        //     dispatch(
                                                                        //         setActivityTogglePopupTwo(
                                                                        //             !activityToggleTwo
                                                                        //         )
                                                                        //     )
                                                                        // }
                                                                        >
                                                                            <i className="ti ti-edit text-blue" />{" "}
                                                                            Edit
                                                                        </Link>
                                                                        <Link
                                                                            className="dropdown-item"
                                                                            to="#"
                                                                            data-bs-toggle="modal"
                                                                            data-bs-target="#delete_activity"
                                                                        >
                                                                            <i className="ti ti-trash text-danger" />{" "}
                                                                            Delete
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li className="task-wrap  warning">
                                                    <div className="task-info">
                                                        <span className="task-icon">
                                                            <i className="ti ti-grip-vertical" />
                                                        </span>
                                                        <div className="task-checkbox">
                                                            <label className="checkboxs">
                                                                <input type="checkbox" />
                                                                <span className="checkmarks" />
                                                            </label>
                                                        </div>
                                                        <div className="set-star rating-select">
                                                            <i className="fa fa-star" />
                                                        </div>
                                                        <p>Update orginal content</p>
                                                        <span className="badge badge-pill badge-status bg-green">
                                                            <i className="ti ti-phone" />
                                                            Calls
                                                        </span>
                                                        <span className="badge badge-tag bg-warning">
                                                            Inprogress
                                                        </span>
                                                    </div>
                                                    <div className="task-actions">
                                                        <ul>
                                                            <li className="task-time">
                                                                <span className="badge badge-tag badge-purple-light">
                                                                    Promotion
                                                                </span>
                                                            </li>
                                                            <li className="task-date">
                                                                <i className="ti ti-calendar-exclamation" />
                                                                25 Oct 2023
                                                            </li>
                                                            <li className="task-owner">
                                                                <div className="task-user">
                                                                    <ImageWithBasePath
                                                                        src="assets/img/profiles/avatar-14.jpg"
                                                                        alt="img"
                                                                    />
                                                                </div>
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
                                                                            className="dropdown-item edit-popup"
                                                                            to="#"
                                                                        // onClick={() =>
                                                                        //     dispatch(
                                                                        //         setActivityTogglePopupTwo(
                                                                        //             !activityToggleTwo
                                                                        //         )
                                                                        //     )
                                                                        // }
                                                                        >
                                                                            <i className="ti ti-edit text-blue" />{" "}
                                                                            Edit
                                                                        </Link>
                                                                        <Link
                                                                            className="dropdown-item"
                                                                            to="#"
                                                                            data-bs-toggle="modal"
                                                                            data-bs-target="#delete_activity"
                                                                        >
                                                                            <i className="ti ti-trash text-danger" />{" "}
                                                                            Delete
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li className="task-wrap warning">
                                                    <div className="task-info">
                                                        <span className="task-icon">
                                                            <i className="ti ti-grip-vertical" />
                                                        </span>
                                                        <div className="task-checkbox">
                                                            <label className="checkboxs">
                                                                <input type="checkbox" />
                                                                <span className="checkmarks" />
                                                            </label>
                                                        </div>
                                                        <div className="set-star rating-select">
                                                            <i className="fa fa-star" />
                                                        </div>
                                                        <p>Use only component colours</p>
                                                        <span className="badge activity-badge bg-blue">
                                                            <i className="ti ti-subtask" /> Task
                                                        </span>
                                                        <span className="badge badge-tag bg-warning">
                                                            Inprogress
                                                        </span>
                                                    </div>
                                                    <div className="task-actions">
                                                        <ul>
                                                            <li className="task-time">
                                                                <span className="badge badge-tag badge-success-light">
                                                                    Collab
                                                                </span>
                                                                <span className="badge badge-tag badge-warning-light">
                                                                    Rated
                                                                </span>
                                                            </li>
                                                            <li className="task-date">
                                                                <i className="ti ti-calendar-exclamation" />
                                                                25 Oct 2023
                                                            </li>
                                                            <li className="task-owner">
                                                                <div className="task-user">
                                                                    <ImageWithBasePath
                                                                        src="assets/img/profiles/avatar-14.jpg"
                                                                        alt="img"
                                                                    />
                                                                </div>
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
                                                                            className="dropdown-item edit-popup"
                                                                            to="#"
                                                                        // onClick={() =>
                                                                        //     dispatch(
                                                                        //         setActivityTogglePopupTwo(
                                                                        //             !activityToggleTwo
                                                                        //         )
                                                                        //     )
                                                                        // }
                                                                        >
                                                                            <i className="ti ti-edit text-blue" />{" "}
                                                                            Edit
                                                                        </Link>
                                                                        <Link
                                                                            className="dropdown-item"
                                                                            to="#"
                                                                            data-bs-toggle="modal"
                                                                            data-bs-target="#delete_activity"
                                                                        >
                                                                            <i className="ti ti-trash text-danger" />{" "}
                                                                            Delete
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* /Recent Task List */}
                                    {/* Task List */}
                                    <div className="task-wrapper">
                                        <Link
                                            to="#"
                                            className="task-accordion"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#yesterday"
                                        >
                                            <h4>Yesterday</h4>
                                        </Link>
                                        <div
                                            className="tasks-activity tasks collapse show"
                                            id="yesterday"
                                        >
                                            <ul>
                                                <li className="task-wrap  warning">
                                                    <div className="task-info">
                                                        <span className="task-icon">
                                                            <i className="ti ti-grip-vertical" />
                                                        </span>
                                                        <div className="task-checkbox">
                                                            <label className="checkboxs">
                                                                <input type="checkbox" />
                                                                <span className="checkmarks" />
                                                            </label>
                                                        </div>
                                                        <div className="set-star rating-select">
                                                            <i className="fa fa-star" />
                                                        </div>
                                                        <p>Add images to the cards section</p>
                                                        <span className="badge badge-pill badge-status bg-green">
                                                            <i className="ti ti-phone" />
                                                            Calls
                                                        </span>
                                                        <span className="badge badge-tag bg-warning">
                                                            Inprogress
                                                        </span>
                                                    </div>
                                                    <div className="task-actions">
                                                        <ul>
                                                            <li className="task-time">
                                                                <span className="badge badge-tag badge-success-light">
                                                                    Collab
                                                                </span>
                                                                <span className="badge badge-tag badge-warning-light">
                                                                    Rated
                                                                </span>
                                                            </li>
                                                            <li className="task-date">
                                                                <i className="ti ti-calendar-exclamation" />
                                                                24 Oct 2023
                                                            </li>
                                                            <li className="task-owner">
                                                                <div className="task-user">
                                                                    <ImageWithBasePath
                                                                        src="assets/img/profiles/avatar-14.jpg"
                                                                        alt="img"
                                                                    />
                                                                </div>
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
                                                                            className="dropdown-item edit-popup"
                                                                            to="#"
                                                                        // onClick={() =>
                                                                        //     dispatch(
                                                                        //         setActivityTogglePopupTwo(
                                                                        //             !activityToggleTwo
                                                                        //         )
                                                                        //     )
                                                                        // }
                                                                        >
                                                                            <i className="ti ti-edit text-blue" />{" "}
                                                                            Edit
                                                                        </Link>
                                                                        <Link
                                                                            className="dropdown-item"
                                                                            to="#"
                                                                            data-bs-toggle="modal"
                                                                            data-bs-target="#delete_activity"
                                                                        >
                                                                            <i className="ti ti-trash text-danger" />{" "}
                                                                            Delete
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* /Task List */}
                                    {/* Task List */}
                                    <div className="task-wrapper">
                                        <Link
                                            to="#"
                                            className="task-accordion"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#date-01"
                                        >
                                            <h4>23 Oct 2023</h4>
                                        </Link>
                                        <div
                                            className="tasks-activity tasks collapse show"
                                            id="date-01"
                                        >
                                            <ul>
                                                <li className="task-wrap warning">
                                                    <div className="task-info">
                                                        <span className="task-icon">
                                                            <i className="ti ti-grip-vertical" />
                                                        </span>
                                                        <div className="task-checkbox">
                                                            <label className="checkboxs">
                                                                <input type="checkbox" />
                                                                <span className="checkmarks" />
                                                            </label>
                                                        </div>
                                                        <div className="set-star rating-select">
                                                            <i className="fa fa-star" />
                                                        </div>
                                                        <p>Design description banner &amp; landing page</p>
                                                        <span className="badge activity-badge bg-blue">
                                                            <i className="ti ti-subtask" /> Task
                                                        </span>
                                                        <span className="badge badge-tag bg-warning">
                                                            Inprogress
                                                        </span>
                                                    </div>
                                                    <div className="task-actions">
                                                        <ul>
                                                            <li className="task-time">
                                                                <span className="badge badge-tag badge-success-light">
                                                                    Collab
                                                                </span>
                                                                <span className="badge badge-tag badge-warning-light">
                                                                    Rated
                                                                </span>
                                                            </li>
                                                            <li className="task-date">
                                                                <i className="ti ti-calendar-exclamation" />
                                                                23 Oct 2023
                                                            </li>
                                                            <li className="task-owner">
                                                                <div className="task-user">
                                                                    <ImageWithBasePath
                                                                        src="assets/img/profiles/avatar-14.jpg"
                                                                        alt="img"
                                                                    />
                                                                </div>
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
                                                                            className="dropdown-item edit-popup"
                                                                            to="#"
                                                                        // onClick={() =>
                                                                        //     dispatch(
                                                                        //         setActivityTogglePopupTwo(
                                                                        //             !activityToggleTwo
                                                                        //         )
                                                                        //     )
                                                                        // }
                                                                        >
                                                                            <i className="ti ti-edit text-blue" />{" "}
                                                                            Edit
                                                                        </Link>
                                                                        <Link
                                                                            className="dropdown-item"
                                                                            to="#"
                                                                            data-bs-toggle="modal"
                                                                            data-bs-target="#delete_activity"
                                                                        >
                                                                            <i className="ti ti-trash text-danger" />{" "}
                                                                            Delete
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li className="task-wrap  success">
                                                    <div className="task-info">
                                                        <span className="task-icon">
                                                            <i className="ti ti-grip-vertical" />
                                                        </span>
                                                        <div className="task-checkbox">
                                                            <label className="checkboxs">
                                                                <input type="checkbox" />
                                                                <span className="checkmarks" />
                                                            </label>
                                                        </div>
                                                        <div className="set-star rating-select">
                                                            <i className="fa fa-star" />
                                                        </div>
                                                        <p>
                                                            <del>
                                                                Make sure all the padding should be 24px
                                                            </del>
                                                        </p>
                                                        <span className="badge badge-pill badge-status bg-green">
                                                            <i className="ti ti-phone" />
                                                            Calls
                                                        </span>
                                                        <span className="badge badge-tag bg-success">
                                                            Completed
                                                        </span>
                                                    </div>
                                                    <div className="task-actions">
                                                        <ul>
                                                            <li className="task-time">
                                                                <span className="badge badge-tag badge-purple-light">
                                                                    Promotion
                                                                </span>
                                                            </li>
                                                            <li className="task-date">
                                                                <i className="ti ti-calendar-exclamation" />
                                                                23 Oct 2023
                                                            </li>
                                                            <li className="task-owner">
                                                                <div className="task-user">
                                                                    <ImageWithBasePath
                                                                        src="assets/img/profiles/avatar-14.jpg"
                                                                        alt="img"
                                                                    />
                                                                </div>
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
                                                                            className="dropdown-item edit-popup"
                                                                            to="#"
                                                                        // onClick={() =>
                                                                        //     dispatch(
                                                                        //         setActivityTogglePopupTwo(
                                                                        //             !activityToggleTwo
                                                                        //         )
                                                                        //     )
                                                                        // }
                                                                        >
                                                                            <i className="ti ti-edit text-blue" />{" "}
                                                                            Edit
                                                                        </Link>
                                                                        <Link
                                                                            className="dropdown-item"
                                                                            to="#"
                                                                            data-bs-toggle="modal"
                                                                            data-bs-target="#delete_activity"
                                                                        >
                                                                            <i className="ti ti-trash text-danger" />{" "}
                                                                            Delete
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* /Task List */}
                                    {/* Task List */}
                                    <div className="task-wrapper">
                                        <Link
                                            to="#"
                                            className="task-accordion"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#date-02"
                                        >
                                            <h4>22 Oct 2023</h4>
                                        </Link>
                                        <div
                                            className="tasks-activity tasks collapse show"
                                            id="date-02"
                                        >
                                            <ul>
                                                <li className="task-wrap  success">
                                                    <div className="task-info">
                                                        <span className="task-icon">
                                                            <i className="ti ti-grip-vertical" />
                                                        </span>
                                                        <div className="task-checkbox">
                                                            <label className="checkboxs">
                                                                <input type="checkbox" />
                                                                <span className="checkmarks" />
                                                            </label>
                                                        </div>
                                                        <div className="set-star rating-select">
                                                            <i className="fa fa-star" />
                                                        </div>
                                                        <p>
                                                            <del>Use border radius as 5px or 10 px</del>
                                                        </p>
                                                        <span className="badge badge-pill badge-status bg-purple">
                                                            <i className="ti ti-user-share" />
                                                            Meeting
                                                        </span>
                                                        <span className="badge badge-tag bg-success">
                                                            Completed
                                                        </span>
                                                    </div>
                                                    <div className="task-actions">
                                                        <ul>
                                                            <li className="task-time">
                                                                <span className="badge badge-tag badge-danger-light">
                                                                    Rejected
                                                                </span>
                                                                <span className="badge badge-tag badge-success-light">
                                                                    Collab
                                                                </span>
                                                            </li>
                                                            <li className="task-date">
                                                                <i className="ti ti-calendar-exclamation" />
                                                                22 Oct 2023
                                                            </li>
                                                            <li className="task-owner">
                                                                <div className="task-user">
                                                                    <ImageWithBasePath
                                                                        src="assets/img/profiles/avatar-14.jpg"
                                                                        alt="img"
                                                                    />
                                                                </div>
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
                                                                            className="dropdown-item edit-popup"
                                                                            to="#"
                                                                        // onClick={() =>
                                                                        //     dispatch(
                                                                        //         setActivityTogglePopupTwo(
                                                                        //             !activityToggleTwo
                                                                        //         )
                                                                        //     )
                                                                        // }
                                                                        >
                                                                            <i className="ti ti-edit text-blue" />{" "}
                                                                            Edit
                                                                        </Link>
                                                                        <Link
                                                                            className="dropdown-item"
                                                                            to="#"
                                                                            data-bs-toggle="modal"
                                                                            data-bs-target="#delete_activity"
                                                                        >
                                                                            <i className="ti ti-trash text-danger" />{" "}
                                                                            Delete
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* /Task List */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Page Wrapper */}
            {/* Add New Task */}
            <div
                className={
                    activityToggle ? "toggle-popup sidebar-popup" : "toggle-popup"
                }
            >
                <div className="sidebar-layout">
                    <div className="sidebar-header">
                        <h4>Add New Task</h4>
                        <Link
                            to="#"
                            className="sidebar-close toggle-btn"
                            onClick={() => setActivityToggle(!activityToggle)}
                        >
                            <i className="ti ti-x" />
                        </Link>
                    </div>
                    <div className="toggle-body">
                        <form className="toggle-height">
                            <div className="pro-create">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-wrap">
                                            <label className="col-form-label">Select Lead</label>

                                            <Select
                                                options={[{ value: 'Choose', label: 'Choose' }]}
                                                className="select2"
                                                placeholder="Choose"
                                            />
                                        </div>

                                        <div className="form-wrap">
                                            <label className="col-form-label">Category</label>

                                            <Select
                                                options={meetingMode}
                                                className="select2"
                                                placeholder="Choose"
                                            />
                                        </div>

                                        <div className="form-wrap">
                                            <label className="col-form-label">Sub Category</label>

                                            <Select
                                                options={[{ value: 'Choose', label: 'Choose' }]}
                                                className="select2"
                                                placeholder="Choose"
                                            />
                                        </div>


                                        <div className="form-wrap">
                                            <label className="col-form-label">
                                                Title <span className="text-danger">*</span>
                                            </label>
                                            <input type="text" className="form-control" />
                                        </div>

                                        <div className="form-wrap">
                                            <label className="col-form-label">Task Priority</label>

                                            <Select
                                                options={[{ value: 'Choose', label: 'Choose' }]}
                                                className="select2"
                                                placeholder="Choose"
                                            />
                                        </div>

                                        <div className="form-wrap">
                                            <label className="col-form-label">Assign To</label>

                                            <Select
                                                options={[{ value: 'Choose', label: 'Choose' }]}
                                                className="select2"
                                                placeholder="Choose"
                                            />
                                        </div>

                                        <div className="form-wrap">
                                            <label className="col-form-label">
                                                Responsible Persons{" "}
                                                <span className="text-danger">*</span>
                                            </label>
                                            {/* <SelectWithImage2 /> */}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="col-form-label">
                                            Start Date <span className="text-danger">*</span>
                                        </label>
                                        <div className="form-wrap icon-form">
                                            <span className="form-icon">
                                                <i className="ti ti-calendar-check" />
                                            </span>
                                            <DatePicker
                                                className="form-control datetimepicker deals-details"
                                                selected={selectedDate}
                                                onChange={handleDateChange}
                                                dateFormat="dd-MM-yyyy"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="col-form-label">
                                            Due Date <span className="text-danger">*</span>
                                        </label>
                                        <div className="form-wrap icon-form">
                                            <span className="form-icon">
                                                <i className="ti ti-calendar-check" />
                                            </span>
                                            <DatePicker
                                                className="form-control datetimepicker deals-details"
                                                selected={selectedDate1}
                                                onChange={handleDateChange1}
                                                dateFormat="dd-MM-yyyy"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-wrap">
                                            <label className="col-form-label">
                                                Tags <span className="text-danger">*</span>
                                            </label>
                                            <input
                                                className="input-tags form-control"
                                                type="text"
                                                data-role="tagsinput"
                                                name="Label"
                                                defaultValue="Promotion, Collab"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-wrap">
                                            <label className="col-form-label">Priority</label>
                                            <div className="select-priority">
                                                <span className="select-icon">
                                                    <i className="ti ti-square-rounded-filled" />
                                                </span>

                                                <Select
                                                    options={priorityList}
                                                    className="select2"
                                                    placeholder="Choose"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-wrap">
                                            <label className="col-form-label">Status</label>

                                            <Select
                                                options={activeList}
                                                className="select"
                                                placeholder="Active"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-wrap">
                                            <label className="col-form-label">
                                                Description <span className="text-danger">*</span>
                                            </label>
                                            <DefaultEditor className="summernote" />
                                        </div>
                                    </div>

                                    <div className="form-wrap">
                                        <label className="col-form-label">
                                            Attachment <span className="text-danger">*</span>
                                        </label>
                                        <div className="drag-attach">
                                            <input type="file" />
                                            <div className="img-upload">
                                                <i className="ti ti-file-broken" />
                                                Upload File
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="form-wrap">
                                                <label className="col-form-label">Uploaded Files</label>
                                                <div className="upload-file upload-list">
                                                    <div>
                                                        <h6>tes.txt</h6>
                                                        <p>4.25 MB</p>
                                                    </div>
                                                    <Link to="#" className="text-danger">
                                                        <i className="ti ti-trash-x" />
                                                    </Link>
                                                </div>
                                            </div> */}

                                </div>
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

                                    </div>
                                </div>
                            </div>
                            <div className="submit-button text-end">
                                <Link to="#" className="btn btn-light sidebar-close"
                                    onClick={() => { setActivityToggle(!activityToggle) }}
                                >
                                    Cancel
                                </Link>
                                <Link to="#" className="btn btn-primary">
                                    Create
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* /Add New Task */}
            {/* Edit Task */}
            <div
                className={
                    activityToggleTwo ? "toggle-popup1 sidebar-popup" : "toggle-popup1"
                }
            >
                <div className="sidebar-layout">
                    <div className="sidebar-header">
                        <h4>Edit Task</h4>
                        <Link
                            to="#"
                            className="sidebar-close1 toggle-btn"
                        // onClick={() =>
                        //     dispatch(setActivityTogglePopupTwo(!activityToggleTwo))
                        // }
                        >
                            <i className="ti ti-x" />
                        </Link>
                    </div>
                    <div className="toggle-body">
                        <form className="toggle-height">
                            <div className="pro-create">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-wrap">
                                            <label className="col-form-label">
                                                Title <span className="text-danger">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                defaultValue="Add a form to Update Task"
                                            />
                                        </div>
                                        <div className="form-wrap">
                                            <label className="col-form-label">Category</label>

                                            <Select
                                                options={meetingMode}
                                                className="select2"
                                                placeholder="Meeting"
                                            />
                                        </div>
                                        <div className="form-wrap">
                                            <label className="col-form-label">
                                                Responsible Persons{" "}
                                                <span className="text-danger">*</span>
                                            </label>
                                            {/* <SelectWithImage2 /> */}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="col-form-label">
                                            Start Date <span className="text-danger">*</span>
                                        </label>
                                        <div className="form-wrap icon-form">
                                            <span className="form-icon">
                                                <i className="ti ti-calendar-check" />
                                            </span>
                                            <DatePicker
                                                className="form-control datetimepicker deals-details"
                                                selected={selectedDate}
                                                onChange={handleDateChange}
                                                dateFormat="dd-MM-yyyy"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="col-form-label">
                                            Due Date <span className="text-danger">*</span>
                                        </label>
                                        <div className="form-wrap icon-form">
                                            <span className="form-icon">
                                                <i className="ti ti-calendar-check" />
                                            </span>
                                            <DatePicker
                                                className="form-control datetimepicker deals-details"
                                                selected={selectedDate1}
                                                onChange={handleDateChange1}
                                                dateFormat="dd-MM-yyyy"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-wrap">
                                            <label className="col-form-label">
                                                Tags <span className="text-danger">*</span>
                                            </label>
                                            <input
                                                className="input-tags form-control"
                                                type="text"
                                                data-role="tagsinput"
                                                name="Label"
                                                defaultValue="Promotion, Collab"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-wrap">
                                            <label className="col-form-label">Priority</label>
                                            <div className="select-priority">
                                                <span className="select-icon">
                                                    <i className="ti ti-square-rounded-filled" />
                                                </span>

                                                <Select
                                                    options={priorityList}
                                                    className="select2"
                                                    placeholder="High"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-wrap">
                                            <label className="col-form-label">Status</label>

                                            <Select
                                                options={activeList}
                                                className="select2"
                                                placeholder="Active"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-wrap">
                                            <label className="col-form-label">
                                                Description <span className="text-danger">*</span>
                                            </label>
                                            <div className="summernote" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="submit-button text-end">
                                <Link to="#" className="btn btn-light sidebar-close1">
                                    Cancel
                                </Link>
                                <Link to="#" className="btn btn-primary">
                                    Save Changes
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* /Edit Task */}
            {/* Delete Task */}
            <div
                className="modal custom-modal fade"
                id="delete_activity"
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
                                <h3>Remove Task?</h3>
                                <p className="del-info">
                                    Are you sure you want to remove task you selected.
                                </p>
                                <div className="col-lg-12 text-center modal-btn">
                                    <Link
                                        to="#"
                                        className="btn btn-light"
                                        data-bs-dismiss="modal"
                                    >
                                        Cancel
                                    </Link>
                                    <Link
                                        to="#"
                                        className="btn btn-danger"
                                        data-bs-dismiss="modal"
                                    >
                                        Yes, Delete it
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Delete ActivTaskity */}
            {/* Add New View */}
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
            {/* /Add New View */}
        </>
    );
};

export default Task;
