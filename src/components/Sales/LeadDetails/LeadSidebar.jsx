import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import 'react-datepicker/dist/react-datepicker.css';

const LeadSidebar = ({ data, leadFollowupData, setEditCompany, setCompanyDetails }) => {

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

        // Get hours, minutes, and determine AM/PM
        let hours = date.getHours();
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const ampm = hours >= 12 ? 'pm' : 'am';

        // Convert to 12-hour format
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'

        const formattedTime = `${hours}:${minutes} ${ampm}`;
        return formattedTime;
    }


    return (
        <>
            <div className="col-xl-3 theiaStickySidebar">
                <div className='stickybar'>
                    <div className="contact-sidebar">
                        <h6>Lead Information</h6>
                        <ul className="other-info">
                            <li>
                                <span className="other-title">Created on</span>
                                <span style={{ display: 'flex', flexDirection: 'column' }}>
                                    <span>{getDate(data?.createdAt)},{getTime(data?.createdAt)}</span>
                                </span>
                            </li>
                            <li>
                                <span className="other-title">Created By</span>
                                <span>
                                    <img
                                        src={data?.ownerImgUrl}
                                        className="avatar-xs"
                                        alt="img"
                                    />{" "}
                                    {data?.owner}
                                </span>
                            </li>
                            <li>
                                <span className="other-title">Last Modified</span>
                                <span>{getDate(leadFollowupData[0]?.createdAt)}, {getTime(leadFollowupData[0]?.createdAt)}</span>
                            </li>
                            <li>
                                <span className="other-title">Modified By</span>
                                <span>
                                    <img
                                        src={leadFollowupData[0]?.staff?.profilePicUrl}
                                        className="avatar-xs"
                                        alt="img"
                                    />{" "}
                                    {leadFollowupData[0]?.staff?.name}
                                </span>
                            </li>
                            <li>
                                <span className="other-title">Value</span>
                                <span>₹ {data?.value}</span>
                            </li>
                            <li>
                                <span className="other-title">Source</span>
                                <span>{data?.source}</span>
                            </li>
                        </ul>
                        <div className="con-sidebar-title">
                            <h6>Contacts</h6>
                            <Link
                                to="#"
                                className="com-add"
                                data-bs-toggle="modal"
                                data-bs-target="#update_lead_new_details"
                            >
                                <i className="ti ti-circle-plus me-1" />
                                New Contact
                            </Link>
                        </div>
                        <ul className="basic-info">
                            <li>
                                <span>
                                    <i className="ti ti-mail" />
                                </span>
                                <p>{data?.leadEmail}</p>
                            </li>
                            <li>
                                <span>
                                    <i className="ti ti-phone" />
                                </span>
                                <p>{data?.leadMobile1}</p>
                            </li>
                            {data?.leadMobile2 &&
                                <li>
                                    <span>
                                        <i className="ti ti-phone" />
                                    </span>
                                    <p>{data?.leadMobile2}</p>
                                </li>
                            }
                            {data?.leadMobile3 && <li>
                                <span>
                                    <i className="ti ti-phone" />
                                </span>
                                <p>{data?.leadMobile3}</p>
                            </li>}


                        </ul>
                        <div className="con-sidebar-title">
                            <h6>Tags</h6>
                            <Link
                                to="#"
                                className="com-add"
                                data-bs-toggle="modal"
                                data-bs-target="#update_lead_new_details"
                            >
                                <i className="ti ti-circle-plus me-1" />
                                New Tags
                            </Link>
                        </div>

                        <ul className="tag-info">
                            {data?.tags.map((tag, index) => <li key={index}>
                                <Link
                                    to="#"
                                    className="badge badge-tag badge-success-light"
                                >
                                    {tag}
                                </Link>

                            </li>)}
                        </ul>
                        {data?.company?.companyId &&
                            <>
                                <div className="con-sidebar-title">
                                    <h6>Company</h6>
                                    <Link to="#" className="com-add add-popups"
                                        onClick={() => {
                                            setEditCompany(true),
                                                setCompanyDetails((prev) => ({ ...data?.company }))
                                        }}

                                    >
                                        <i className="ti ti-circle-plus me-1" />
                                        Edit Company
                                    </Link>
                                </div>
                                <ul className="company-info com-info">
                                    <li style={{ gap: '10px', alignItems: 'start' }}>
                                        <div>

                                            <ul className="basic-info">
                                                <li style={{ display: 'flex', alignItems: 'center' }}>
                                                    {data?.companyImg ?
                                                        <img src={data.companyImg}
                                                            style={{ width: '50px', height: '50px', objectFit: 'contain', marginRight: '10px' }} /> :
                                                        <span className="menu-list-icon ">
                                                            <i className="ti ti-building-community" />
                                                        </span>
                                                    }
                                                    <h6 >{data?.companyName.toUpperCase()}</h6>

                                                </li>

                                                <li>
                                                    <span>
                                                        <i className="ti ti-mail" />
                                                    </span>
                                                    <p>{data?.company?.companyEmail}</p>
                                                </li>
                                                <li>
                                                    <span>
                                                        <i className="ti ti-phone" />
                                                    </span>
                                                    <p>{data?.company?.companyMobile1}</p>
                                                </li>
                                                <li>
                                                    <span>
                                                        <i className="ti ti-file" />
                                                    </span>
                                                    <p>{data?.company?.gstNo}</p>
                                                </li>
                                                <li>
                                                    <span>
                                                        <i className="ti ti-credit-card" />
                                                    </span>
                                                    <p>{data?.company?.panNo}</p>
                                                </li>
                                                <li>
                                                    <span>
                                                        <i className="ti ti-link" />
                                                    </span>
                                                    <a href={data?.company?.website} target="_blank" rel="noopener noreferrer">
                                                        Website
                                                    </a>
                                                </li>
                                                <li>
                                                    <span>
                                                        <i className="ti ti-arrow-right" />
                                                    </span>
                                                    <p> {data?.company?.industry?.name}</p>
                                                </li>

                                            </ul>

                                        </div>
                                    </li>
                                </ul>
                                <h6>Social Profile</h6>
                                <ul className="social-info">
                                    <li>
                                        <Link to={data?.company?.skype}>
                                            <i className="fa-brands fa-skype" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={data?.company?.facebook}>
                                            <i className="fa-brands fa-facebook-f" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={data?.company?.instagram}>
                                            <i className="fa-brands fa-instagram" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={data?.company?.whatsapp}>
                                            <i className="fa-brands fa-whatsapp" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={data?.company?.twitter}>
                                            <i className="fa-brands fa-twitter" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={data?.company?.linkedin}>
                                            <i className="fa-brands fa-linkedin" />
                                        </Link>
                                    </li>
                                </ul>

                            </>}
                        {leadFollowupData.length > 0 &&
                            <ul className="other-info">
                                <li>
                                    <span className="other-title">Last Modified</span>
                                    <span>{leadFollowupData[0]?.createdAtDate}, {leadFollowupData[0]?.createdAtTime}</span>
                                </li>
                                <li>
                                    <span className="other-title">Modified By</span>
                                    <span>
                                        <img
                                            src={leadFollowupData[0]?.staff?.profilePicUrl}
                                            className="avatar-xs"
                                            alt="img"
                                        />{" "}
                                        {leadFollowupData[0]?.staff?.name}
                                    </span>
                                </li>
                            </ul>
                        }

                    </div>
                </div>
            </div>

           

        </>
    )
}

export default LeadSidebar