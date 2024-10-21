import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import DateRangePicker from "react-bootstrap-daterangepicker";
import { all_routes } from "../../pages/Router/all_routes";
import ManageColumns from "./ManageColumns";

const SearchSection = ({
    togglePopup,
    onManageColumns,
    manageColumns,
    setFilterSlider,
    filterByObj,
    setFilterByObj,
    fetchData

}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);
    const [manageColumnsSlider, setManageColumnsSlider] = useState(false);
    const route = all_routes;

    // console.log('manageColumnsSlider =>', manageColumnsSlider);

    const handleManageColumns = (name) => {
        onManageColumns((prev) => ({
            ...prev,
            [name]: !prev[name]
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

    const handleApply = (event, picker) => {
        const start = picker.startDate.format('YYYY-MM-DD HH:mm:ss.SSS');
        const end = picker.endDate.format('YYYY-MM-DD HH:mm:ss.SSS');

        setFilterByObj((...prev) => ({
            ...prev,
            from: start ? start : "",
            to: end
        }))
    }

    useEffect(() => {
        setFilterByObj({
            ...filterByObj,
            search: debouncedTerm,
        });
    }, [debouncedTerm]);


    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedTerm(searchTerm);
        }, 500);

        // Cleanup previous timeout
        return () => {
            clearTimeout(handler);
        };
    }, [searchTerm]); // Runs when searchTerm changes

    useEffect(() => {
        if (filterByObj.from) {
            fetchData()
        }
        fetchData()
    }, [filterByObj])

    return <div className="search-section">
        <div className="row">
            <div className="col-md-5 col-sm-4" style={{ marginTop: "2px" }}>
                <div className="form-wrap icon-form">
                    <span className="form-icon">
                        <i className="ti ti-search" />
                    </span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search Staff"
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                        }}
                    />
                </div>
            </div>
            <div className="col-md-7 col-sm-8">
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
                                    onClick={() => { setManageColumnsSlider(true) }}
                                >
                                    <i className="ti ti-columns-3" />
                                </Link>
                                <ManageColumns
                                    handleManageColumns={handleManageColumns}
                                    manageColumns={manageColumns}
                                    manageColumnsSlider={manageColumnsSlider}
                                    setManageColumnsSlider={setManageColumnsSlider}
                                />
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
                                </Link>
                            </div>
                        </li>
                        {/* <li>
                            <div className="form-sorts dropdown">
                                <Link
                                    to="#"
                                    data-bs-toggle="dropdown"
                                    data-bs-auto-close="false"
                                >
                                    <i className="ti ti-filter-share" />
                                    
                                </Link>
                                <div className="filter-dropdown-menu dropdown-menu  dropdown-menu-md-end">
                                    <div className="filter-set-view">
                                        <div className="filter-set-head">
                                            <h4>
                                                <i className="ti ti-filter-share" />
                                                Filter
                                            </h4>
                                        </div>

                                        <div
                                            className="accordion"
                                            id="accordionExample"
                                        >
                                            <div className="filter-set-content">
                                                <div className="filter-set-content-head">
                                                    <Link
                                                        to="#"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapseTwo"
                                                        aria-expanded="true"
                                                        aria-controls="collapseTwo"
                                                    >
                                                        Country
                                                    </Link>
                                                </div>
                                                <div
                                                    className="filter-set-contents accordion-collapse collapse show"
                                                    id="collapseTwo"
                                                    data-bs-parent="#accordionExample"
                                                >
                                                    <div className="filter-content-list">
                                                        <div className="form-wrap icon-form">
                                                            <span className="form-icon">
                                                                <i className="ti ti-search" />
                                                            </span>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Search Country"
                                                            />
                                                        </div>
                                                        <ul>
                                                            <li>
                                                                <div className="filter-checks">
                                                                    <label className="checkboxs">
                                                                        <input
                                                                            type="checkbox"
                                                                            defaultChecked
                                                                        />
                                                                        <span className="checkmarks" />
                                                                    </label>
                                                                </div>
                                                                <div className="collapse-inside-text">
                                                                    <h5>India</h5>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="filter-checks">
                                                                    <label className="checkboxs">
                                                                        <input type="checkbox" />
                                                                        <span className="checkmarks" />
                                                                    </label>
                                                                </div>
                                                                <div className="collapse-inside-text">
                                                                    <h5>USA</h5>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="filter-checks">
                                                                    <label className="checkboxs">
                                                                        <input type="checkbox" />
                                                                        <span className="checkmarks" />
                                                                    </label>
                                                                </div>
                                                                <div className="collapse-inside-text">
                                                                    <h5>France</h5>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="filter-checks">
                                                                    <label className="checkboxs">
                                                                        <input type="checkbox" />
                                                                        <span className="checkmarks" />
                                                                    </label>
                                                                </div>
                                                                <div className="collapse-inside-text">
                                                                    <h5>United Kingdom</h5>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="filter-checks">
                                                                    <label className="checkboxs">
                                                                        <input type="checkbox" />
                                                                        <span className="checkmarks" />
                                                                    </label>
                                                                </div>
                                                                <div className="collapse-inside-text">
                                                                    <h5>UAE</h5>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="filter-checks">
                                                                    <label className="checkboxs">
                                                                        <input type="checkbox" />
                                                                        <span className="checkmarks" />
                                                                    </label>
                                                                </div>
                                                                <div className="collapse-inside-text">
                                                                    <h5>Italy</h5>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="filter-checks">
                                                                    <label className="checkboxs">
                                                                        <input type="checkbox" />
                                                                        <span className="checkmarks" />
                                                                    </label>
                                                                </div>
                                                                <div className="collapse-inside-text">
                                                                    <h5>Japan</h5>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="filter-checks">
                                                                    <label className="checkboxs">
                                                                        <input type="checkbox" />
                                                                        <span className="checkmarks" />
                                                                    </label>
                                                                </div>
                                                                <div className="collapse-inside-text">
                                                                    <h5>Germany</h5>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="filter-set-content">
                                                <div className="filter-set-content-head">
                                                    <Link
                                                        to="#"
                                                        className="collapsed"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#owner"
                                                        aria-expanded="false"
                                                        aria-controls="owner"
                                                    >
                                                        Owner
                                                    </Link>
                                                </div>
                                                <div
                                                    className="filter-set-contents accordion-collapse collapse"
                                                    id="owner"
                                                    data-bs-parent="#accordionExample"
                                                >
                                                    <div className="filter-content-list">
                                                        <div className="form-wrap icon-form">
                                                            <span className="form-icon">
                                                                <i className="ti ti-search" />
                                                            </span>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Search Owner"
                                                            />
                                                        </div>
                                                        <ul>
                                                            <li>
                                                                <div className="filter-checks">
                                                                    <label className="checkboxs">
                                                                        <input
                                                                            type="checkbox"
                                                                            defaultChecked
                                                                        />
                                                                        <span className="checkmarks" />
                                                                    </label>
                                                                </div>
                                                                <div className="collapse-inside-text">
                                                                    <h5>Hendry</h5>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="filter-checks">
                                                                    <label className="checkboxs">
                                                                        <input type="checkbox" />
                                                                        <span className="checkmarks" />
                                                                    </label>
                                                                </div>
                                                                <div className="collapse-inside-text">
                                                                    <h5>Guillory</h5>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="filter-checks">
                                                                    <label className="checkboxs">
                                                                        <input type="checkbox" />
                                                                        <span className="checkmarks" />
                                                                    </label>
                                                                </div>
                                                                <div className="collapse-inside-text">
                                                                    <h5>Jami</h5>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="filter-checks">
                                                                    <label className="checkboxs">
                                                                        <input type="checkbox" />
                                                                        <span className="checkmarks" />
                                                                    </label>
                                                                </div>
                                                                <div className="collapse-inside-text">
                                                                    <h5>Theresa</h5>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="filter-checks">
                                                                    <label className="checkboxs">
                                                                        <input type="checkbox" />
                                                                        <span className="checkmarks" />
                                                                    </label>
                                                                </div>
                                                                <div className="collapse-inside-text">
                                                                    <h5>Espinosa</h5>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="filter-set-content">
                                                <div className="filter-set-content-head">
                                                    <Link
                                                        to="#"
                                                        className="collapsed"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#Status"
                                                        aria-expanded="false"
                                                        aria-controls="Status"
                                                    >
                                                        Status
                                                    </Link>
                                                </div>
                                                <div
                                                    className="filter-set-contents accordion-collapse collapse"
                                                    id="Status"
                                                    data-bs-parent="#accordionExample"
                                                >
                                                    <div className="filter-content-list">
                                                        <ul>
                                                            <li>
                                                                <div className="filter-checks">
                                                                    <label className="checkboxs">
                                                                        <input
                                                                            type="checkbox"
                                                                            defaultChecked
                                                                        />
                                                                        <span className="checkmarks" />
                                                                    </label>
                                                                </div>
                                                                <div className="collapse-inside-text">
                                                                    <h5>Active</h5>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="filter-checks">
                                                                    <label className="checkboxs">
                                                                        <input type="checkbox" />
                                                                        <span className="checkmarks" />
                                                                    </label>
                                                                </div>
                                                                <div className="collapse-inside-text">
                                                                    <h5>Inactive</h5>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="filter-set-content">
                                                <div className="filter-set-content-head">
                                                    <Link
                                                        to="#"
                                                        className="collapsed"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapseOne"
                                                        aria-expanded="false"
                                                        aria-controls="collapseOne"
                                                    >
                                                        Rating
                                                    </Link>
                                                </div>
                                                <div
                                                    className="filter-set-contents accordion-collapse collapse"
                                                    id="collapseOne"
                                                    data-bs-parent="#accordionExample"
                                                >
                                                    <div className="filter-content-list">
                                                        <ul>
                                                            <li>
                                                                <div className="filter-checks">
                                                                    <label className="checkboxs">
                                                                        <input
                                                                            type="checkbox"
                                                                            defaultChecked
                                                                        />
                                                                        <span className="checkmarks" />
                                                                    </label>
                                                                </div>
                                                                <div className="rating">
                                                                    <i className="fa fa-star filled" />
                                                                    <i className="fa fa-star filled" />
                                                                    <i className="fa fa-star filled" />
                                                                    <i className="fa fa-star filled" />
                                                                    <i className="fa fa-star filled" />
                                                                    <span>5.0</span>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="filter-checks">
                                                                    <label className="checkboxs">
                                                                        <input type="checkbox" />
                                                                        <span className="checkmarks" />
                                                                    </label>
                                                                </div>
                                                                <div className="rating">
                                                                    <i className="fa fa-star filled" />
                                                                    <i className="fa fa-star filled" />
                                                                    <i className="fa fa-star filled" />
                                                                    <i className="fa fa-star filled" />
                                                                    <i className="fa fa-star" />
                                                                    <span>4.0</span>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="filter-checks">
                                                                    <label className="checkboxs">
                                                                        <input type="checkbox" />
                                                                        <span className="checkmarks" />
                                                                    </label>
                                                                </div>
                                                                <div className="rating">
                                                                    <i className="fa fa-star filled" />
                                                                    <i className="fa fa-star filled" />
                                                                    <i className="fa fa-star filled" />
                                                                    <i className="fa fa-star" />
                                                                    <i className="fa fa-star" />
                                                                    <span>3.0</span>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="filter-checks">
                                                                    <label className="checkboxs">
                                                                        <input type="checkbox" />
                                                                        <span className="checkmarks" />
                                                                    </label>
                                                                </div>
                                                                <div className="rating">
                                                                    <i className="fa fa-star filled" />
                                                                    <i className="fa fa-star filled" />
                                                                    <i className="fa fa-star" />
                                                                    <i className="fa fa-star" />
                                                                    <i className="fa fa-star" />
                                                                    <span>2.0</span>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="filter-checks">
                                                                    <label className="checkboxs">
                                                                        <input type="checkbox" />
                                                                        <span className="checkmarks" />
                                                                    </label>
                                                                </div>
                                                                <div className="rating">
                                                                    <i className="fa fa-star filled" />
                                                                    <i className="fa fa-star" />
                                                                    <i className="fa fa-star" />
                                                                    <i className="fa fa-star" />
                                                                    <i className="fa fa-star" />
                                                                    <span>1.0</span>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="filter-set-content">
                                                <div className="filter-set-content-head">
                                                    <Link
                                                        to="#"
                                                        className="collapsed"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapseThree"
                                                        aria-expanded="false"
                                                        aria-controls="collapseThree"
                                                    >
                                                        Tags
                                                    </Link>
                                                </div>
                                                <div
                                                    className="filter-set-contents accordion-collapse collapse"
                                                    id="collapseThree"
                                                    data-bs-parent="#accordionExample"
                                                >
                                                    <div className="filter-content-list">
                                                        <ul>
                                                            <li>
                                                                <div className="filter-checks">
                                                                    <label className="checkboxs">
                                                                        <input
                                                                            type="checkbox"
                                                                            defaultChecked
                                                                        />
                                                                        <span className="checkmarks" />
                                                                    </label>
                                                                </div>
                                                                <div className="collapse-inside-text">
                                                                    <h5>Promotion</h5>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="filter-checks">
                                                                    <label className="checkboxs">
                                                                        <input type="checkbox" />
                                                                        <span className="checkmarks" />
                                                                    </label>
                                                                </div>
                                                                <div className="collapse-inside-text">
                                                                    <h5>Rated</h5>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="filter-checks">
                                                                    <label className="checkboxs">
                                                                        <input type="checkbox" />
                                                                        <span className="checkmarks" />
                                                                    </label>
                                                                </div>
                                                                <div className="collapse-inside-text">
                                                                    <h5>Rejected</h5>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="filter-checks">
                                                                    <label className="checkboxs">
                                                                        <input type="checkbox" />
                                                                        <span className="checkmarks" />
                                                                    </label>
                                                                </div>
                                                                <div className="collapse-inside-text">
                                                                    <h5>Collab</h5>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="filter-checks">
                                                                    <label className="checkboxs">
                                                                        <input type="checkbox" />
                                                                        <span className="checkmarks" />
                                                                    </label>
                                                                </div>
                                                                <div className="collapse-inside-text">
                                                                    <h5>Calls</h5>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="filter-reset-btns">
                                            <div className="row">
                                                <div className="col-6">
                                                    <Link to="#" className="btn btn-light">
                                                        Reset
                                                    </Link>
                                                </div>
                                                <div className="col-6">
                                                    <Link
                                                        to={route.contactList}
                                                        className="btn btn-primary"
                                                    >
                                                        Filter
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li> */}


                        <li>
                            <Link
                                to="#"
                                className="btn btn-primary add-popup"
                                onClick={() => togglePopup(false)}
                            >
                                <i className="ti ti-square-rounded-plus" />
                                Add Staff
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
}

export default SearchSection