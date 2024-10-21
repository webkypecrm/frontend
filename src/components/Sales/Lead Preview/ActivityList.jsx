import React from 'react'
import CallList from './CallList'
import MeetingList from './MeetingList'
import CommentList from './CommentList'
import StageList from './StageList'
import AssignList from './AssignList'

const ActivityList = ({ data }) => {
    console.log('data =>', data)
    return (
        <li className="timeline-inverted">
            {data.type === 'callUpdate' &&
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
            }

            <div className="timeline-panel">
                {data.type === 'callUpdate' &&
                    <CallList
                        key={data.id}
                        data={data}
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
            </div>
        </li>
    )
}

export default ActivityList