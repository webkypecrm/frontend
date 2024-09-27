import React from 'react'
import { Tag } from 'antd'

const CommentList = ({ data }) => {

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

    return (<ul>
        <li className="activity-wrap">
            <div>
                <div>
                    <div className="badge-day">
                        <i className="ti ti-calendar-check" />
                        {getDate(data.createdAt)}
                    </div>
                    <Tag color="cyan" style={{ marginLeft: '10px' }}>
                        COMMENT
                    </Tag>
                </div>
                <div style={{ display: 'flex' }}>
                    <span className="activity-icon bg-info">
                        <i className="ti ti-mail-code" />
                    </span>
                    <div className="activity-info">
                        <h6>
                            {data.createdBy}, Posted an Update
                        </h6>
                        <p>{data.comment}</p>
                    </div>
                </div>
            </div>
        </li>
    </ul>
    )
}

export default CommentList