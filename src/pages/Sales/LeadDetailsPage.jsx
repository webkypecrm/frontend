import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ImageWithBasePath from "../../components/ImageWithBasePath";
import Select from "react-select";
import {
    ascendingandDecending,
    companyName,
    languageOptions,
    optionssymbol,
    priorityList,
    salestypelist,
    socialMedia,
    status
} from "../../selectOption/selectOption";
import DatePicker from "react-datepicker";
import { Empty } from "antd";
import { TagsInput } from "react-tag-input-component";
import DefaultEditor from "react-simple-wysiwyg";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { all_routes } from "../Router/all_routes";
import 'react-datepicker/dist/react-datepicker.css';
import { toast } from "react-toastify";
import PageHeader from "../../components/Layouts/PageHeader";
import axios from "axios";
import AddCallComment from "../../components/Sales/LeadDetails/AddCallComment";
import RescheduleCall from "../../components/Sales/LeadDetails/RescheduleCall";
import RescheduleMeeting from "../../components/Sales/LeadDetails/RescheduleMeeting";
import CreateCall from "../../components/Sales/LeadDetails/CreateCall";
import AddMeetingComment from "../../components/Sales/LeadDetails/AddMeetingComment";
import CreateMeeting from "../../components/Sales/LeadDetails/CreateMeeting";
import CreateComment from "../../components/Sales/LeadDetails/CreateComment";
import ChangeStage from "../../components/Sales/ChangeStage";
import AddDocuments from "../../components/Sales/LeadDetails/AddDocuments";
import AddProposal from "../../components/Sales/LeadDetails/AddProposal";
import AddProposalComment from "../../components/Sales/LeadDetails/AddProposalComment";
import EditCompany from "../../components/Sales/EditCompany";
import AssignTo from "../../components/Sales/AssignTo";
import AddLeadPic from "../../components/Sales/LeadDetails/AddLeadPic";
import AddLeadOtherDetails from "../../components/Sales/LeadDetails/AddLeadOtherDetails";
import LeadSidebar from "../../components/Sales/LeadDetails/LeadSidebar";
import LeadActivities from "../../components/Sales/LeadDetails/LeadActivities";
// import AddNewContact from "../../components/Sales/LeadDetails/AddNewContact";


const LeadDetailsPage = () => {
    const params = useParams();
    const { leadId } = params;
    const apiUrl = import.meta.env.VITE_API_URL;
    const Token = localStorage.getItem('token') || '';
    const route = all_routes;
    const [activityToggle, setActivityToggle] = useState(false)
    const [activityToggleTwo, setActivityToggleTwo] = useState(false)
    const [owner, setOwner] = useState(["Collab"]);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [stageHistoryOptions, setStageHistoryOptions] = useState([]);
    const [stageOptions, setStageOptions] = useState([]);
    const [data, setData] = useState(null);
    const [followUpId, setFollowUp] = useState('');
    const [editCompany, setEditCompany] = useState(false);
    const [companyDetails, setCompanyDetails] = useState(null);

    // const [fileUrl, setFileUrl] = useState([]);
    // const [videoUrl, setVideoUrl] = useState([]);
    // const [imageUrl, setImageUrl] = useState([]);

    console.log('stageHistoryOptions ', stageHistoryOptions)
    console.log('stageOptions ', stageOptions)

    function getDate(value) {
        const isoDateString = value;
        const date = new Date(isoDateString);
        // Format date into "DD MMM YYYY"
        const options = { day: '2-digit', month: 'short', year: 'numeric' };
        const formattedDate = date.toLocaleDateString('en-GB', options);
        return formattedDate
    }

    function getTime(value) {
        const isoDateString = value;
        const date = new Date(isoDateString);

        // Get hours, minutes, and determine AM/PM
        let hours = date.getHours();
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const ampm = hours >= 12 ? 'pm' : 'am';

        // Convert to 12-hour format
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'

        const formattedTime = `${hours}:${minutes} ${ampm}`;
        return formattedTime;
    }

    function fetchLeadData() {

    }

    const [leadFollowupData, setLeadFollowupData] = useState([]);
    const [groupActivityByDate, setGroupActivityByDate] = useState({});
    const [callData, setCallData] = useState([]);
    const [meetingData, setMeetingData] = useState([]);
    const [commentData, setCommentData] = useState([]);
    const [fileData, setFileData] = useState([]);
    const [proposalData, setProposalData] = useState([]);

    console.log('callData =>', callData)
    console.log('meetingData =>', meetingData)
    console.log('leadFollowData =>', leadFollowupData)
    console.log('stageHistoryOptions =>', stageHistoryOptions)
    console.log('commentData =>', commentData)
    console.log('fileData =>', fileData)
    console.log('proposalData =>', proposalData)

    function handleRefresh() {
        fetchLeadFollowupData();
        fetchLeadDetails();
        fetchStageHistoryData();
    }

    const fetchLeadFollowupData = async () => {
        try {
            const response = await axios.get(`${apiUrl}/lead/lead-followup/${data.leadId}`, {
                headers: {
                    Authorization: `Bearer ${Token}`
                }
            });
            console.log('data =>', response.data.data)
            setLeadFollowupData((prev) => [...response.data.data]);
            const groupedData = response.data.data.reduce((acc, item) => {
                // const date = item.createdAt.split("T")[0]; 
                const date = getDate(item.createdAt);
                if (!acc[date]) {
                    acc[date] = [];
                }
                acc[date].push(item);
                return acc;
            }, {});
            setGroupActivityByDate((prev) => ({ ...groupedData }))
            const callUpdates = response.data.data.filter((item) => item.type == 'callUpdate')
            setCallData((prev) => [...callUpdates]);

            const meetingUpdate = response.data.data.filter((item) => item.type == 'meetingUpdate')
            setMeetingData((prev) => [...meetingUpdate])

            const commentUpdate = response.data.data.filter((item) => item.type == 'leadComment')
            setCommentData((prev) => [...commentUpdate])

            const fileUpdate = response.data.data.filter((item) => item.type == 'fileUpdate')
            setFileData((prev) => [...fileUpdate])

            const proposalUpdate = response.data.data.filter((item) => item.type == 'proposalUpdate')
            setProposalData((prev) => [...proposalUpdate])


        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    };

    const fetchLeadDetails = async () => {
        try {
            const response = await axios.get(`${apiUrl}/lead/lead-details/${leadId}`,
                {
                    headers: {
                        Authorization: `Bearer ${Token}`
                    }
                }
            );

            setData((prev) => ({
                ...response.data.data,
                tags: JSON.parse(response.data.data.tags)
            }));
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    const fetchStageHistoryData = async () => {
        try {
            const response = await axios.get(`${apiUrl}/lead/lead-status-history?leadId=${data.leadId}`,
                {
                    headers: {
                        Authorization: `Bearer ${Token}`
                    }
                }
            );
            const formattedData = response.data.data
            setStageHistoryOptions(() => [...formattedData]);
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    };

    const fetchStageData = async () => {
        try {
            const response = await axios.get(`${apiUrl}/master/stage-list`);
            const formattedData = response.data.data.map((item) => ({
                label: item.name,
                value: item.id
            }));
            setStageOptions(() => [...formattedData]);
        } catch (error) {
            toast.error(error.message)
        }
    };


    const latestStage = stageHistoryOptions.length > 0 ? stageHistoryOptions[stageHistoryOptions.length - 1] : null;

    // console.log("latestStage =>", latestStage)

    useEffect(() => {

        if (data?.leadId) {
            fetchLeadFollowupData()
            fetchStageHistoryData()
            fetchStageData()
        }

    }, [data?.leadId])

    useEffect(() => {

        if (leadId) {
            fetchLeadDetails()
        }
    }, [leadId])

    // console.log('data =>', data)

    const getYouTubeVideoId = (url) => {
        const regExp = /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/;
        const match = url.match(regExp);
        return match ? match[1] : null;
    };



    return (
        <>
            {/* Page Wrapper */}
            <div className="page-wrapper">
                <div className="content">
                    <div className="row">
                        <div className="col-md-12">
                            {/* Page Header */}
                            <PageHeader title="Lead Overview" pageRefresh={handleRefresh} />
                            {/* /Page Header */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            {/* Contact User */}
                            <div className="contact-head">
                                <div className="row align-items-center">
                                    <div className="col-sm-6">
                                        <ul className="contact-breadcrumb">
                                            <li>
                                                <Link to={route.leads}>
                                                    <i className="ti ti-arrow-narrow-left" />
                                                    Lead
                                                </Link>
                                            </li>
                                            <li>{data?.leadName}</li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-6 text-sm-end">
                                        <div className="contact-pagination">
                                            <p>1 of 40</p>
                                            <ul>
                                                <li>
                                                    <Link to={route.companyDetails}>
                                                        <i className="ti ti-chevron-left" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to={route.companyDetails}>
                                                        <i className="ti ti-chevron-right" />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-wrap">
                                <div className="contact-profile">
                                    <div
                                        className="avatar company-avatar"
                                        data-bs-toggle="modal"
                                        data-bs-target="#add-lead-image"
                                        style={{ cursor: 'pointer' }}
                                    >
                                        {data?.leadPicUrl ?
                                            <img src={data?.leadPicUrl} alt="lead image" />
                                            :
                                            <span className="text-icon">
                                                {data?.leadName[0]}{data?.leadName[data?.leadName?.length - 1]}
                                            </span>
                                        }

                                    </div>

                                    <div className="name-user">
                                        <h5>{data?.leadName.toUpperCase()} {"("}Id: {data?.leadId}{")"}</h5>
                                        <p style={{ marginBottom: "0px" }}>
                                            <i className="ti ti ti-mail-check me-1" />
                                            {data?.leadEmail}
                                        </p>
                                        <p style={{ marginBottom: "0px" }}>
                                            <i className="ti ti-phone me-1" />
                                            {data?.leadMobile1}
                                        </p>
                                        <p style={{ marginBottom: "0px" }}>
                                            <i className="ti ti-map-pin-pin me-1" />
                                            {data?.country}, {data?.state?.name}, {data?.city?.name}
                                        </p>
                                        {/* <div className="badge-rate">
                                            <p>
                                                <i className="fa-solid fa-star" /> 5.0
                                            </p>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="contacts-action">
                                    <Link to="#" className="btn-icon rating">
                                        <i className="fa-solid fa-star" />
                                    </Link>
                                    <OverlayTrigger
                                        placement="bottom"
                                        overlay={<Tooltip id="assign-to-tooltip">Assign To</Tooltip>}
                                    >
                                        <Link
                                            to="#"
                                            className="btn btn add-popup"
                                            style={{ border: '1px solid black' }}
                                        >
                                            <div
                                                className="table-avatar d-flex align-items-center"
                                                data-bs-toggle="modal"
                                                data-bs-target="#assigned_to"
                                                style={{ courser: 'pointer' }}

                                            >
                                                <div className="users-group">
                                                    <ul>
                                                        <li>
                                                            <Link to="#">
                                                                {data?.staff?.profilePic ?
                                                                    <span className="menu-list-icon ">
                                                                        <img src={data?.staff?.profilePic} />
                                                                    </span>
                                                                    :
                                                                    <span className="menu-list-icon ">
                                                                        <i className="ion-person" />
                                                                    </span>
                                                                }
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            {data?.assignedTo.split(' '[0])}
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </Link>
                                    </OverlayTrigger>
                                    {/* <div className="badge badge-tag badge-success-light">
                                            assign to
                                        </div> */}
                                    <Link
                                        to="#"
                                        className="btn btn-danger add-popup"
                                        onClick={() =>
                                            setActivityToggle(!activityToggle)
                                        }
                                    >
                                        <i className="ti ti-circle-plus" />
                                        Create Proposal
                                    </Link>
                                    <Link
                                        to="#"
                                        className="btn btn-primary"
                                        data-bs-toggle="modal"
                                        data-bs-target="#add_compose"
                                    >
                                        <i className="ti ti-mail" />
                                        Send Email
                                    </Link>
                                    <Link to={route.chat} className="btn-icon">
                                        <i className="ti ti-brand-hipchat" />
                                    </Link>
                                    <Link
                                        to="#"
                                        className="btn-icon edit-popup"
                                        onClick={() =>
                                            setActivityToggle(!activityToggle)
                                        }
                                    >
                                        <i className="ti ti-edit-circle" />
                                    </Link>
                                    <div className="act-dropdown">
                                        <Link
                                            to="#"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <i className="ti ti-dots-vertical" />
                                        </Link>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <Link
                                                className="dropdown-item"
                                                to="#"
                                                data-bs-toggle="modal"
                                                data-bs-target="#delete_contact"
                                            >
                                                <i className="ti ti-trash text-danger" />
                                                Delete
                                            </Link>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            {/* /Contact User */}
                        </div>
                        <div className="col-md-12">
                            <div className="contact-wrap">
                                <div className="pipeline-list">
                                    <ul>
                                        {stageOptions.map((stage) => (
                                            <li key={stage?.value} data-bs-toggle="modal" data-bs-target="#stage_update" style={{ cursor: 'pointer' }}>
                                                <Link
                                                    to="#"
                                                    className={
                                                        latestStage && latestStage?.stageId === stage?.value
                                                            ? `bg-pending`
                                                            : ''
                                                    }
                                                >
                                                    {stage?.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>


                        {/* Lead Sidebar */}
                        <LeadSidebar
                            data={data}
                            leadFollowupData={leadFollowupData}
                            setEditCompany={setEditCompany}
                            setCompanyDetails={setCompanyDetails}
                        />
                        {/* /Lead Sidebar */}

                        {/* Lead Activities */}

                        {/* <LeadActivities /> */}

                        <LeadActivities
                            data={data}
                            leadFollowupData={leadFollowupData}
                            groupActivityByDate={groupActivityByDate}
                            meetingData={meetingData}
                            callData={callData}
                            commentData={commentData}
                            fileData={fileData}
                            proposalData={proposalData}
                        />
                       
                        {/* Lead Activities*/}
                    </div>
                </div>
            </div>
            {/* /Page Wrapper */}


            <AddProposal fetchLeadFollowupData={fetchLeadFollowupData} leadDetails={data} />

            <AddDocuments fetchLeadFollowupData={fetchLeadFollowupData} leadDetails={data} />

            <AddLeadPic fetchLeadFollowupData={handleRefresh} leadDetails={data} />

            <AddLeadOtherDetails fetchLeadFollowupData={handleRefresh} leadDetails={data} />

            <AddCallComment fetchLeadFollowupData={fetchLeadFollowupData} followUpId={followUpId} />

            <RescheduleCall fetchLeadFollowupData={fetchLeadFollowupData} leadDetails={data} />

            <RescheduleMeeting fetchLeadFollowupData={fetchLeadFollowupData} leadDetails={data} />

            <AddMeetingComment fetchLeadFollowupData={fetchLeadFollowupData} followUpId={followUpId} />

            <AddProposalComment fetchLeadFollowupData={fetchLeadFollowupData} followUpId={followUpId} />

            <CreateCall leadDetails={data} fetchLeadDetails={fetchLeadFollowupData} />

            <CreateMeeting leadDetails={data} fetchLeadDetails={fetchLeadFollowupData} />

            <CreateComment leadDetails={data} fetchLeadDetails={fetchLeadFollowupData} />

            <ChangeStage leadForAssign={data} fetchLeadData={handleRefresh} followUpStage={stageHistoryOptions} />

            <AssignTo
                leadForAssign={data}
                fetchLeadData={handleRefresh}
            />

            {companyDetails &&
                <EditCompany
                    editCompany={editCompany}
                    setEditCompany={setEditCompany}
                    industryOptions={[]}
                    countryOptions={[]}
                    companyDetails={companyDetails}
                    setCompanyDetails={setCompanyDetails}
                    fetchLeadData={fetchLeadData}
                />
            }

        </>
    );
};

export default LeadDetailsPage;
