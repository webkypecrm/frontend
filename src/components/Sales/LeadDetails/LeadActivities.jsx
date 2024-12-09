import React from 'react'
import { Link } from "react-router-dom";
import Select from "react-select";
import {
    ascendingandDecending,
} from "../../../selectOption/selectOption";
import { Empty } from "antd";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import 'react-datepicker/dist/react-datepicker.css';



const LeadActivities = ({ leadFollowupData,
    groupActivityByDate,
    callData,
    meetingData,
    fileData,
    proposalData,
    commentData
}) => {


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

    const getYouTubeVideoId = (url) => {
        const regExp = /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/;
        const match = url.match(regExp);
        return match ? match[1] : null;
    };


    return (
        <div className="col-xl-9">
            <div className="contact-tab-wrap">
                <ul className="contact-nav nav">
                    <li>
                        <Link
                            to="#"
                            data-bs-toggle="tab"
                            data-bs-target="#activities"
                            className="active"
                        >
                            <i className="ti ti-alarm-minus" />
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
                        <Link to="#" data-bs-toggle="tab" data-bs-target="#lead-meeting">
                            <i className="ti ti-notes" />
                            Meeting
                        </Link>
                    </li>
                    <li>
                        <Link to="#" data-bs-toggle="tab" data-bs-target="#lead-comment">
                            <i className="ti ti-files" />
                            Comment
                        </Link>
                    </li>
                    <li>
                        <Link to="#" data-bs-toggle="tab" data-bs-target="#lead-proposal">
                            <i className="ti ti-files" />
                            Proposal
                        </Link>
                    </li>
                    {/* <li>
                    <Link to="#" data-bs-toggle="tab" data-bs-target="#lead-details-task">
                        <i className="ti ti-files" />
                        Task
                    </Link>
                </li> */}
                    <li>
                        <Link to="#" data-bs-toggle="tab" data-bs-target="#files">
                            <i className="ti ti-file" />
                            Files
                        </Link>
                    </li>
                    <li>
                        <Link to="#" data-bs-toggle="tab" data-bs-target="#email">
                            <i className="ti ti-mail-check" />
                            Email
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Tab Content */}
            <div className="contact-tab-view">
                <div className="tab-content pt-0">

                    {/* <LeadPreview /> */}

                    {/* Activities */}
                    <div className="tab-pane active show" id="activities">
                        <div className="view-header">
                            <h4>Activities</h4>
                            <ul>
                                <li>
                                    <div className="form-sort">
                                        <i className="ti ti-sort-ascending-2" />

                                        <Select
                                            className="select"
                                            options={ascendingandDecending}
                                            classNamePrefix="react-select"
                                            placeholder="Ascending"
                                        />
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="contact-activity">

                            {leadFollowupData.length == 0 &&
                                <Empty description={false} />

                            }
                            {Object.keys(groupActivityByDate).map((date) =>
                                <div key={date}>
                                    <div className="badge-day" >
                                        <i className="ti ti-calendar-check" />
                                        {date}
                                    </div>
                                    <ul>
                                        {groupActivityByDate[`${date}`].map((lead) => <li className={lead.type == 'fileUpdate' || lead.type == 'meetingUpdate' || lead.type == 'callUpdate' ? "" : "activity-wrap"} key={lead.id} style={{ marginBottom: '1rem' }}>
                                            {lead.type == 'callUpdate' && <>
                                                <div className="calls-activity" >
                                                    <div className="calls-box" >
                                                        <div className="caller-info">
                                                            <div className="calls-user">
                                                                <img
                                                                    src={lead?.staff?.profilePicUrl}
                                                                    alt="img"
                                                                />
                                                                <div style={{ display: 'grid' }}>
                                                                    {callData[0]?.id !== lead?.id && lead?.status !== 'Done' ?
                                                                        <p>
                                                                            <del style={{ color: 'red' }}><span>{lead?.staff?.name}</span> <strong> {lead?.status.toLowerCase()} </strong>
                                                                                a call on {getDate(lead.callBackDate)}, {getTime(lead.callBackTime)} </del>
                                                                        </p>
                                                                        :
                                                                        <p style={{ color: 'green' }}>
                                                                            <span>{lead?.staff?.name}</span> <strong> {lead?.status.toLowerCase()} </strong>
                                                                            a call on {getDate(lead.callBackDate)}, {getTime(lead.callBackTime)}
                                                                        </p>
                                                                    }
                                                                    <span className="badge-day" style={{ fontSize: 'x-small', margin: '0', maxWidth: '8rem' }}>{getDate(lead?.createdAt)},{getTime(lead?.createdAt)}</span>
                                                                </div>
                                                            </div>
                                                            <div className="calls-action">
                                                                <div className="dropdown call-drop">
                                                                    {lead?.status == 'Done' ?
                                                                        <Link
                                                                            to="#"
                                                                            aria-expanded="false"
                                                                        >
                                                                            <img
                                                                                src="/assets/img/call-done.jpg"
                                                                                alt="img"
                                                                                style={{ width: '50px', height: '50px' }}
                                                                            />

                                                                        </Link>
                                                                        :
                                                                        ''
                                                                    }
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p>
                                                            {lead.lastCallSummary} <br />
                                                        </p>
                                                        {lead?.comment &&
                                                            <div className="reply-box"
                                                                style={{
                                                                    backgroundColor: '#F9F9FC',
                                                                    borderRadius: "5px",
                                                                    margin: "0 0 15px",
                                                                    padding: "15px"
                                                                }}>
                                                                <p>
                                                                    {lead?.comment}
                                                                </p>
                                                            </div>
                                                        }
                                                    </div>
                                                </div>
                                            </>
                                            }
                                            {
                                                lead.type == 'leadComment' &&
                                                <>
                                                    <span className="activity-icon bg-pending">
                                                        <i className="ti ti-mail-code" />
                                                    </span>
                                                    <div className="activity-info">
                                                        <h6>  Comment was posted by
                                                            <span className="avatar-xs">
                                                                <img
                                                                    src={lead?.staff?.profilePicUrl}
                                                                    alt="img"
                                                                />
                                                            </span>{" "}
                                                            {lead?.staff?.name.split(' ')[0]}
                                                        </h6>
                                                        <p>{lead?.comment}</p>
                                                        <p>{lead?.createdAtTime}</p>
                                                    </div>
                                                </>
                                            }
                                            {
                                                lead.type == 'meetingUpdate' &&
                                                <>
                                                    <div className="notes-activity" >
                                                        <div className="calls-box" >
                                                            <div className="caller-info">
                                                                <div className="calls-user">
                                                                    <img
                                                                        src={lead?.staff?.profilePicUrl}
                                                                        alt="img"
                                                                    />
                                                                    <div style={{ display: 'grid' }}>
                                                                        {meetingData[0]?.id !== lead?.id && lead?.status !== 'Done' ?
                                                                            <del style={{ color: 'red' }}><p>
                                                                                <span>{lead?.staff?.name}</span> <strong>{lead?.status.toLowerCase()}</strong> a meeting on {getDate(lead.meetingDate)}, {getTime(lead.meetingTime)}
                                                                            </p>
                                                                            </del>
                                                                            :
                                                                            <p style={{ color: 'green' }}>
                                                                                <span>{lead?.staff?.name}</span> <strong>{lead?.status.toLowerCase()}</strong> a meeting on {getDate(lead.meetingDate)}, {getTime(lead.meetingTime)}
                                                                            </p>
                                                                        }
                                                                        <span className="badge-day" style={{ fontSize: 'x-small', margin: '0', maxWidth: '8rem' }}>{getDate(lead?.createdAt)},{getTime(lead?.createdAt)}</span>
                                                                    </div>
                                                                </div>
                                                                {/* {index === 0 && */}
                                                                <div className="calls-action">
                                                                    <div className="dropdown call-drop">
                                                                        {lead?.status == 'Done' ?
                                                                            <Link
                                                                                to="#"
                                                                                aria-expanded="false"
                                                                            >
                                                                                <img
                                                                                    src="/assets/img/meeting-done.jpg"
                                                                                    alt="img"
                                                                                    style={{ width: '38px', height: '40px' }}
                                                                                />
                                                                            </Link>
                                                                            :
                                                                            ''
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <p>
                                                                {lead?.lastCallSummary}
                                                            </p>
                                                            <div className="upcoming-info">
                                                                <div className="row">
                                                                    <div className="col-sm-4">
                                                                        <p>Meeting Type</p>
                                                                        <div className="dropdown">
                                                                            <Link
                                                                                to="#"
                                                                                className="dropdown-toggle"
                                                                                data-bs-toggle="dropdown"
                                                                                aria-expanded="false"
                                                                            >
                                                                                <i className="ti ti-clock-edit me-1" />
                                                                                {lead?.meetingType.toUpperCase()}
                                                                                <i className="ti ti-chevron-down ms-1" />
                                                                            </Link>
                                                                            <div className="dropdown-menu dropdown-menu-right">
                                                                                <Link className="dropdown-item" to="#">
                                                                                    offline
                                                                                </Link>
                                                                                <Link className="dropdown-item" to="#">
                                                                                    online
                                                                                </Link>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-4">
                                                                        <p>{lead?.meetingType === 'offline' ? 'Address' : 'URL'}</p>

                                                                        <div className="dropdown">
                                                                            <Link
                                                                                to={lead?.meetingType === 'offline' ? '#' : lead?.meetingVenue}
                                                                                className="dropdown-toggle"
                                                                                aria-expanded="false"
                                                                            >
                                                                                <i className="ti ti-square-rounded-filled me-1 text-success circle" />
                                                                                {lead?.meetingVenue}
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {
                                                                lead?.comment &&
                                                                <div className="reply-box">
                                                                    <p>
                                                                        {lead?.comment}
                                                                    </p>
                                                                </div>
                                                            }
                                                        </div>
                                                    </div>
                                                </>
                                            }
                                            {
                                                lead.type == 'stageUpdate' &&
                                                <>
                                                    <span className="activity-icon bg-pink">
                                                        <i className="ti ti-analyze" />
                                                    </span>
                                                    <div className="activity-info">
                                                        <h6>
                                                            Lead stage updated to {lead?.contactType.toLowerCase()}
                                                        </h6>
                                                        <p>{lead?.createdAtTime}</p>
                                                    </div>
                                                </>
                                            }
                                            {
                                                lead.type == 'assignUpdate' &&
                                                <>
                                                    <span className="activity-icon bg-tertiary">
                                                        <i className="ti ti-timeline-event-exclamation" />
                                                    </span>
                                                    <div className="activity-info">
                                                        <h6>
                                                            Lead has been successfully assigned to
                                                            <span className="avatar-xs">
                                                                <img
                                                                    src={lead?.attachment}
                                                                    alt="img"
                                                                />
                                                            </span>
                                                            {lead?.contactType}
                                                        </h6>
                                                        <p>{lead?.createdAtTime}</p>
                                                        {
                                                            lead?.comment &&
                                                            <div className="reply-box">
                                                                <p>
                                                                    {lead?.comment}
                                                                </p>
                                                            </div>
                                                        }
                                                    </div>
                                                </>
                                            }
                                            {
                                                lead.type == 'fileUpdate' &&
                                                <>
                                                    <div className="files-activity" style={{ width: "100%" }}>
                                                        <div className="files-wrap"  >
                                                            <div className="row align-items-center">
                                                                <div className="col-md-8">
                                                                    <div className="file-info">
                                                                        <div className="file-user" >
                                                                            <div style={{ display: 'flex' }}>
                                                                                <img
                                                                                    src={lead?.staff?.profilePicUrl}
                                                                                    alt="img"
                                                                                />
                                                                            </div>
                                                                            <div style={{ display: 'grid' }}>
                                                                                <p>{lead?.staff?.name} uploaded file</p>
                                                                                <p style={{ fontSize: 'x-small', margin: '0', maxWidth: '8rem' }}>
                                                                                    {getDate(lead?.leadDocument?.createdAt)},{getTime(lead?.leadDocument?.createdAt)}
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <h4>{lead?.leadDocument?.fileName}</h4>
                                                                        <p>
                                                                            {lead?.leadDocument?.comment}
                                                                        </p>

                                                                    </div>
                                                                </div>
                                                                <div className="col-md-4 text-md-end">
                                                                    <ul className="file-action">

                                                                        <li>
                                                                            <Link className="badge badge-tag badge-danger-light" to={lead?.leadDocument?.attachmentUrl}>
                                                                                <span>{lead?.leadDocument?.fileType}</span>
                                                                                <Link className="badge badge-tag badge-danger-light" to={lead?.leadDocument?.attachmentUrl}>
                                                                                    {/* <span>{lead?.leadDocument?.fileType}</span> */}

                                                                                    {lead?.leadDocument?.fileType == 'image' &&
                                                                                        <div className="note-download">
                                                                                            <div className="note-info">
                                                                                                <span className="note-icon">
                                                                                                    <img src={lead?.leadDocument?.attachmentUrl} alt="Preview" style={{ width: '300px', height: 'auto' }} />
                                                                                                </span>
                                                                                            </div>

                                                                                        </div>
                                                                                    }
                                                                                    {lead?.leadDocument?.fileType == 'jpg' &&
                                                                                        <div className="note-download">
                                                                                            <div className="note-info">
                                                                                                <span className="note-icon">
                                                                                                    <img src={lead?.leadDocument?.attachmentUrl} alt="Preview" style={{ width: '300px', height: 'auto' }} />
                                                                                                </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    }
                                                                                    {lead?.leadDocument?.fileType == 'png' &&
                                                                                        <div className="note-download">
                                                                                            <div className="note-info">
                                                                                                <span className="note-icon">
                                                                                                    <img src={lead?.leadDocument?.attachmentUrl} alt="Preview" style={{ width: '300px', height: 'auto' }} />
                                                                                                </span>
                                                                                            </div>

                                                                                        </div>
                                                                                    }

                                                                                    {lead?.leadDocument?.fileType == 'pdf' &&
                                                                                        <div className="note-download">
                                                                                            <div className="note-info">
                                                                                                <span className="note-icon">
                                                                                                    <img src="/assets/img/pdf-icon.png" alt="Preview" style={{ width: '80px', height: '80px' }} />
                                                                                                </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    }


                                                                                    {/* {lead?.leadDocument?.fileType === 'video' && lead?.leadDocument?.language && (
                                                                                    <div className="note-download">
                                                                                        <div className="note-info">
                                                                                            <span className="note-icon">
                                                                                                <video width="100%" height="100px" controls>
                                                                                                    <source src={lead?.leadDocument?.language} type="video/mp4" />
                                                                                                    Your browser does not support the video tag.
                                                                                                </video>
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                )} */}

                                                                                    {lead?.leadDocument?.fileType === 'video' && lead?.leadDocument?.language && (
                                                                                        <div className="note-download">
                                                                                            <div className="note-info">
                                                                                                <span className="note-icon">
                                                                                                    {lead?.leadDocument?.language.includes("youtube.com") || lead?.leadDocument?.language.includes("youtu.be") ? (
                                                                                                        // YouTube video
                                                                                                        <iframe
                                                                                                            width="100%"
                                                                                                            height="100px"
                                                                                                            src={`https://www.youtube.com/embed/${getYouTubeVideoId(lead.leadDocument.language)}`}
                                                                                                            title="YouTube video player"
                                                                                                            frameBorder="0"
                                                                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                                                                            allowFullScreen
                                                                                                        ></iframe>
                                                                                                    ) : (
                                                                                                        // Non-YouTube video
                                                                                                        <video width="100%" height="100px" controls>
                                                                                                            <source src={lead.leadDocument.language} type="video/mp4" />
                                                                                                            Your browser does not support the video tag.
                                                                                                        </video>
                                                                                                    )}
                                                                                                </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    )}

                                                                                    {lead?.leadDocument?.fileType === 'zip' && (
                                                                                        <div className="note-download">
                                                                                            <div className="note-info">
                                                                                                <span className="note-icon">
                                                                                                    <img src="/assets/img/zip-icon.png" alt="Preview" style={{ width: '80px', height: '80px' }} />
                                                                                                </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    )}

                                                                                    {lead?.leadDocument?.fileType === 'csv' && (
                                                                                        <div className="note-download">
                                                                                            <div className="note-info">
                                                                                                <span className="note-icon">
                                                                                                    <img src="/assets/img/excel-icon.png" alt="Preview" style={{ width: '80px', height: '80px' }} />
                                                                                                </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    )}

                                                                                </Link>
                                                                                <i className="ti ti-arrow-down" />
                                                                            </Link>
                                                                        </li>

                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            }
                                            {
                                                lead.type == 'proposalUpdate' &&
                                                <>
                                                    <div className="files-activity" style={{ width: "100%" }}>
                                                        <div className="activity-info">
                                                            <div className="notes-activity">
                                                                <div className="calls-box">
                                                                    <div className="caller-info">
                                                                        <div className="calls-user">
                                                                            <img
                                                                                src={lead?.staff?.profilePicUrl}
                                                                                alt="img"
                                                                            />
                                                                            <div>
                                                                                <h6>{lead?.staff?.name} uploaded a proposal update</h6>
                                                                                <p>{getDate(lead?.createdAt)}, {getTime(lead?.createdAt)}</p>
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                    <h5>{lead?.proposal?.title}</h5>
                                                                    <p>
                                                                        {lead?.proposal?.comment}
                                                                    </p>
                                                                    <ul>
                                                                        <li>
                                                                            <div className="note-download">
                                                                                <div className="note-info">
                                                                                    <span className="note-icon bg-secondary-success">
                                                                                        <i className="ti ti-file-spreadsheet" />
                                                                                    </span>
                                                                                    <div>
                                                                                        <h6>{lead?.proposal?.other}</h6>
                                                                                    </div>
                                                                                </div>
                                                                                <Link to={lead?.proposal?.attachment1Url}>
                                                                                    <i className="ti ti-arrow-down" />
                                                                                </Link>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                    {lead?.proposal?.proposalComment.map((comment) =>
                                                                        <div className="reply-box" style={{ display: 'grid' }}>
                                                                            <p> STATUS : {comment?.status.toUpperCase()}</p>
                                                                            <p >
                                                                                {comment?.comment}
                                                                            </p>
                                                                        </div>)}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            }
                                            {
                                                lead.type == 'newLead' &&
                                                <>
                                                    <div className="activity-info">
                                                        <h6>
                                                            <span className="avatar-xs">
                                                                <img
                                                                    src={lead?.attachment}
                                                                    alt="img"
                                                                />
                                                            </span>
                                                            {lead?.contactType} added New Lead

                                                        </h6>
                                                        <p>{lead?.createdAtTime}</p>
                                                    </div>
                                                </>
                                            }
                                        </li>)}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                    {/* /Activities */}
                    {/* Meeting */}
                    <div className="tab-pane fade" id="lead-meeting">
                        <div className="view-header">
                            <h4>Meeting</h4>
                            <ul>
                                <li>
                                    <div className="form-sort">
                                        <i className="ti ti-sort-ascending-2" />
                                        <Select
                                            className="select"
                                            options={ascendingandDecending}
                                            classNamePrefix="react-select"
                                            placeholder="Ascending"
                                        />
                                    </div>
                                </li>
                                {(meetingData[0]?.status == 'Done' || meetingData[0]?.status == '' || meetingData.length === 0) &&
                                    <li>
                                        <Link
                                            to="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#create_meeting"
                                            className="com-add"
                                        >
                                            <i className="ti ti-circle-plus me-1" />
                                            Add New
                                        </Link>
                                    </li>
                                }
                            </ul>
                        </div>
                        <div className="notes-activity" >
                            {meetingData.length == 0 && <Empty description={false} />}
                            {meetingData.map((data, index) => <div className="calls-box" key={data?.id}>
                                <div className="caller-info">
                                    <div className="calls-user">
                                        <img
                                            src={data?.staff?.profilePicUrl}
                                            alt="img"
                                        />
                                        <div style={{ display: 'grid' }}>
                                            {index > 0 ?
                                                <del style={{ color: 'red' }}><p>
                                                    <span>{data?.staff?.name}</span> <strong>{data?.status.toLowerCase()}</strong> a meeting on {getDate(data.meetingDate)}, {getTime(data.meetingTime)}
                                                </p>
                                                </del>
                                                :
                                                <p style={{ color: 'green' }}>
                                                    <span>{data?.staff?.name}</span> <strong>{data?.status.toLowerCase()}</strong> a meeting on {getDate(data.meetingDate)}, {getTime(data.meetingTime)}
                                                </p>}
                                            <span className="badge-day" style={{ fontSize: 'x-small', margin: '0', maxWidth: '8rem' }}>{getDate(data?.createdAt)},{getTime(data?.createdAt)}</span>
                                        </div>
                                    </div>
                                    {index === 0 &&
                                        <div className="calls-action">
                                            <div className="dropdown call-drop">
                                                {data?.status == 'Done' ?
                                                    <Link
                                                        to="#"
                                                        // className="dropdown-toggle bg-success"
                                                        aria-expanded="false"
                                                    >
                                                        {/* <i className="ti ti-square-check" /> */}
                                                        <img
                                                            src="/assets/img/meeting-done.jpg"
                                                            alt="img"
                                                            style={{ width: '38px', height: '40px' }}
                                                        />

                                                    </Link>
                                                    :
                                                    <OverlayTrigger
                                                        placement="bottom"
                                                        overlay={<Tooltip id="mark-meeting-tooltip">Mark Done</Tooltip>}
                                                    >
                                                        <Link
                                                            to="#"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#create_meeting_comment"
                                                            className="dropdown-toggle bg-pending"
                                                            aria-expanded="false"
                                                            onClick={() => {
                                                                setFollowUp(data?.id)
                                                            }}
                                                        >
                                                            <i className="ti ti-square-check" />
                                                            {/* Mark Done */}
                                                        </Link>
                                                    </OverlayTrigger>

                                                }
                                            </div>
                                            {data?.status !== 'Done' &&
                                                <div className="dropdown call-drop">
                                                    {

                                                        <OverlayTrigger
                                                            placement="bottom"
                                                            overlay={<Tooltip id="rescheduled-meeting-tooltip">Re-scheduled Meeting</Tooltip>}
                                                        >
                                                            <Link
                                                                to="#"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#create_meeting_rescheduled"
                                                                className="dropdown-toggle"
                                                                aria-expanded="false"
                                                                onClick={() => {
                                                                    setFollowUp(data?.id)
                                                                }}
                                                            >
                                                                <i className="ti ti-calendar-month" />
                                                                {/* Re-scheduled */}
                                                            </Link>
                                                        </OverlayTrigger>

                                                    }
                                                </div>
                                            }

                                        </div>
                                    }

                                </div>
                                <p>
                                    {data?.lastCallSummary}
                                </p>
                                <div className="upcoming-info">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <p>Meeting Type</p>
                                            <div className="dropdown">
                                                <Link
                                                    to="#"
                                                    className="dropdown-toggle"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    <i className="ti ti-clock-edit me-1" />
                                                    {data?.meetingType.toUpperCase()}
                                                    <i className="ti ti-chevron-down ms-1" />
                                                </Link>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <Link className="dropdown-item" to="#">
                                                        offline
                                                    </Link>
                                                    <Link className="dropdown-item" to="#">
                                                        online
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <p>{data?.meetingType === 'offline' ? 'Address' : 'URL'}</p>

                                            <div className="dropdown">
                                                <Link
                                                    to={data?.meetingType === 'offline' ? '#' : data?.meetingVenue}
                                                    className="dropdown-toggle"
                                                    aria-expanded="false"
                                                >
                                                    <i className="ti ti-square-rounded-filled me-1 text-success circle" />
                                                    {data?.meetingVenue}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {
                                    data?.comment &&
                                    <div className="reply-box">
                                        <p>
                                            {data?.comment}
                                        </p>
                                    </div>
                                }

                            </div>
                            )}
                        </div>
                    </div>
                    {/* /Meeting */}
                    {/* Calls */}
                    <div className="tab-pane fade" id="calls">
                        <div className="view-header">
                            <h4>Calls</h4>
                            {(callData[0]?.status == 'Done' || callData[0]?.status == '' || callData.length === 0) &&
                                <ul>
                                    <li>
                                        <Link
                                            to="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#create_call"
                                            className="com-add"
                                        >
                                            <i className="ti ti-circle-plus me-1" />
                                            Add New
                                        </Link>
                                    </li>
                                </ul>
                            }
                        </div>
                        <div className="calls-activity" >
                            {callData.length == 0 && <Empty description={false} />}
                            {callData.map((data, index) => <div className="calls-box" key={data.id}>
                                <div className="caller-info">
                                    <div className="calls-user">
                                        <img
                                            src={data?.staff?.profilePicUrl}
                                            alt="img"
                                        />
                                        <div style={{ display: 'grid' }}>
                                            {index > 0 ?
                                                <p>
                                                    <del style={{ color: 'red' }}><span>{data?.staff?.name}</span> <strong> {data?.status.toLowerCase()} </strong>
                                                        a call on {getDate(data.callBackDate)}, {getTime(data.callBackTime)} </del>
                                                </p>
                                                :
                                                <p style={{ color: 'green' }}>
                                                    <span>{data?.staff?.name}</span> <strong> {data?.status.toLowerCase()} </strong>
                                                    a call on {getDate(data.callBackDate)}, {getTime(data.callBackTime)}
                                                </p>
                                            }

                                            <span className="badge-day" style={{ fontSize: 'x-small', margin: '0', maxWidth: '8rem' }}>{getDate(data?.createdAt)},{getTime(data?.createdAt)}</span>
                                        </div>
                                    </div>
                                    {index === 0 &&
                                        <div className="calls-action">
                                            <div className="dropdown call-drop">
                                                {data?.status == 'Done' ?
                                                    <Link
                                                        to="#"
                                                        // className="dropdown-toggle bg-success"
                                                        aria-expanded="false"
                                                    >
                                                        {/* <i className="ti ti-square-check" /> */}
                                                        <img
                                                            src="/assets/img/call-done.jpg"
                                                            alt="img"
                                                            style={{ width: '50px', height: '50px' }}
                                                        />

                                                    </Link>
                                                    :
                                                    <OverlayTrigger
                                                        placement="bottom"
                                                        overlay={<Tooltip id="mark-done-tooltip ">
                                                            Mark Done
                                                        </Tooltip>}
                                                    >
                                                        <Link
                                                            to="#"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#create_call_comment"
                                                            className="dropdown-toggle bg-pending"
                                                            aria-expanded="false"
                                                            onClick={() => {
                                                                setFollowUp(data?.id)
                                                            }}
                                                        >
                                                            <i className="ti ti-square-check" />
                                                            {/* Mark Done */}
                                                        </Link>
                                                    </OverlayTrigger>

                                                }
                                            </div>
                                            {data.status !== 'Done' &&
                                                <div className="dropdown call-drop">
                                                    {
                                                        <OverlayTrigger
                                                            placement="bottom"
                                                            overlay={<Tooltip id="rescheduled-call-tooltip">Re-scheduled call</Tooltip>}
                                                        >
                                                            <Link
                                                                to="#"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#create_call_rescheduled"
                                                                className="dropdown-toggle"
                                                                aria-expanded="false"
                                                                onClick={() => {
                                                                    setFollowUp(data?.id)
                                                                }}
                                                            >
                                                                <i className="ti ti-calendar-month" />
                                                                {/* Re-scheduled */}
                                                            </Link>
                                                        </OverlayTrigger>

                                                    }
                                                </div>
                                            }

                                        </div>
                                    }

                                </div>
                                <p>
                                    {data.lastCallSummary} <br />
                                </p>
                                {data?.comment &&
                                    <div className="reply-box"
                                        style={{
                                            backgroundColor: '#F9F9FC',
                                            borderRadius: "5px",
                                            margin: "0 0 15px",
                                            padding: "15px"
                                        }}>
                                        <p>
                                            {data?.comment}
                                        </p>
                                    </div>
                                }
                            </div>
                            )}
                        </div>
                    </div>
                    {/* /Calls */}
                    {/* Comment */}
                    <div className="tab-pane fade" id="lead-comment">
                        <div className="view-header">
                            <h4>Comment</h4>
                            <ul>
                                <li>
                                    <div className="form-sort">
                                        <i className="ti ti-sort-ascending-2" />
                                        <Select
                                            className="select"
                                            options={ascendingandDecending}
                                            classNamePrefix="react-select"
                                            placeholder="Ascending"
                                        />
                                    </div>
                                </li>
                                <li>
                                    <Link
                                        to="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#create_comment"
                                        className="com-add"
                                    >
                                        <i className="ti ti-circle-plus me-1" />
                                        Add New
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="notes-activity">
                            {commentData.length == 0 && <Empty description={false} />}
                            {commentData.map((data) => <div className="calls-box" key={data.id}>
                                <div className="caller-info">
                                    <div className="calls-user">
                                        <img
                                            src={data?.staff?.profilePicUrl}
                                            alt="img"
                                        />
                                        <div style={{ display: 'grid' }}>
                                            <p>
                                                <span>{data?.staff?.name}</span>
                                            </p>
                                            <span className="badge-day" style={{ fontSize: 'x-small', margin: '0', maxWidth: '8rem' }}>{getDate(data?.createdAt)},{getTime(data?.createdAt)}</span>
                                        </div>
                                    </div>
                                    <div className="calls-action">
                                        <div className="dropdown action-drop">
                                            <Link
                                                to="#"
                                                className="dropdown-toggle"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                <i className="ti ti-dots-vertical" />
                                            </Link>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <Link className="dropdown-item" to="#">
                                                    <i className="ti ti-edit text-blue" />
                                                    Edit
                                                </Link>
                                                <Link className="dropdown-item" to="#">
                                                    <i className="ti ti-trash text-danger" />
                                                    Delete
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p>
                                    {data?.comment}
                                </p>
                            </div>

                            )}
                        </div>
                    </div>
                    {/* /Comment */}
                    {/* Proposal */}
                    <div className="tab-pane fade" id="lead-proposal">
                        <div className="view-header">
                            <h4>Proposal</h4>
                            <ul>
                                <li>
                                    <div className="form-sort">
                                        <i className="ti ti-sort-ascending-2" />
                                        <Select
                                            className="select"
                                            options={ascendingandDecending}
                                            classNamePrefix="react-select"
                                            placeholder="Ascending"
                                        />
                                    </div>
                                </li>
                                <li>
                                    <Link
                                        to="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#create_lead_proposal"
                                        className="com-add"
                                    >
                                        <i className="ti ti-circle-plus me-1" />
                                        Add New
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="notes-activity">
                            {proposalData.length === 0 && <Empty description={false} />}
                            {proposalData.map((proposal) => <div className="calls-box" key={proposal?.id}>
                                <div className="caller-info">
                                    <div className="calls-user">
                                        <img
                                            src={proposal?.staff?.profilePicUrl}
                                            alt="img"
                                        />
                                        <div>
                                            <h6>{proposal?.staff?.name} uploaded a proposal update</h6>
                                            <p>{getDate(proposal?.createdAt)}, {getTime(proposal?.createdAt)}</p>
                                        </div>
                                    </div>
                                    <div className="calls-action">
                                        <div className="dropdown action-drop">
                                            <Link
                                                to="#"
                                                className="dropdown-toggle"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                <i className="ti ti-dots-vertical" />
                                            </Link>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <Link className="dropdown-item" to="#">
                                                    <i className="ti ti-edit text-blue" />
                                                    Edit
                                                </Link>
                                                <Link className="dropdown-item" to="#">
                                                    <i className="ti ti-trash text-danger" />
                                                    Delete
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h5>{proposal?.proposal?.title}</h5>
                                <p>
                                    {proposal?.proposal?.comment}
                                </p>
                                <ul>
                                    <li>
                                        <div className="note-download">
                                            <div className="note-info">
                                                <span className="note-icon bg-secondary-success">
                                                    <i className="ti ti-file-spreadsheet" />
                                                </span>
                                                <div>
                                                    <h6>{proposal?.proposal?.other}</h6>
                                                </div>
                                            </div>
                                            <Link to={proposal?.proposal?.attachment1Url}>
                                                <i className="ti ti-arrow-down" />
                                            </Link>
                                        </div>
                                    </li>

                                </ul>
                                <div className="notes-editor">
                                    <div className="note-edit-wrap">
                                        <div className="summernote">
                                            Write a new comment, send your team notification
                                            by typing @ followed by their name
                                        </div>
                                        <div className="text-end note-btns">
                                            <Link to="#" className="btn btn-light add-cancel">
                                                Cancel
                                            </Link>
                                            <Link to="#" className="btn btn-primary">
                                                Save
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="text-end">
                                        <Link to="#"
                                            className="add-comment"
                                            data-bs-toggle="modal"
                                            data-bs-target="#create_proposal_comment"
                                            onClick={() => {
                                                setFollowUp(proposal?.id)
                                            }}
                                        >
                                            <i className="ti ti-square-plus me-1" />
                                            Add Comment & Changes on this proposal
                                        </Link>
                                    </div>
                                </div>

                                {proposal?.proposal?.proposalComment.map((comment) =>
                                    <div className="reply-box" style={{ display: 'grid' }}>
                                        <p> Status : {comment.status.charAt(0).toUpperCase() + comment.status.slice(1)}</p>
                                        <p >
                                            {comment?.comment}
                                        </p>
                                    </div>)}


                            </div>)}


                        </div>
                    </div>
                    {/* /Proposal */}
                    {/* Files */}
                    <div className="tab-pane fade" id="files">
                        <div className="view-header">
                            <h4>Files</h4>
                        </div>
                        <div className="files-activity">
                            <div className="files-wrap">
                                <div className="row align-items-center">
                                    <div className="col-md-8">
                                        <div className="file-info">
                                            <h4>Manage Documents</h4>
                                            <p>
                                                Send customizable quotes, proposals and
                                                contracts to close deals faster.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 text-md-end">
                                        <ul className="file-action">
                                            <li>
                                                <Link
                                                    to="#"
                                                    className="btn btn-primary"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#create_lead_file"
                                                >
                                                    Create Document
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {fileData.map((file) => <div className="files-wrap" key={file.id}>
                                <div className="row align-items-center">
                                    <div className="col-md-8">
                                        <div className="file-info">
                                            <div className="file-user" >
                                                <div style={{ display: 'flex' }}>
                                                    <img
                                                        src={file?.staff?.profilePicUrl}
                                                        alt="img"
                                                    />
                                                </div>
                                                <div style={{ display: 'grid' }}>
                                                    <p>{file?.staff?.name} uploaded file</p>
                                                    <p style={{ fontSize: 'x-small', margin: '0', maxWidth: '8rem' }}>{getDate(file?.leadDocument?.createdAt)},{getTime(file?.leadDocument?.createdAt)}</p>
                                                </div>

                                            </div>
                                            <h4>{file?.leadDocument?.fileName}</h4>
                                            <p>
                                                {file?.leadDocument?.comment}
                                            </p>
                                            <p>
                                                {/* {file?.leadDocument?.createdAt} */}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 text-md-end">
                                        <ul className="file-action">
                                            <li>
                                                <Link className="badge badge-tag badge-danger-light" to={file?.leadDocument?.fileType === 'video' ? file?.leadDocument?.language : file?.leadDocument?.attachment1Url}>

                                                    <span>{file?.leadDocument?.fileType}</span>
                                                    {file?.leadDocument?.fileType == 'image' &&
                                                        <div className="note-download">
                                                            <div className="note-info">
                                                                <span className="note-icon">
                                                                    <img src={file?.leadDocument?.attachmentUrl} alt="Preview" style={{ width: '300px', height: 'auto' }} />
                                                                </span>
                                                            </div>

                                                        </div>
                                                    }
                                                    {file?.leadDocument?.fileType == 'jpg' &&
                                                        <div className="note-download">
                                                            <div className="note-info">
                                                                <span className="note-icon">
                                                                    <img src={file?.leadDocument?.attachmentUrl} alt="Preview" style={{ width: '300px', height: 'auto' }} />
                                                                </span>
                                                            </div>
                                                        </div>
                                                    }
                                                    {file?.leadDocument?.fileType == 'png' &&
                                                        <div className="note-download">
                                                            <div className="note-info">
                                                                <span className="note-icon">
                                                                    <img src={file?.leadDocument?.attachmentUrl} alt="Preview" style={{ width: '300px', height: 'auto' }} />
                                                                </span>
                                                            </div>

                                                        </div>
                                                    }

                                                    {file?.leadDocument?.fileType == 'pdf' &&
                                                        <div className="note-download">
                                                            <div className="note-info">
                                                                <span className="note-icon">
                                                                    <img src="/assets/img/pdf-icon.png" alt="Preview" style={{ width: '100px', height: '100px' }} />
                                                                </span>
                                                            </div>
                                                        </div>
                                                    }




                                                    {file?.leadDocument?.fileType === 'video' && file?.leadDocument?.language && (
                                                        <div className="note-download">
                                                            <div className="note-info">
                                                                <span className="note-icon">
                                                                    {file.leadDocument.language.includes("youtube.com") || file.leadDocument.language.includes("youtu.be") ? (
                                                                        // YouTube video
                                                                        <iframe
                                                                            width="100%"
                                                                            height="100px"
                                                                            src={`https://www.youtube.com/embed/${getYouTubeVideoId(file.leadDocument.language)}`}
                                                                            title="YouTube video player"
                                                                            frameBorder="0"
                                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                                            allowFullScreen
                                                                        ></iframe>
                                                                    ) : (
                                                                        // Non-YouTube video
                                                                        <video width="100%" height="100px" controls>
                                                                            <source src={file.leadDocument.language} type="video/mp4" />
                                                                            Your browser does not support the video tag.
                                                                        </video>
                                                                    )}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    )}


                                                    {file?.leadDocument?.fileType === 'zip' && (
                                                        <div className="note-download">
                                                            <div className="note-info">
                                                                <span className="note-icon">
                                                                    <img src="/assets/img/zip-icon.png" alt="Preview" style={{ width: '100px', height: '100px' }} />
                                                                </span>
                                                            </div>
                                                        </div>
                                                    )}

                                                    {file?.leadDocument?.fileType === 'csv' && (
                                                        <div className="note-download">
                                                            <div className="note-info">
                                                                <span className="note-icon">
                                                                    <img src="/assets/img/excel-icon.png" alt="Preview" style={{ width: '100px', height: '100px' }} />
                                                                </span>
                                                            </div>
                                                        </div>
                                                    )}

                                                </Link>
                                            </li>
                                            <li>
                                                <div className="dropdown action-drop">
                                                    <Link
                                                        to="#"
                                                        className="dropdown-toggle"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                    >
                                                        <i className="ti ti-dots-vertical" />
                                                    </Link>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <Link className="dropdown-item" to="#">
                                                            <i className="ti ti-edit text-blue" />
                                                            Edit
                                                        </Link>
                                                        <Link className="dropdown-item" to="#">
                                                            <i className="ti ti-trash text-danger" />
                                                            Delete
                                                        </Link>
                                                        <Link className="dropdown-item" to="#">
                                                            <i className="ti ti-download text-info" />
                                                            Download
                                                        </Link>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            )}
                        </div>
                    </div>
                    {/* /Files */}
                    {/* Email */}
                    <div className="tab-pane fade" id="email">
                        <div className="view-header">
                            <h4>Email</h4>
                            <ul>
                                <li>
                                    <OverlayTrigger
                                        placement="left"
                                        overlay={
                                            <Tooltip id="tooltip-left">
                                                There are no email accounts configured. Please
                                                configure your email account in order to
                                                Send/Create Emails.
                                            </Tooltip>
                                        }
                                    >
                                        <Link
                                            to="#"
                                            className="com-add"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="left"
                                            data-bs-custom-class="tooltip-dark"
                                            data-bs-original-title="There are no email accounts configured. Please configure your email account in order to Send/Create Emails"
                                        >
                                            <i className="ti ti-circle-plus me-1" />
                                            Create Email
                                        </Link>
                                    </OverlayTrigger>
                                </li>
                            </ul>
                        </div>
                        <div className="files-activity">
                            <div className="files-wrap">
                                <div className="row align-items-center">
                                    <div className="col-md-8">
                                        <div className="file-info">
                                            <h4>Manage Emails</h4>
                                            <p>
                                                You can send and reply to emails directly via
                                                this section.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 text-md-end">
                                        <ul className="file-action">
                                            <li>
                                                <Link
                                                    to="#"
                                                    className="btn btn-primary"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#create_email"
                                                >
                                                    Connect Account
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="files-wrap">
                                <div className="email-header">
                                    <div className="row">
                                        <div className="col top-action-left">
                                            <div className="float-start d-none d-sm-block">
                                                <input
                                                    type="text"
                                                    placeholder="Search Messages"
                                                    className="form-control search-message"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-auto top-action-right">
                                            <div className="text-end">
                                                <button
                                                    type="button"
                                                    title="Refresh"
                                                    data-bs-toggle="tooltip"
                                                    className="btn btn-white d-none d-md-inline-block me-1"
                                                >
                                                    <i className="fa-solid fa-rotate" />
                                                </button>
                                                <div className="btn-group">
                                                    <Link to="#" className="btn btn-white">
                                                        <i className="fa-solid fa-angle-left" />
                                                    </Link>
                                                    <Link to="#" className="btn btn-white">
                                                        <i className="fa-solid fa-angle-right" />
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="text-end">
                                                <span className="text-muted d-none d-md-inline-block">
                                                    Showing 10 of 112{" "}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="email-content">
                                    <div className="table-responsive">
                                        <table className="table table-inbox table-hover">
                                            <thead>
                                                <tr>
                                                    <th colSpan={6} className="ps-2">
                                                        <input
                                                            type="checkbox"
                                                            className="checkbox-all"
                                                        />
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr
                                                    className="unread clickable-row"

                                                >
                                                    <td>
                                                        <input
                                                            type="checkbox"
                                                            className="checkmail"
                                                        />
                                                    </td>
                                                    <td>
                                                        <span className="mail-important">
                                                            <i className="fa fa-star starred " />
                                                        </span>
                                                    </td>
                                                    <td className="name">John Doe</td>
                                                    <td className="subject">
                                                        Lorem ipsum dolor sit amet, consectetuer
                                                        adipiscing elit
                                                    </td>
                                                    <td>
                                                        <i className="fa-solid fa-paperclip" />
                                                    </td>
                                                    <td className="mail-date">13:14</td>
                                                </tr>
                                                <tr
                                                    className="unread clickable-row"

                                                >
                                                    <td>
                                                        <input
                                                            type="checkbox"
                                                            className="checkmail"
                                                        />
                                                    </td>
                                                    <td>
                                                        <span className="mail-important">
                                                            <i className="fa-regular fa-star" />
                                                        </span>
                                                    </td>
                                                    <td className="name">Envato Account</td>
                                                    <td className="subject">
                                                        Important account security update from
                                                        Envato
                                                    </td>
                                                    <td />
                                                    <td className="mail-date">8:42</td>
                                                </tr>
                                                <tr
                                                    className="clickable-row"

                                                >
                                                    <td>
                                                        <input
                                                            type="checkbox"
                                                            className="checkmail"
                                                        />
                                                    </td>
                                                    <td>
                                                        <span className="mail-important">
                                                            <i className="fa-regular fa-star" />
                                                        </span>
                                                    </td>
                                                    <td className="name">Twitter</td>
                                                    <td className="subject">
                                                        HRMS Bootstrap Admin Template
                                                    </td>
                                                    <td />
                                                    <td className="mail-date">30 Nov</td>
                                                </tr>
                                                <tr
                                                    className="unread clickable-row"

                                                >
                                                    <td>
                                                        <input
                                                            type="checkbox"
                                                            className="checkmail"
                                                        />
                                                    </td>
                                                    <td>
                                                        <span className="mail-important">
                                                            <i className="fa-regular fa-star" />
                                                        </span>
                                                    </td>
                                                    <td className="name">Richard Parker</td>
                                                    <td className="subject">
                                                        Lorem ipsum dolor sit amet, consectetuer
                                                        adipiscing elit
                                                    </td>
                                                    <td />
                                                    <td className="mail-date">18 Sep</td>
                                                </tr>
                                                <tr
                                                    className="clickable-row"

                                                >
                                                    <td>
                                                        <input
                                                            type="checkbox"
                                                            className="checkmail"
                                                        />
                                                    </td>
                                                    <td>
                                                        <span className="mail-important">
                                                            <i className="fa-regular fa-star" />
                                                        </span>
                                                    </td>
                                                    <td className="name">John Smith</td>
                                                    <td className="subject">
                                                        Lorem ipsum dolor sit amet, consectetuer
                                                        adipiscing elit
                                                    </td>
                                                    <td />
                                                    <td className="mail-date">21 Aug</td>
                                                </tr>
                                                <tr
                                                    className="clickable-row"

                                                >
                                                    <td>
                                                        <input
                                                            type="checkbox"
                                                            className="checkmail"
                                                        />
                                                    </td>
                                                    <td>
                                                        <span className="mail-important">
                                                            <i className="fa-regular fa-star" />
                                                        </span>
                                                    </td>
                                                    <td className="name">me, Robert Smith (3)</td>
                                                    <td className="subject">
                                                        Lorem ipsum dolor sit amet, consectetuer
                                                        adipiscing elit
                                                    </td>
                                                    <td />
                                                    <td className="mail-date">1 Aug</td>
                                                </tr>
                                                <tr
                                                    className="unread clickable-row"

                                                >
                                                    <td>
                                                        <input
                                                            type="checkbox"
                                                            className="checkmail"
                                                        />
                                                    </td>
                                                    <td>
                                                        <span className="mail-important">
                                                            <i className="fa-regular fa-star" />
                                                        </span>
                                                    </td>
                                                    <td className="name">Codecanyon</td>
                                                    <td className="subject">
                                                        Welcome To Codecanyon
                                                    </td>
                                                    <td />
                                                    <td className="mail-date">Jul 13</td>
                                                </tr>
                                                <tr
                                                    className="clickable-row"

                                                >
                                                    <td>
                                                        <input
                                                            type="checkbox"
                                                            className="checkmail"
                                                        />
                                                    </td>
                                                    <td>
                                                        <span className="mail-important">
                                                            <i className="fa-regular fa-star" />
                                                        </span>
                                                    </td>
                                                    <td className="name">Richard Miles</td>
                                                    <td className="subject">
                                                        Lorem ipsum dolor sit amet, consectetuer
                                                        adipiscing elit
                                                    </td>
                                                    <td>
                                                        <i className="fa-solid fa-paperclip" />
                                                    </td>
                                                    <td className="mail-date">May 14</td>
                                                </tr>
                                                <tr
                                                    className="unread clickable-row"

                                                >
                                                    <td>
                                                        <input
                                                            type="checkbox"
                                                            className="checkmail"
                                                        />
                                                    </td>
                                                    <td>
                                                        <span className="mail-important">
                                                            <i className="fa-regular fa-star" />
                                                        </span>
                                                    </td>
                                                    <td className="name">John Smith</td>
                                                    <td className="subject">
                                                        Lorem ipsum dolor sit amet, consectetuer
                                                        adipiscing elit
                                                    </td>
                                                    <td />
                                                    <td className="mail-date">11/11/16</td>
                                                </tr>
                                                <tr
                                                    className="clickable-row"

                                                >
                                                    <td>
                                                        <input
                                                            type="checkbox"
                                                            className="checkmail"
                                                        />
                                                    </td>
                                                    <td>
                                                        <span className="mail-important">
                                                            <i className="fa fa-star starred " />
                                                        </span>
                                                    </td>
                                                    <td className="name">Mike Litorus</td>
                                                    <td className="subject">
                                                        Lorem ipsum dolor sit amet, consectetuer
                                                        adipiscing elit
                                                    </td>
                                                    <td />
                                                    <td className="mail-date">10/31/16</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Email */}
                </div>
            </div>
            {/* /Tab Content */}
        </div>

    )
}

export default LeadActivities