import React from 'react'
import CallList from './CallList'
import MeetingList from './MeetingList'
import CommentList from './CommentList'

const ActivityList = ({ data }) => {
    console.log('data =>', data)
    return (
        <li className="timeline-inverted">
            {data.type === 'callUpdate' &&
                <div className="timeline-badge bg-secondary-success">
                    <i className="fas fa-circle" />
                </div>
            }
            {data.type === 'meetingUpdate' &&
                <div className="timeline-badge bg-info">
                    <i className="fas fa-circle" />
                </div>
            }
            {data.type === 'leadComment' &&
                <div className="timeline-badge bg-pending">
                    <i className="fas fa-circle" />
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
            </div>
        </li>
    )
}

export default ActivityList