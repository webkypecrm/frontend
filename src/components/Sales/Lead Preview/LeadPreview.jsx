import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../../ImageWithBasePath';
import DefaultEditor from "react-simple-wysiwyg";
import Activities from './Activities';
import Meeting from './Meeting';
import Comment from './Comments';
import Call from './Call';
import Proposal from './Proposal';
import axios from 'axios';
import Task from './Task';


const LeadPreview = ({ leadPreview, setLeadPreview, leadDetails }) => {

    const apiUrl = import.meta.env.VITE_API_URL;
    const Token = localStorage.getItem('token') || '';

    const [leadFollowupData, setLeadFollowupData] = useState([]);

    // console.log('leadFollowData =>', leadFollowupData)

    const fetchLeadFollowupData = async () => {
        try {
            const response = await axios.get(`${apiUrl}/lead/lead-followup/${leadDetails.leadId}`, {
                headers: {
                    Authorization: `Bearer ${Token}`
                }
            });
            // const formattedData = response.data.data.map((item) => ({
            //     ...item,
            //     key: item.leadId,
            //     tags: JSON.parse(item.tags)
            // }));

            // setData(formattedData);

            setLeadFollowupData((prev) => [...response.data.data]);

            // setIsLoading(false)

        } catch (error) {
            // setError(error)
            // setIsLoading(false)

        }
    };

    useEffect(() => {

        if (leadDetails.leadId) {
            fetchLeadFollowupData(leadDetails)
        }
    }, [leadDetails.leadId])


    return (
        <>
            <div className={`toggle-popup ${leadPreview ? "sidebar-popup" : ""}`}>
                <div className="sidebar-layout">
                    <div className="sidebar-header">
                        <h4>Lead Preview</h4>
                        <Link
                            to="#"
                            className="sidebar-close toggle-btn"
                            onClick={() => {
                                setLeadPreview(prev => !prev)
                            }}
                        >
                            <i className="ti ti-x" />
                        </Link>
                    </div>
                    <div className="col-xl-12">
                        <div className="contact-tab-wrap">
                            <ul className="contact-nav nav">
                                <li>
                                    <Link
                                        to="#"
                                        data-bs-toggle="tab"
                                        data-bs-target="#activities"
                                        className="active"
                                    >
                                        <i className="ti ti-eye" />
                                        Activities
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" data-bs-toggle="tab" data-bs-target="#calls">
                                        <i className="ti ti-phone" />
                                        Calls
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" data-bs-toggle="tab" data-bs-target="#notes">
                                        <i className="ti ti-notes" />
                                        Meeting
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" data-bs-toggle="tab" data-bs-target="#comments">
                                        <i className="ti ti-file" />
                                        Comment
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" data-bs-toggle="tab" data-bs-target="#proposal">
                                        <i className="ti ti-mail-check" />
                                        Proposal
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" data-bs-toggle="tab" data-bs-target="#task">
                                        <i className="ti ti-list-check" />
                                        Task
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        {/* Tab Content */}
                        <div className="contact-tab-view">
                            <div className="tab-content pt-0">
                                {/* Activities */}
                                <Activities leadFollowupData={leadFollowupData} />
                                {/* /Activities */}
                                {/* Calls */}
                                <Call
                                    leadFollowupData={leadFollowupData}
                                    fetchLeadFollowupData={fetchLeadFollowupData}
                                    leadDetails={leadDetails} />
                                {/* /Calls */}
                                {/* Meeting */}
                                <Meeting
                                    leadFollowupData={leadFollowupData}
                                    fetchLeadFollowupData={fetchLeadFollowupData}
                                    leadDetails={leadDetails}
                                />
                                {/* /Meeting */}
                                {/* Comments */}
                                <Comment
                                    leadFollowupData={leadFollowupData}
                                    fetchLeadFollowupData={fetchLeadFollowupData}
                                    leadDetails={leadDetails}
                                />
                                {/* /Comments */}
                                {/* Proposal */}
                                <Proposal />
                                {/* Proposal */}                                
                                <Task
                                    leadFollowupData={leadFollowupData}
                                    fetchLeadFollowupData={fetchLeadFollowupData}
                                    leadDetails={leadDetails}
                                />
                            </div>
                        </div>
                        {/* /Tab Content */}
                    </div>

                </div>
            </div>
            {/* Success Company */}
            <div className="modal custom-modal fade" id="success_mail" role="dialog">
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
                                <div className="success-popup-icon bg-light-blue">
                                    <i className="ti ti-mail-opened" />
                                </div>
                                <h3>Email Connected Successfully!!!</h3>
                                <p>
                                    Email Account is configured with “example@example.com”. Now you
                                    can access email.
                                </p>
                                <div className="col-lg-12 text-center modal-btn">
                                    <Link to="#" className="btn btn-primary">
                                        Go to email
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Success Company */}
            {/* Access */}
            <div className="modal custom-modal fade" id="access_view" role="dialog">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Access For</h5>
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
                                <div className="form-wrap icon-form">
                                    <span className="form-icon">
                                        <i className="ti ti-search" />
                                    </span>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search"
                                    />
                                </div>
                                <div className="access-wrap">
                                    <ul>
                                        <li className="select-people-checkbox">
                                            <label className="checkboxs">
                                                <input type="checkbox" />
                                                <span className="checkmarks" />
                                                <span className="people-profile">
                                                    <ImageWithBasePath
                                                        src="assets/img/profiles/avatar-19.jpg"
                                                        alt=""
                                                    />
                                                    <Link to="#">Darlee Robertson</Link>
                                                </span>
                                            </label>
                                        </li>
                                        <li className="select-people-checkbox">
                                            <label className="checkboxs">
                                                <input type="checkbox" />
                                                <span className="checkmarks" />
                                                <span className="people-profile">
                                                    <ImageWithBasePath
                                                        src="assets/img/profiles/avatar-20.jpg"
                                                        alt=""
                                                    />
                                                    <Link to="#">Sharon Roy</Link>
                                                </span>
                                            </label>
                                        </li>
                                        <li className="select-people-checkbox">
                                            <label className="checkboxs">
                                                <input type="checkbox" />
                                                <span className="checkmarks" />
                                                <span className="people-profile">
                                                    <ImageWithBasePath
                                                        src="assets/img/profiles/avatar-21.jpg"
                                                        alt=""
                                                    />
                                                    <Link to="#">Vaughan</Link>
                                                </span>
                                            </label>
                                        </li>
                                        <li className="select-people-checkbox">
                                            <label className="checkboxs">
                                                <input type="checkbox" />
                                                <span className="checkmarks" />
                                                <span className="people-profile">
                                                    <ImageWithBasePath
                                                        src="assets/img/profiles/avatar-01.jpg"
                                                        alt=""
                                                    />
                                                    <Link to="#">Jessica</Link>
                                                </span>
                                            </label>
                                        </li>
                                        <li className="select-people-checkbox">
                                            <label className="checkboxs">
                                                <input type="checkbox" />
                                                <span className="checkmarks" />
                                                <span className="people-profile">
                                                    <ImageWithBasePath
                                                        src="assets/img/profiles/avatar-16.jpg"
                                                        alt=""
                                                    />
                                                    <Link to="#">Carol Thomas</Link>
                                                </span>
                                            </label>
                                        </li>
                                        <li className="select-people-checkbox">
                                            <label className="checkboxs">
                                                <input type="checkbox" />
                                                <span className="checkmarks" />
                                                <span className="people-profile">
                                                    <ImageWithBasePath
                                                        src="assets/img/profiles/avatar-22.jpg"
                                                        alt=""
                                                    />
                                                    <Link to="#">Dawn Mercha</Link>
                                                </span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                                <div className="modal-btn text-end">
                                    <Link
                                        to="#"
                                        className="btn btn-light"
                                        data-bs-dismiss="modal"
                                    >
                                        Cancel
                                    </Link>
                                    <Link
                                        to="#"
                                        className="btn btn-primary"
                                        data-bs-dismiss="modal"
                                    >
                                        Confirm
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Access */}
            {/* Add Compose */}
            <div className="modal custom-modal fade" id="add_compose" role="dialog">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add Compose</h5>
                            <button
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                <i className="ti ti-x" />
                            </button>
                        </div>
                        <div className="modal-body p-0">
                            <form action="#">
                                <div className="form-wrap">
                                    <input
                                        type="email"
                                        placeholder="To"
                                        className="form-control"
                                    />
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-wrap">
                                            <input
                                                type="email"
                                                placeholder="Cc"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-wrap">
                                            <input
                                                type="email"
                                                placeholder="Bcc"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-wrap">
                                    <input
                                        type="text"
                                        placeholder="Subject"
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-wrap">
                                    <DefaultEditor className="summernote" />
                                </div>
                                <div className="form-wrap">
                                    <div className="text-center">
                                        <button className="btn btn-primary me-1">
                                            <span>Send</span>
                                            <i className="fa-solid fa-paper-plane ms-1" />
                                        </button>
                                        <button className="btn btn-primary me-1" type="button">
                                            <span>Draft</span>{" "}
                                            <i className="fa-regular fa-floppy-disk ms-1" />
                                        </button>
                                        <button className="btn btn-primary me-1" type="button">
                                            <span>Delete</span>{" "}
                                            <i className="fa-regular fa-trash-can ms-1" />
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Add Compose */}

            {/* Add Company */}
            <div className="toggle-popup2">
                <div className="sidebar-layout">
                    <div className="sidebar-header">
                        <h4>Add Company</h4>
                        <Link to="#" className="sidebar-close2 toggle-btn">
                            <i className="ti ti-x" />
                        </Link>
                    </div>
                    <div className="toggle-body">
                        <div className="pro-create">
                            <form action="#">
                                <div className="accordion-lists" id="list-accord">
                                    {/* Basic Info */}
                                    <div className="user-accordion-item">
                                        <Link
                                            to="#"
                                            className="accordion-wrap"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#add-basic"
                                        >
                                            <span>
                                                <i className="ti ti-user-plus" />
                                            </span>
                                            Basic Info
                                        </Link>
                                        <div
                                            className="accordion-collapse collapse show"
                                            id="add-basic"
                                            data-bs-parent="#list-accord"
                                        >
                                            <div className="content-collapse">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="profile-pic-upload">
                                                            <div className="profile-pic">
                                                                <span>
                                                                    <i className="ti ti-photo" />
                                                                </span>
                                                            </div>
                                                            <div className="upload-content">
                                                                <div className="upload-btn">
                                                                    <input type="file" />
                                                                    <span>
                                                                        <i className="ti ti-file-broken" />
                                                                        Upload File
                                                                    </span>
                                                                </div>
                                                                <p>JPG, GIF or PNG. Max size of 800K</p>
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
                                                                        id="mail"
                                                                        className="check"
                                                                        defaultChecked={true}
                                                                    />
                                                                    <label
                                                                        htmlFor="mail"
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
                                                            <label className="col-form-label">Phone 2</label>
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
                                                            <label className="col-form-label">Rating </label>
                                                            <div className="icon-form-end">
                                                                <span className="form-icon">
                                                                    <i className="ti ti-star" />
                                                                </span>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    placeholder="4.2"
                                                                    defaultValue="4.2"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-wrap img-select">
                                                            <label className="col-form-label">Owner</label>
                                                            <select className="select2">
                                                                <option>Jerald</option>
                                                                <option>Guillory</option>
                                                                <option>Jami</option>
                                                                <option>Theresa</option>
                                                                <option>Espinosa</option>
                                                            </select>
                                                            <span className="select-box-img avatar">
                                                                <ImageWithBasePath
                                                                    src="assets/img/profiles/avatar-14.jpg"
                                                                    alt=""
                                                                />
                                                            </span>
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
                                                                defaultValue="Tag1"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-wrap">
                                                            <label className="col-form-label">Deals</label>
                                                            <select className="select2">
                                                                <option>Choose</option>
                                                                <option>Collins</option>
                                                                <option>Konopelski</option>
                                                                <option>Adams</option>
                                                                <option>Schumm</option>
                                                                <option>Wisozk</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-wrap">
                                                            <label className="col-form-label">
                                                                Source <span className="text-danger">*</span>
                                                            </label>
                                                            <select className="select2">
                                                                <option>Choose</option>
                                                                <option>Phone Calls</option>
                                                                <option>Social Media</option>
                                                                <option>Referral Sites</option>
                                                                <option>Web Analytics</option>
                                                                <option>Previous Purchases</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-wrap">
                                                            <label className="col-form-label">
                                                                Industry <span className="text-danger">*</span>
                                                            </label>
                                                            <select className="select">
                                                                <option>Choose</option>
                                                                <option>Retail Industry</option>
                                                                <option>Banking</option>
                                                                <option>Hotels</option>
                                                                <option>Financial Services</option>
                                                                <option>Insurance</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-wrap">
                                                            <label className="col-form-label">
                                                                Contact <span className="text-danger">*</span>
                                                            </label>
                                                            <select className="select2">
                                                                <option>Choose</option>
                                                                <option>John</option>
                                                                <option>Guillory</option>
                                                                <option>Jami</option>
                                                                <option>Theresa</option>
                                                                <option>Espinosa</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-wrap">
                                                            <label className="col-form-label">
                                                                Currency <span className="text-danger">*</span>
                                                            </label>
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-wrap">
                                                            <label className="col-form-label">
                                                                Language <span className="text-danger">*</span>
                                                            </label>
                                                            <select className="select">
                                                                <option>Choose</option>
                                                                <option>English</option>
                                                                <option>Arabic</option>
                                                                <option>Chinese</option>
                                                                <option>Hindi</option>
                                                            </select>
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
                                            data-bs-target="#add-address"
                                        >
                                            <span>
                                                <i className="ti ti-map-pin-cog" />
                                            </span>
                                            Address Info
                                        </Link>
                                        <div
                                            className="accordion-collapse collapse"
                                            id="add-address"
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
                                                            <label className="col-form-label">Country</label>
                                                            <select className="select">
                                                                <option>Choose</option>
                                                                <option>India</option>
                                                                <option>USA</option>
                                                                <option>France</option>
                                                                <option>UK</option>
                                                                <option>UAE</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-wrap mb-0">
                                                            <label className="col-form-label">Zipcode </label>
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
                                            data-bs-target="#add-social"
                                        >
                                            <span>
                                                <i className="ti ti-social" />
                                            </span>
                                            Social Profile
                                        </Link>
                                        <div
                                            className="accordion-collapse collapse"
                                            id="add-social"
                                            data-bs-parent="#list-accord"
                                        >
                                            <div className="content-collapse">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-wrap">
                                                            <label className="col-form-label">Facebook</label>
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
                                                            <label className="col-form-label">Twitter</label>
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-wrap mb-wrap">
                                                            <label className="col-form-label">Whatsapp</label>
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-wrap mb-0">
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
                                            data-bs-target="#add-access"
                                        >
                                            <span>
                                                <i className="ti ti-accessible" />
                                            </span>
                                            Access
                                        </Link>
                                        <div
                                            className="accordion-collapse collapse"
                                            id="add-access"
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
                                                                        id="add-public"
                                                                        name="visible"
                                                                    />
                                                                    <label htmlFor="add-public">Public</label>
                                                                </div>
                                                                <div className="radio-btn">
                                                                    <input
                                                                        type="radio"
                                                                        className="status-radio"
                                                                        id="add-private"
                                                                        name="visible"
                                                                    />
                                                                    <label htmlFor="add-private">Private</label>
                                                                </div>
                                                                <div
                                                                    className="radio-btn"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#access_view"
                                                                >
                                                                    <input
                                                                        type="radio"
                                                                        className="status-radio"
                                                                        id="add-people"
                                                                        name="visible"
                                                                    />
                                                                    <label htmlFor="add-people">
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
                                                                        id="add-active"
                                                                        name="status"
                                                                        defaultChecked={true}
                                                                    />
                                                                    <label htmlFor="add-active">Active</label>
                                                                </div>
                                                                <div className="radio-btn">
                                                                    <input
                                                                        type="radio"
                                                                        className="status-radio"
                                                                        id="add-inactive"
                                                                        name="status"
                                                                    />
                                                                    <label htmlFor="add-inactive">Inactive</label>
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
            {/* /Add Company */}
            {/* Add New Deals */}
            {/* <div
                className={
                    activityToggle ? "toggle-popup sidebar-popup" : "toggle-popup"
                }
            >
                <div className="sidebar-layout">
                    <div className="sidebar-header">
                        <h4>Add New Deals</h4>
                        <Link
                            to="#"
                            className="sidebar-close toggle-btn"
                            onClick={() => dispatch(setActivityTogglePopup(!activityToggle))}
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
                                                Deal Name <span className="text-danger">*</span>
                                            </label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-wrap">
                                            <label className="col-form-label">
                                                Pipeine <span className="text-danger">*</span>
                                            </label>

                                            <Select
                                                className="select"
                                                options={salestypelist}
                                                classNamePrefix="react-select"
                                                placeholder="Choose"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-wrap">
                                            <label className="col-form-label">
                                                Status <span className="text-danger">*</span>
                                            </label>

                                            <Select
                                                className="select2"
                                                options={status}
                                                classNamePrefix="react-select"
                                                placeholder="Choose"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="form-wrap">
                                            <label className="col-form-label">
                                                Deal Value<span className="text-danger"> *</span>
                                            </label>
                                            <input className="form-control" type="text" />
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="form-wrap">
                                            <label className="col-form-label">
                                                Currency <span className="text-danger">*</span>
                                            </label>

                                            <Select
                                                className="select"
                                                options={optionssymbol}
                                                classNamePrefix="react-select"
                                                placeholder="Select"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="form-wrap">
                                            <label className="col-form-label">
                                                Period <span className="text-danger">*</span>
                                            </label>
                                            <input className="form-control" type="text" />
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="form-wrap">
                                            <label className="col-form-label">
                                                Period Value <span className="text-danger">*</span>
                                            </label>
                                            <input className="form-control" type="text" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-wrap">
                                            <label className="col-form-label">
                                                Contact <span className="text-danger">*</span>
                                            </label>
                                            <input
                                                className="input-tags form-control"
                                                type="text"
                                                data-role="tagsinput"
                                                name="Label"
                                                defaultValue="Jack, Darlee Robertson"
                                            />
                                        </div>
                                        <div className="form-wrap">
                                            <label className="col-form-label">
                                                Project <span className="text-danger">*</span>
                                            </label>
                                            <input
                                                className="input-tags form-control"
                                                type="text"
                                                data-role="tagsinput"
                                                name="Label"
                                                defaultValue="Divine dran"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-wrap">
                                            <label className="col-form-label">
                                                Due Date <span className="text-danger">*</span>
                                            </label>
                                            <div className="icon-form">
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
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-wrap">
                                            <label className="col-form-label">
                                                Expected Closing Date{" "}
                                                <span className="text-danger">*</span>
                                            </label>
                                            <div className="icon-form">
                                                <span className="form-icon">
                                                    <i className="ti ti-calendar-check" />
                                                </span>
                                                <DatePicker
                                                    className="form-control datetimepicker deals-details"
                                                    selected={selectedDate2}
                                                    onChange={handleDateChange2}
                                                    dateFormat="dd-MM-yyyy"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-wrap">
                                            <label className="col-form-label">
                                                Assignee <span className="text-danger">*</span>
                                            </label>
                                            <input
                                                className="input-tags form-control"
                                                type="text"
                                                data-role="tagsinput"
                                                name="Label"
                                                defaultValue="James"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-wrap">
                                            <label className="col-form-label">
                                                Follow Up Date <span className="text-danger">*</span>
                                            </label>
                                            <div className="icon-form">
                                                <span className="form-icon">
                                                    <i className="ti ti-calendar-check" />
                                                </span>

                                                <DatePicker
                                                    className="form-control datetimepicker deals-details"
                                                    selected={selectedDate4}
                                                    onChange={handleDateChange4}
                                                    dateFormat="dd-MM-yyyy"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-block mb-3">
                                            <label className="col-form-label">
                                                Source <span className="text-danger">*</span>
                                            </label>

                                            <Select
                                                className="select"
                                                options={socialMedia}
                                                classNamePrefix="react-select"
                                                placeholder="Select"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-block mb-3">
                                            <label className="col-form-label">
                                                Tags <span className="text-danger">*</span>
                                            </label>
                                            <TagsInput
                                                // className="input-tags form-control"
                                                value={owner}
                                                onChange={setOwner}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-block mb-3">
                                            <label className="col-form-label">
                                                Priority <span className="text-danger">*</span>
                                            </label>

                                            <Select
                                                className="select"
                                                options={priorityList}
                                                classNamePrefix="react-select"
                                                placeholder="Select"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="input-block mb-3">
                                            <label className="col-form-label">
                                                Description <span className="text-danger">*</span>
                                            </label>
                                            <div className="summernote" />
                                        </div>
                                    </div>
                                </div>
                                <div className="submit-button text-end">
                                    <Link to="#" className="btn btn-light sidebar-close">
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
            </div> */}
            {/* /Add New Deals */}

        </>
    )
}

export default LeadPreview




