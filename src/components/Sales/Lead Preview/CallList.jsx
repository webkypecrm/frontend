import React from 'react'
import { Tag } from 'antd';
import { Link } from 'react-router-dom';
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const CallList = ({ data, index }) => {

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

    console.log('data =>', data)

    return (<>

        <div className="calls-box" key={data.id}>
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
        {/* <ul>
            <li className="activity-wrap" style={{ justifyContent: 'space-between' }}>
                <div>
                    <div>
                        <div className="badge-day" style={{
                            fontSize: "x-small",
                            margin: "",
                            maxWidth: "9rem"
                        }}>
                            <i className="ti ti-calendar-check" />
                            {getDate(data.createdAt)} {getTime(data.createdAt)}
                        </div>
                        <Tag className='badge-day' color="blue" style={{
                            marginLeft: '10px',
                            fontSize: "0.6rem",
                            maxWidth: "9rem",
                            display: 'inline'
                        }}>

                            CALL
                        </Tag>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <span className="activity-icon bg-secondary-success">
                            <i className="ti ti-phone" />
                        </span>
                        <div className="activity-info" >
                            <h6>
                                {data?.staff?.name}, Posted an Update
                            </h6>
                            <p style={{
                                fontSize: "0.7rem",
                                color: "rgb(149 144 144)",
                                marginTop: "0.2rem",
                                fontWeight: "600"
                            }}>
                                <span>Call Back Date & Time: {getDate(data.callBackDate)}, {getTime(data.callBackTime)}, </span>
                                <span>Status: <strong> {data.status} </strong></span><br />
                                <span>Remark: {data.lastCallSummary}</span><br />
                            </p>
                        </div>
                    </div>
                </div>
                <div className="calls-box">
                    <div className="caller-info">
                        <div className="calls-action" style={{ display: 'flex', }}>
                            <div className="dropdown call-drop">
                                {data?.status == 'Done' ?
                                    <Link
                                        to="#"
                                        className="dropdown-toggle bg-success"
                                        aria-expanded="false"
                                    >
                                        <i className="ti ti-square-check" />

                                    </Link>
                                    :
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
                                      
                                    </Link>
                                }
                            </div>
                            {data?.status !== 'Done' &&
                                <div className="dropdown call-drop">
                                    {
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
                                           
                                        </Link>
                                    }
                                </div>
                            }


                        </div>
                    </div>
                </div>

            </li>
        </ul > */}
    </>)
}

export default CallList