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
        // Get time (hours and minutes)
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const formattedTime = `${hours}:${minutes}`;
        return formattedTime
    }

    return (<>

        <ul>
            <li className="activity-wrap">
                <div>
                    <div>
                        <div className="badge-day">
                            <i className="ti ti-calendar-check" />
                            {getDate(data.createdAt)}
                        </div>
                        <Tag color="orange" style={{ marginLeft: '10px' }}>
                            MEETING
                        </Tag>


                    </div>
                    <div style={{ display: 'flex' }}>
                        <span className="activity-icon bg-info">
                            <i className="ti ti-user-pin" />
                        </span>
                        <div className="activity-info">
                            <h6>
                                {data.createdBy}, Posted an Update
                            </h6>
                            <span>Meeting Type:{data.meetingType}</span><br />
                            <span>Meeting Venue:{data.meetingVenue}</span><br />
                            <span>Meeting Date: {getDate(data.meetingDate)}</span><br />
                            <span>Meeting Time: {getTime(data.meetingTime)}</span><br />
                            <span>Status: {data.status}</span><br />
                            <span>Remark: {data.lastCallSummary}</span><br />
                        </div>

                    </div>
                </div>

            </li>
        </ul>
    </>)
}

export default MeetingList