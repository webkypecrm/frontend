import React from 'react'
import CallList from './CallList'
import MeetingList from './MeetingList'
import CommentList from './CommentList'
import StageList from './StageList'
import AssignList from './AssignList'

const ActivityList = ({ data, index }) => {
    console.log('data in Activity List =>', data)

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

    return (
        // className="timeline-inverted"
        <li style={{ listStyle: 'none' }}>
            {/* {data.type === 'callUpdate' &&
                <div className="timeline-badge bg-secondary-success">
                    <i className="ti ti-phone" />
                </div>
            }
            {data.type === 'meetingUpdate' &&
                <div className="timeline-badge bg-info">
                    <i className="ti ti-user-pin" />
                </div>
            }
            {data.type === 'leadComment' &&
                <div className="timeline-badge bg-pending">
                    <i className="ti ti-mail-code" />
                </div>
            }
            {data.type === 'stageUpdate' &&
                <div className="timeline-badge bg-pink">
                    <i className=" ti ti-analyze" />
                </div>
            }
            {data.type === 'assignUpdate' &&
                <div className="timeline-badge bg-green">
                    <i className="ti ti-timeline-event-exclamation" />
                </div>
            } */}

            <div className="timeline-panel">
                
                {data.type === 'callUpdate' &&
                    <CallList
                        key={data.id}
                        data={data}
                        index={index}
                    />
                }
                {data.type === 'meetingUpdate' &&
                    <MeetingList
                        key={data.id}
                        data={data}
                    />
                }
                {data.type === 'leadComment' &&
                    <CommentList
                        key={data.id}
                        data={data}
                    />
                }
                {data.type === 'stageUpdate' &&
                    <StageList
                        key={data.id}
                        data={data}
                    />
                }
                {data.type === 'assignUpdate' &&
                    <AssignList
                        key={data.id}
                        data={data}
                    />
                }
                {
                    data.type == 'newLead' &&
                    <ul>
                        <li className="activity-wrap">

                            <div className="activity-info">
                                <h6>
                                    <span className="avatar-xs">
                                        <img
                                            src={data?.attachment}
                                            alt="img"
                                            style={{ width: '23px', height: '23px' }}
                                        />
                                    </span>
                                    {data?.contactType} added New Lead

                                </h6>
                                <div className="badge-day" style={{
                                    fontSize: "x-small",
                                    margin: "",
                                    maxWidth: "9rem"
                                }}>
                                    <i className="ti ti-calendar-check" />
                                    {getDate(data.createdAt)}, {getTime(data.createdAt)}
                                </div>
                            </div>
                        </li>
                    </ul>
                }
            </div>
        </li>
    )
}

export default ActivityList