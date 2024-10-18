import React from 'react'
import { Tag } from 'antd';

const MeetingList = ({ data }) => {

    console.log('data =>', data)

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

    return (<>

        <ul>
            <li className="activity-wrap">
                <div>
                    <div>
                        <div className="badge-day" style={{
                            fontSize: "x-small",
                            margin: "",
                            maxWidth: "9rem"
                        }}>
                            <i className="ti ti-calendar-check" />
                            {getDate(data.createdAt)}, {getTime(data.createdAt)}
                        </div>
                        <Tag className='badge-day' color="orange" style={{
                            marginLeft: '10px',
                            fontSize: "0.6rem",
                            maxWidth: "9rem",
                            display: 'inline'
                        }}>
                            MEETING
                        </Tag>


                    </div>
                    <div style={{ display: 'flex' }}>
                        <span className="activity-icon bg-info">
                            <i className="ti ti-user-pin" />
                        </span>
                        <div className="activity-info">
                            <h6>
                                {data?.staff?.name}, Posted an Update
                            </h6>
                            <p style={{
                                fontSize: "12px",
                                color: "#6F6F6F"
                            }}>
                                <span>{data.meetingType.toUpperCase()} meeting on {getDate(data.meetingDate)}, {getTime(data.meetingTime)}, </span>
                                <span>Status: <strong> {data.status} </strong></span><br />
                                <span>Venue:{data.meetingVenue}</span><br />
                                <span>Remark: {data.lastCallSummary}</span><br />
                            </p>
                        </div>

                    </div>
                </div>

            </li>
        </ul>
    </>)
}

export default MeetingList