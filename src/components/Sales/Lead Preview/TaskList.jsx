import React from 'react'
import { Tag } from 'antd';

const TaskList = ({ data, onTaskToggle }) => {

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

    function handleToggle() {
        onTaskToggle(data)
    }

    return (
        <li className="activity-wrap" onClick={handleToggle}>
            <div>
                <div>
                    <div className="badge-day">
                        <i className="ti ti-calendar-check" />
                        {getDate(data.createdAt)}
                    </div>
                    <Tag color="blue" style={{ marginLeft: '10px' }}>
                        Task
                    </Tag>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span className="activity-icon bg-orange">
                        <i className="ti ti-list-check" />
                    </span>
                    <div className="activity-info">
                        <ul style={{
                            display: "grid",
                            gridTemplateColumns: "auto auto auto",
                            columnGap: "40px",
                            rowGap: "10px",
                        }}>
                            <li>
                                <strong>Title: </strong> {data.taskTitle}
                            </li>
                            <li style={{
                                display: "flex",
                                justifyContent: "flex-start",
                                alignItems: "center",
                                gap: "10px",
                            }}>
                                <strong>Priority:</strong> <div>
                                    {data.priority === "medium" && (
                                        <span className="badge badge-tag badge-warning-light">
                                            {data.priority}
                                        </span>
                                    )}
                                    {data.priority === "low" && (
                                        <span className="badge badge-tag badge-purple-light">
                                            {data.priority}
                                        </span>
                                    )}
                                    {data.priority === "highy" && (
                                        <span className="badge badge-tag badge-danger-light">
                                            {data.priority}
                                        </span>
                                    )}
                                </div>

                            </li>
                            <li style={{
                                display: "flex",
                                justifyContent: "flex-start",
                                alignItems: "center",
                                gap: "10px",
                            }}>
                                <strong> Status:</strong>  <div>
                                    {data.status === "resolved" && (
                                        <span className="badge badge-pill badge-status bg-success">
                                            {data.status}
                                        </span>
                                    )}
                                    {data.status === "open" && (
                                        <span className="badge badge-pill badge-status bg-info">
                                            {data.status}
                                        </span>
                                    )}
                                    {data.status === "pending" && (
                                        <span className="badge badge-pill badge-status bg-warning">
                                            {data.status}
                                        </span>
                                    )}
                                    {data.status === "closed" && (
                                        <span className="badge badge-pill badge-status bg-danger">
                                            {data.status}
                                        </span>
                                    )}
                                </div>
                            </li>
                            <li>
                                <strong>Start Date: </strong>
                                {data.startDate}
                            </li>
                            <li>
                                <strong>End Date: </strong>
                                {data.startDate}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </li >)
}

export default TaskList