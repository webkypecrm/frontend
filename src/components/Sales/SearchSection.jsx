import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import DateRangePicker from 'react-bootstrap-daterangepicker'



const SearchSection = ({
    togglePopup,
    onManageColumns,
    manageColumns,
    filterByObj,
    setFilterByObj,
    fetchLeadData,
    setFilterSlider
}) => {
    // const [filterSlider, setFilterSlider] = useState(false);
    const handleManageColumns = (name) => {
        onManageColumns((prev) => ({
            ...prev,
            [name]: !prev[name]
        }))
    }

    const handleApply = (event, picker) => {
        const start = picker.startDate.format('YYYY-MM-DD HH:mm:ss.SSS');
        const end = picker.endDate.format('YYYY-MM-DD HH:mm:ss.SSS');

        setFilterByObj((...prev) => ({
            ...prev,
            from: start,
            to: end
        }))
    }

    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);

    const initialSettings = {
        endDate: today, // Set current date as the endDate
        ranges: {
            "Last 30 Days": [
                new Date(today.getFullYear(), today.getMonth(), today.getDate() - 30),
                today,
            ],
            "Last 7 Days": [
                new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7),
                today,
            ],
            "Last Month": [
                new Date(today.getFullYear(), today.getMonth() - 1, 1), // First day of last month
                new Date(today.getFullYear(), today.getMonth(), 0), // Last day of last month
            ],
            "This Month": [
                new Date(today.getFullYear(), today.getMonth(), 1), // First day of current month
                today,
            ],
            Today: [today, today], // Set today as the default range
            Yesterday: [yesterday, yesterday], // Set yesterday as the default range
        },
        startDate: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7), // Default to "Last 7 Days"
        timePicker: false,
    };

    // console.log("filterByObj =>", filterByObj);

    useEffect(() => {
        if (filterByObj.from) {
            fetchLeadData(filterByObj)
        }
    }, [filterByObj])

    return (
        <div className="search-section">
            <div className="row">
                <div className="col-md-5 col-sm-4" style={{ width: '20%' }}>
                    <div className="form-wrap icon-form">
                        <span className="form-icon">
                            <i className="ti ti-search" />
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search Lead"
                        />
                    </div>
                </div>
                <div className="col-md-7 col-sm-8" style={{ width: '80%' }}>
                    <div className="export-list text-sm-end">
                        <ul>
                            <li>
                                <div className=" icon-form">
                                    <span className="form-icon">
                                        <i className="ti ti-calendar" />
                                    </span>
                                    <DateRangePicker
                                        initialSettings={initialSettings}

                                        onApply={handleApply}
                                    >
                                        <input
                                            className="form-control bookingrange"
                                            type="text"

                                        />
                                    </DateRangePicker>
                                </div>
                            </li>
                            <li>
                                <div className="manage-dropdwon">
                                    <Link
                                        to="#"
                                        className="btn btn-purple-light"
                                        data-bs-toggle="dropdown"
                                        data-bs-auto-close="false"
                                    >
                                        <i className="ti ti-columns-3" />
                                        {/* Manage Columns */}
                                    </Link>
                                    <div className="dropdown-menu  dropdown-menu-md-end">
                                        <h4>Want to manage datatables?</h4>
                                        <p>
                                            Please drag and drop your column to reorder your
                                            table and enable see option as you want.
                                        </p>
                                        <ul>
                                            <li>
                                                <p>
                                                    <i className="ti ti-grip-vertical" />
                                                    Name
                                                </p>
                                                <div className="status-toggle">
                                                    <input
                                                        type="checkbox"
                                                        id="col-name"
                                                        className="check"
                                                        checked={manageColumns['Name']}
                                                        onChange={() => handleManageColumns('Name')}
                                                    />
                                                    <label
                                                        htmlFor="col-name"
                                                        className="checktoggle"
                                                    />
                                                </div>
                                            </li>
                                            <li>
                                                <p>
                                                    <i className="ti ti-grip-vertical" />
                                                    Email
                                                </p>
                                                <div className="status-toggle">
                                                    <input
                                                        type="checkbox"
                                                        id="col-email"
                                                        className="check"
                                                        checked={manageColumns['Email']}
                                                        onChange={() => handleManageColumns('Email')}
                                                    />
                                                    <label
                                                        htmlFor="col-email"
                                                        className="checktoggle"
                                                    />
                                                </div>
                                            </li>
                                            <li>
                                                <p>
                                                    <i className="ti ti-grip-vertical" />
                                                    Mobile1
                                                </p>
                                                <div className="status-toggle">
                                                    <input
                                                        type="checkbox"
                                                        id="col-mobile1"
                                                        className="check"
                                                        checked={manageColumns['Mobile1']}
                                                        onChange={() => handleManageColumns('Mobile1')}
                                                    />
                                                    <label
                                                        htmlFor="col-mobile1"
                                                        className="checktoggle"
                                                    />
                                                </div>
                                            </li>
                                            <li>
                                                <p>
                                                    <i className="ti ti-grip-vertical" />
                                                    Mobile2
                                                </p>
                                                <div className="status-toggle">
                                                    <input
                                                        type="checkbox"
                                                        id="col-mobile2"
                                                        className="check"
                                                        checked={manageColumns['Mobile2']}
                                                        onChange={() => handleManageColumns('Mobile2')}
                                                    />
                                                    <label
                                                        htmlFor="col-mobile2"
                                                        className="checktoggle"
                                                    />
                                                </div>
                                            </li>
                                            <li>
                                                <p>
                                                    <i className="ti ti-grip-vertical" />
                                                    Mobile3
                                                </p>
                                                <div className="status-toggle">
                                                    <input
                                                        type="checkbox"
                                                        id="col-mobile3"
                                                        className="check"
                                                        checked={manageColumns['Mobile3']}
                                                        onChange={() => handleManageColumns('Mobile3')}
                                                    />
                                                    <label
                                                        htmlFor="col-mobile3"
                                                        className="checktoggle"
                                                    />
                                                </div>
                                            </li>
                                            <li>
                                                <p>
                                                    <i className="ti ti-grip-vertical" />
                                                    Country
                                                </p>
                                                <div className="status-toggle">
                                                    <input
                                                        type="checkbox"
                                                        id="col-country"
                                                        className="check"
                                                        checked={manageColumns['Country']}
                                                        onChange={() => handleManageColumns('Country')}
                                                    />
                                                    <label
                                                        htmlFor="col-country"
                                                        className="checktoggle"
                                                    />
                                                </div>
                                            </li>
                                            <li>
                                                <p>
                                                    <i className="ti ti-grip-vertical" />
                                                    Company Name
                                                </p>
                                                <div className="status-toggle">
                                                    <input
                                                        type="checkbox"
                                                        id="col-company-name"
                                                        className="check"
                                                        checked={manageColumns['Company Name']}
                                                        onChange={() => handleManageColumns('Company Name')}
                                                    />
                                                    <label
                                                        htmlFor="col-company-name"
                                                        className="checktoggle"
                                                    />
                                                </div>
                                            </li>
                                            <li>
                                                <p>
                                                    <i className="ti ti-grip-vertical" />
                                                    Company Email
                                                </p>
                                                <div className="status-toggle">
                                                    <input
                                                        type="checkbox"
                                                        id="col-company-email"
                                                        className="check"
                                                        checked={manageColumns['Company Email']}
                                                        onChange={() => handleManageColumns('Company Email')}
                                                    />
                                                    <label
                                                        htmlFor="col-company-email"
                                                        className="checktoggle"
                                                    />
                                                </div>
                                            </li>
                                            <li>
                                                <p>
                                                    <i className="ti ti-grip-vertical" />
                                                    Company Location
                                                </p>
                                                <div className="status-toggle">
                                                    <input
                                                        type="checkbox"
                                                        id="col-company-location"
                                                        className="check"
                                                        checked={manageColumns['Company Location']}
                                                        onChange={() => handleManageColumns('Company Location')}
                                                    />
                                                    <label
                                                        htmlFor="col-company-location"
                                                        className="checktoggle"
                                                    />
                                                </div>
                                            </li>
                                            <li>
                                                <p>
                                                    <i className="ti ti-grip-vertical" />
                                                    Source
                                                </p>
                                                <div className="status-toggle">
                                                    <input
                                                        type="checkbox"
                                                        id="col-source"
                                                        className="check"
                                                        checked={manageColumns['Source']}
                                                        onChange={() => handleManageColumns('Source')}
                                                    />
                                                    <label
                                                        htmlFor="col-source"
                                                        className="checktoggle"
                                                    />
                                                </div>
                                            </li>
                                            <li>
                                                <p>
                                                    <i className="ti ti-grip-vertical" />
                                                    Tags
                                                </p>
                                                <div className="status-toggle">
                                                    <input
                                                        type="checkbox"
                                                        id="col-tags"
                                                        className="check"
                                                        checked={manageColumns['Tags']}
                                                        onChange={() => handleManageColumns('Tags')}
                                                    />
                                                    <label
                                                        htmlFor="col-tags"
                                                        className="checktoggle"
                                                    />
                                                </div>
                                            </li>
                                            <li>
                                                <p>
                                                    <i className="ti ti-grip-vertical" />
                                                    Value
                                                </p>
                                                <div className="status-toggle">
                                                    <input
                                                        type="checkbox"
                                                        id="col-value"
                                                        className="check"
                                                        checked={manageColumns['Value']}
                                                        onChange={() => handleManageColumns('Value')}
                                                    />
                                                    <label
                                                        htmlFor="col-value"
                                                        className="checktoggle"
                                                    />
                                                </div>
                                            </li>
                                            <li>
                                                <p>
                                                    <i className="ti ti-grip-vertical" />
                                                    Assign To
                                                </p>
                                                <div className="status-toggle">
                                                    <input
                                                        type="checkbox"
                                                        id="col-assign-to"
                                                        className="check"
                                                        checked={manageColumns['Assign To']}
                                                        onChange={() => handleManageColumns('Assign To')}
                                                    />
                                                    <label
                                                        htmlFor="col-assign-to"
                                                        className="checktoggle"
                                                    />
                                                </div>
                                            </li>
                                            <li>
                                                <p>
                                                    <i className="ti ti-grip-vertical" />
                                                    Updates
                                                </p>
                                                <div className="status-toggle">
                                                    <input
                                                        type="checkbox"
                                                        id="col-updates"
                                                        className="check"
                                                        checked={manageColumns['Updates']}
                                                        onChange={() => handleManageColumns('Updates')}
                                                    />
                                                    <label
                                                        htmlFor="col-updates"
                                                        className="checktoggle"
                                                    />
                                                </div>
                                            </li>
                                            <li>
                                                <p>
                                                    <i className="ti ti-grip-vertical" />
                                                    Created Date
                                                </p>
                                                <div className="status-toggle">
                                                    <input
                                                        type="checkbox"
                                                        id="col-created-date"
                                                        className="check"
                                                        checked={manageColumns['Created Date']}
                                                        onChange={() => handleManageColumns('Created Date')}
                                                    />
                                                    <label
                                                        htmlFor="col-created-date"
                                                        className="checktoggle"
                                                    />
                                                </div>
                                            </li>
                                            <li>
                                                <p>
                                                    <i className="ti ti-grip-vertical" />
                                                    Stage
                                                </p>
                                                <div className="status-toggle">
                                                    <input
                                                        type="checkbox"
                                                        id="col-stage"
                                                        className="check"
                                                        checked={manageColumns['Stage']}
                                                        onChange={() => handleManageColumns('Stage')}
                                                    />
                                                    <label
                                                        htmlFor="col-stage"
                                                        className="checktoggle"
                                                    />
                                                </div>
                                            </li>
                                            <li>
                                                <p>
                                                    <i className="ti ti-grip-vertical" />
                                                    Action
                                                </p>
                                                <div className="status-toggle">
                                                    <input
                                                        type="checkbox"
                                                        id="col-action"
                                                        className="check"
                                                        checked={manageColumns['Action']}
                                                        onChange={() => handleManageColumns('Action')}
                                                    />
                                                    <label
                                                        htmlFor="col-action"
                                                        className="checktoggle"
                                                    />
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="export-dropdwon ">
                                    <Link
                                        to="#"
                                        className="dropdown-toggle"
                                        data-bs-toggle="dropdown"
                                    >
                                        <i className="ti ti-package-export" />
                                        {/* Export */}
                                    </Link>
                                    <div className="dropdown-menu  dropdown-menu-end">
                                        <ul>
                                            <li>
                                                <Link to="#">
                                                    <i className="ti ti-file-type-pdf text-danger" />
                                                    Export as PDF
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <i className="ti ti-file-type-xls text-green" />
                                                    Export as Excel{" "}
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="form-sorts dropdown">
                                    <Link
                                        onClick={() => { setFilterSlider(prev => !prev) }}
                                    >
                                        <i className="ti ti-filter-share" />
                                        {/* Filter */}
                                    </Link>
                                    {/* <Filter
                                        filterSlider={filterSlider}
                                        setFilterSlider={setFilterSlider}
                                    />                         */}
                                </div>
                            </li>
                            <li>
                                <div className="view-icons">
                                    <Link to="/sales/leads" className="active">
                                        <i className="ti ti-list-tree" />
                                    </Link>
                                    <Link to="/sales/leads-kanban">
                                        <i className="ti ti-grid-dots" />
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <Link
                                    to="#"
                                    className="btn btn-primary add-popup"
                                    onClick={() => togglePopup(false)}
                                >
                                    <i className="ti ti-square-rounded-plus" />
                                    Add Leads
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchSection