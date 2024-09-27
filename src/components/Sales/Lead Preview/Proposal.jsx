import React from 'react'
import { Link } from 'react-router-dom'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

const Proposal = () => {
    return (
        <>
            <div className="tab-pane fade" id="proposal">
                <div className="view-header">
                    <h4>Proposal</h4>
                    <ul>
                        <li>
                            <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#add_proposal"
                                className="com-add"
                            >
                                <i className="ti ti-circle-plus me-1" />
                                Add New
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="contact-activity">
                    <div className="badge-day">
                        <i className="ti ti-calendar-check" />
                        29 Aug 2023
                    </div>
                    <ul>
                        <li className="activity-wrap">
                            <span className="activity-icon bg-pending">
                                <i className="ti ti-mail-code" />
                            </span>
                            <div className="activity-info">
                                <h6>You sent 1 Message to the contact.</h6>
                                <p>10:25 pm</p>
                            </div>
                        </li>
                        <li className="activity-wrap">
                            <span className="activity-icon bg-secondary-success">
                                <i className="ti ti-phone" />
                            </span>
                            <div className="activity-info">
                                <h6>
                                    Denwar responded to your appointment schedule
                                    question by call at 09:30pm.
                                </h6>
                                <p>09:25 pm</p>
                            </div>
                        </li>
                        <li className="activity-wrap">
                            <span className="activity-icon bg-orange">
                                <i className="ti ti-notes" />
                            </span>
                            <div className="activity-info">
                                <h6>Notes added by Antony</h6>
                                <p>
                                    Please accept my apologies for the inconvenience
                                    caused. It would be much appreciated if it's
                                    possible to reschedule to 6:00 PM, or any other
                                    day that week.
                                </p>
                                <p>10.00 pm</p>
                            </div>
                        </li>
                    </ul>
                    <div className="badge-day">
                        <i className="ti ti-calendar-check" />
                        28 Feb 2024
                    </div>
                    <ul>
                        <li className="activity-wrap">
                            <span className="activity-icon bg-info">
                                <i className="ti ti-user-pin" />
                            </span>
                            <div className="activity-info">
                                <h6>
                                    Meeting With{" "}

                                    Abraham
                                </h6>
                                <p>Schedueled on 05:00 pm</p>
                            </div>
                        </li>
                        <li className="activity-wrap">
                            <span className="activity-icon bg-secondary-success">
                                <i className="ti ti-phone" />
                            </span>
                            <div className="activity-info">
                                <h6>
                                    Drain responded to your appointment schedule
                                    question.
                                </h6>
                                <p>09:25 pm</p>
                            </div>
                        </li>
                    </ul>
                    <div className="badge-day">
                        <i className="ti ti-calendar-check" />
                        Upcoming Activity
                    </div>
                    <ul>
                        <li className="activity-wrap">
                            <span className="activity-icon bg-info">
                                <i className="ti ti-user-pin" />
                            </span>
                            <div className="activity-info">
                                <h6>Product Meeting</h6>
                                <p>
                                    A product team meeting is a gathering of the
                                    cross-functional product team — ideally including
                                    team members from product, engineering, marketing,
                                    and customer support.
                                </p>
                                <p>25 Jul 2023, 05:00 pm</p>
                                <div className="upcoming-info">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <p>Reminder</p>
                                            <div className="dropdown">
                                                <Link
                                                    to="#"
                                                    className="dropdown-toggle"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    <i className="ti ti-clock-edit me-1" />
                                                    Reminder
                                                    <i className="ti ti-chevron-down ms-1" />
                                                </Link>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <Link className="dropdown-item" to="#">
                                                        Remainder
                                                    </Link>
                                                    <Link className="dropdown-item" to="#">
                                                        1 hr
                                                    </Link>
                                                    <Link className="dropdown-item" to="#">
                                                        10 hr
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <p>Task Priority</p>
                                            <div className="dropdown">
                                                <Link
                                                    to="#"
                                                    className="dropdown-toggle"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    <i className="ti ti-square-rounded-filled me-1 text-danger circle" />
                                                    High
                                                    <i className="ti ti-chevron-down ms-1" />
                                                </Link>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <Link className="dropdown-item" to="#">
                                                        <i className="ti ti-square-rounded-filled me-1 text-danger circle" />
                                                        High
                                                    </Link>
                                                    <Link className="dropdown-item" to="#">
                                                        <i className="ti ti-square-rounded-filled me-1 text-success circle" />
                                                        Low
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <p>Assigned to</p>
                                            <div className="dropdown">
                                                <Link
                                                    to="#"
                                                    className="dropdown-toggle"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                >

                                                    John
                                                    <i className="ti ti-chevron-down ms-1" />
                                                </Link>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <Link className="dropdown-item" to="#">

                                                        John
                                                    </Link>
                                                    <Link className="dropdown-item" to="#">

                                                        Peter
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Add File */}
            <div
                className="modal custom-modal fade custom-modal-two modal-padding"
                id="add_proposal"
                role="dialog"
            >
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Create New Propsal</h5>
                            <button
                                type="button"
                                className="btn-close position-static"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body p-0">
                            <form>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-wrap">
                                            <label className="col-form-label">
                                                Text <span className="text-danger"> *</span>
                                            </label>
                                            <textarea
                                                className="form-control"
                                                rows={2}
                                                placeholder="Add text"
                                                defaultValue={""}
                                            />
                                        </div>

                                        <div className="form-wrap">
                                            <label className="col-form-label">
                                                Attachment <span className="text-danger"> *</span>
                                            </label>
                                            <div className="drag-attach">
                                                <input type="file" />
                                                <div className="img-upload">
                                                    <i className="ti ti-file-broken" />
                                                    Upload File
                                                </div>
                                            </div>
                                        </div>

                                        <div className="text-end modal-btn">
                                            <Link
                                                to="#"
                                                className="btn btn-light"
                                                data-bs-dismiss="modal"
                                            >
                                                Cancel
                                            </Link>
                                            <Link
                                                className="btn btn-primary"
                                                to="#"
                                                data-bs-dismiss="modal"
                                            >
                                                Confirm
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Add File */}
        </>
    )
}

export default Proposal