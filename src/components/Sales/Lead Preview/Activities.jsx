import React from 'react'
import { Link } from 'react-router-dom'
import Select from 'react-select';
import ActivityList from './ActivityList';
import { ascendingandDecending } from '../../../selectOption/selectOption';
import { Empty } from 'antd';

const Activities = ({ leadFollowupData }) => {
    return (
        <div className="tab-pane active show" id="activities">
            <div className="view-header">
                <h4>Activities</h4>
            </div>
            <div className="row">
                {/* Ribbon */}
                {leadFollowupData.length === 0 ? <Empty description={false} /> :
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <ul className="timeline">
                                    {leadFollowupData.map((item) => <ActivityList
                                        key={item.id}
                                        data={item}
                                    />)}
                                </ul>
                            </div>
                        </div>
                    </div>
                }

                {/* /Ribbon */}

            </div>

        </div>
    )
}

export default Activities