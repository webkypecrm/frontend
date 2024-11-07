import React from 'react'
import { Link } from 'react-router-dom'

const LeadPipeline = ({ stageOptions, handleStatusChange, linkActive, totalStageDataCount }) => {

    console.log("totalStageDataCount =>", totalStageDataCount)

    return (
        <div className="col-md-12">
            <div className="contact-wrap">
                <div className="pipeline-list">
                    <ul>
                        {stageOptions.map((stage, index) => <li key={stage?.value}
                            style={{ cursor: 'pointer' }}
                        >
                            <Link to="#" className={linkActive == stage?.order ? `bg-pending` : ``}
                                onClick={() => {
                                    handleStatusChange(String(stage.order));
                                }}
                            >
                                {stage?.label} {"("} {totalStageDataCount ? totalStageDataCount[stage?.order] : ''} {")"}

                            </Link>
                        </li>)}

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default LeadPipeline