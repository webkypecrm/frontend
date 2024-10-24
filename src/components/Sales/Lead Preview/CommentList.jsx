import React from 'react'
import { Tag } from 'antd'

const CommentList = ({ data }) => {

    console.log('data in CommentList =>', data)

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
                    <div className="badge-day" style={{
                        fontSize: "x-small",
                        margin: "",
                        maxWidth: "9rem"
                    }}>
                        <i className="ti ti-calendar-check" />
                        {getDate(data.createdAt)}, {getTime(data.createdAt)}
                    </div>
                    <Tag className='badge-day' color="cyan" style={{
                        marginLeft: '10px',
                        fontSize: "0.6rem",
                        maxWidth: "9rem",
                        display: 'inline'
                    }}>
                        COMMENT
                    </Tag>
                </div>
                <div style={{ display: 'flex' }}>
                    <span className="activity-icon bg-pending">
                        <i className="ti ti-mail-code" />
                    </span>
                    <div className="activity-info">
                        <h6>
                            {data?.staff?.name}, Posted an Update
                        </h6>
                        <p style={{
                            fontSize: "0.7rem",
                            color: "rgb(149 144 144)",
                            marginTop: "0.2rem",
                            fontWeight: "600"
                        }}>
                            <p>{data?.comment}</p>
                        </p>
                    </div>
                </div>
            </div>
        </li>
    </ul>
    )
}

export default CommentList