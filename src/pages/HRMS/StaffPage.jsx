import { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import ManageStaffList from "../../components/HRMS/ManageStaffList.jsx";


const StaffPage = () => {
  const [addUser, setAdduser] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);


  const togglePopup = () => {
    setAdduser(!addUser);

  };

  const options2 = [
    { value: "Choose", label: "Choose" },
    { value: "Germany", label: "Germany" },
    { value: "USA", label: "USA" },
    { value: "Canada", label: "Canada" },
    { value: "India", label: "India" },
    { value: "China", label: "China" },
  ];



  return <div>
    <div className="page-wrapper">
      <div className="content">
        <div className="row">
          <div className="col-md-12">
            {/* Page Header */}
            <div className="page-header">
              <div className="row align-items-center">
                <div className="col-8">
                  <h4 className="page-title">User<span className="count-title">123</span></h4>
                </div>
                <div className="col-4 text-end">
                  <div className="head-icons">
                    <a href="manage-users.html" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Refresh"><i className="ti ti-refresh-dot" /></a>
                    <a href="#" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Collapse" id="collapse-header"><i className="ti ti-chevrons-up" /></a>
                  </div>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            <div className="card main-card">
              <div className="card-body">
                {/* Search */}
                <div className="search-section">
                  <div className="row">
                    <div className="col-md-5 col-sm-4">
                      <div className="form-wrap icon-form">
                        <span className="form-icon"><i className="ti ti-search" /></span>
                        <input type="text" className="form-control" placeholder="Search User" />
                      </div>
                    </div>
                    <div className="col-md-7 col-sm-8">
                      <div className="export-list text-sm-end">
                        <ul>
                          <li>
                            <div className="export-dropdwon">
                              <a href="#" className="dropdown-toggle" data-bs-toggle="dropdown"><i className="ti ti-package-export" />Export</a>
                              <div className="dropdown-menu  dropdown-menu-end">
                                <ul>
                                  <li>
                                    <a href="#"><i className="ti ti-file-type-pdf text-danger" />Export as PDF</a>
                                  </li>
                                  <li>
                                    <a href="#"><i className="ti ti-file-type-xls text-green" />Export as Excel </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>
                          <li>
                            <a href="#" className="btn btn-primary add-popup" onClick={() => togglePopup(false)}><i className="ti ti-square-rounded-plus" />Add User</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Search */}
                {/* Filter */}
                <div className="filter-section filter-flex">
                  <div className="sortby-list">
                    <ul>
                      <li>
                        <div className="sort-dropdown drop-down">
                          <a href="#" className="dropdown-toggle" data-bs-toggle="dropdown"><i className="ti ti-sort-ascending-2" />Sort </a>
                          <div className="dropdown-menu  dropdown-menu-start">
                            <ul>
                              <li>
                                <a href="#">
                                  <i className="ti ti-circle-chevron-right" />Ascending
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="ti ti-circle-chevron-right" />Descending
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="ti ti-circle-chevron-right" />Recently Viewed
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="ti ti-circle-chevron-right" />Recently Added
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="form-wrap icon-form">
                          <span className="form-icon"><i className="ti ti-calendar" /></span>
                          <input type="text" className="form-control bookingrange" placeholder='' />
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="filter-list">
                    <ul>
                      <li>
                        <div className="manage-dropdwon">
                          <a href="#" className="btn btn-purple-light" data-bs-toggle="dropdown" data-bs-auto-close="false"><i className="ti ti-columns-3" />Manage Columns</a>
                          <div className="dropdown-menu  dropdown-menu-md-end">
                            <h4>Want to manage datatables?</h4>
                            <p>Please drag and drop your column to reorder your table and enable see option as you want.</p>
                            <ul>
                              <li>
                                <p><i className="ti ti-grip-vertical" />Name</p>
                                <div className="status-toggle">
                                  <input type="checkbox" id="col-name" className="check" />
                                  <label htmlFor="col-name" className="checktoggle" />
                                </div>
                              </li>
                              <li>
                                <p><i className="ti ti-grip-vertical" />Phone</p>
                                <div className="status-toggle">
                                  <input type="checkbox" id="col-phone" className="check" />
                                  <label htmlFor="col-phone" className="checktoggle" />
                                </div>
                              </li>
                              <li>
                                <p><i className="ti ti-grip-vertical" />Email</p>
                                <div className="status-toggle">
                                  <input type="checkbox" id="col-email" className="check" />
                                  <label htmlFor="col-email" className="checktoggle" />
                                </div>
                              </li>
                              <li>
                                <p><i className="ti ti-grip-vertical" />Location</p>
                                <div className="status-toggle">
                                  <input type="checkbox" id="col-tag" className="check" />
                                  <label htmlFor="col-tag" className="checktoggle" />
                                </div>
                              </li>
                              <li>
                                <p><i className="ti ti-grip-vertical" />Created Date</p>
                                <div className="status-toggle">
                                  <input type="checkbox" id="col-loc" className="check" />
                                  <label htmlFor="col-loc" className="checktoggle" />
                                </div>
                              </li>
                              <li>
                                <p><i className="ti ti-grip-vertical" />Last Activity</p>
                                <div className="status-toggle">
                                  <input type="checkbox" id="col-rate" className="check" />
                                  <label htmlFor="col-rate" className="checktoggle" />
                                </div>
                              </li>
                              <li>
                                <p><i className="ti ti-grip-vertical" />Status</p>
                                <div className="status-toggle">
                                  <input type="checkbox" id="col-owner" className="check" />
                                  <label htmlFor="col-owner" className="checktoggle" />
                                </div>
                              </li>
                              <li>
                                <p><i className="ti ti-grip-vertical" />Action</p>
                                <div className="status-toggle">
                                  <input type="checkbox" id="col-contact" className="check" defaultChecked />
                                  <label htmlFor="col-contact" className="checktoggle" />
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      {/* <li>
                          <div className="form-sorts dropdown ">
                            <Link
                              to="#"
                              data-bs-toggle="dropdown"
                              data-bs-auto-close="false"
                            >
                              <i className="ti ti-filter-share" />
                              Filter
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
                        <div className="form-sorts dropdown">
                          <Link
                            to="#"
                            data-bs-toggle="dropdown"
                            data-bs-auto-close="false"
                            aria-expanded="true"
                            className="show"
                            onClick={() => { setIsFilterOpen(prev => !prev) }}
                          >
                            <i className="ti ti-filter-share" />
                            Filter
                          </Link>
                          {isFilterOpen &&
                            <div className="filter-dropdown-menu dropdown-menu dropdown-menu-md-end show">
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
                                        to='#'
                                        className="btn btn-primary"
                                      >
                                        Filter
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          }
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* /Filter */}
                {/* Manage Users List */}

                <ManageStaffList />

                {/* /Manage Users List */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* /Page Wrapper */}
    {/* Add User */}
    <div className={`toggle-popup ${addUser ? "sidebar-popup" : ""}`}>
      <div className="sidebar-layout">
        <div className="sidebar-header">
          <h4>Add New User</h4>
          <a href="#" className="sidebar-close toggle-btn" onClick={togglePopup}><i className="ti ti-x" /></a>
        </div>
        <div className="toggle-body">
          <div className="pro-create">
            <form action="manage-users.html">
              <div className="accordion-lists" id="list-accord">
                {/* Basic Info */}
                <div className="manage-user-modal">
                  <div className="manage-user-modals">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="profile-pic-upload">
                          <div className="profile-pic">
                            <span><i className="ti ti-photo" /></span>
                          </div>
                          <div className="upload-content">
                            <div className="upload-btn">
                              <input type="file" />
                              <span>
                                <i className="ti ti-file-broken" />Upload File
                              </span>
                            </div>
                            <p>JPG, GIF or PNG. Max size of 800K</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-wrap">
                          <label className="col-form-label"> Name <span className="text-danger">*</span></label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-wrap">
                          <label className="col-form-label">User Name <span className="text-danger">*</span></label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-wrap">
                          <div className="d-flex justify-content-between align-items-center">
                            <label className="col-form-label">Email <span className="text-danger">*</span></label>
                            <div className="status-toggle small-toggle-btn d-flex align-items-center">
                              <span className="me-2 label-text">Email Opt Out</span>
                              <input type="checkbox" id="user1" className="check" defaultChecked />
                              <label htmlFor="user1" className="checktoggle" />
                            </div>
                          </div>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-wrap">
                          <label className="col-form-label">Role <span className="text-danger">*</span></label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-wrap">
                          <label className="col-form-label">Phone 1 <span className="text-danger">*</span></label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-wrap">
                          <label className="col-form-label">Phone 2</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-wrap">
                          <label className="col-form-label">Password <span className="text-danger">*</span></label>
                          <div className="icon-form-end">
                            <span className="form-icon"><i className="ti ti-eye-off" /></span>
                            <input type="password" className="form-control" />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-wrap">
                          <label className="col-form-label">Repeat Password <span className="text-danger">*</span></label>
                          <div className="icon-form-end">
                            <span className="form-icon"><i className="ti ti-eye-off" /></span>
                            <input type="password" className="form-control" />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-wrap">
                          <label className="col-form-label">Location <span className="text-danger">*</span></label>
                          <Select
                            classNamePrefix="react-select"
                            className="select"
                            options={options2}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="radio-wrap">
                          <label className="col-form-label">Status</label>
                          <div className="d-flex flex-wrap">
                            <div className="radio-btn">
                              <input type="radio" className="status-radio" id="active1" name="status" defaultChecked />
                              <label htmlFor="active1">Active</label>
                            </div>
                            <div className="radio-btn">
                              <input type="radio" className="status-radio" id="inactive1" name="status" />
                              <label htmlFor="inactive1">Inactive</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Basic Info */}
              </div>
              <div className="submit-button text-end">
                <a href="#" className="btn btn-light sidebar-close">Cancel</a>
                <button type="submit" className="btn btn-primary">Create</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    {/* /Add User */}
    {/* Edit User */}
    <div className="toggle-popup1">
      <div className="sidebar-layout">
        <div className="sidebar-header">
          <h4>Edit User</h4>
          <a href="#" className="sidebar-close1 toggle-btn"><i className="ti ti-x" /></a>
        </div>
        <div className="toggle-body">
          <div className="pro-create">
            <form action="manage-users.html">
              <div className="accordion-lists" id="list-accords">
                {/* Basic Info */}
                <div className="manage-user-modal">
                  <div className="manage-user-modals">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="profile-pic-upload">
                          <div className="profile-pic">
                            <span><i className="ti ti-photo" /></span>
                          </div>
                          <div className="upload-content">
                            <div className="upload-btn">
                              <input type="file" />
                              <span>
                                <i className="ti ti-file-broken" />Upload File
                              </span>
                            </div>
                            <p>JPG, GIF or PNG. Max size of 800K</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-wrap">
                          <label className="col-form-label"> Name <span className="text-danger">*</span></label>
                          <input type="text" className="form-control" defaultValue="Darlee Robertson" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-wrap">
                          <label className="col-form-label">User Name <span className="text-danger">*</span></label>
                          <input type="text" className="form-control" defaultValue="Darlee_47" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-wrap">
                          <div className="d-flex justify-content-between align-items-center">
                            <label className="col-form-label">Email <span className="text-danger">*</span></label>
                            <div className="status-toggle small-toggle-btn d-flex align-items-center">
                              <span className="me-2 label-text">Email Opt Out</span>
                              <input type="checkbox" id="user" className="check" defaultChecked />
                              <label htmlFor="user" className="checktoggle" />
                            </div>
                          </div>
                          <input type="text" className="form-control" defaultValue="robertson@example.com" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-wrap">
                          <label className="col-form-label">Role <span className="text-danger">*</span></label>
                          <input type="text" className="form-control" defaultValue="Facility Manager" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-wrap">
                          <label className="col-form-label">Phone 1 <span className="text-danger">*</span></label>
                          <input type="text" className="form-control" defaultValue="+1 875455453" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-wrap">
                          <label className="col-form-label">Phone 2</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-wrap">
                          <label className="col-form-label">Password <span className="text-danger">*</span></label>
                          <div className="icon-form-end">
                            <span className="form-icon"><i className="ti ti-eye-off" /></span>
                            <input type="password" className="form-control" defaultValue="********" />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-wrap">
                          <label className="col-form-label">Repeat Password <span className="text-danger">*</span></label>
                          <div className="icon-form-end">
                            <span className="form-icon"><i className="ti ti-eye-off" /></span>
                            <input type="password" className="form-control" defaultValue="********" />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-wrap">
                          <label className="col-form-label">Location <span className="text-danger">*</span></label>
                          <Select
                            classNamePrefix="react-select"
                            className="select"
                            options={options2}
                          />
                          <select className="select">
                            <option>Germany</option>
                            <option>USA</option>
                            <option>Canada</option>
                            <option>India</option>
                            <option>China</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="radio-wrap">
                          <label className="col-form-label">Status</label>
                          <div className="d-flex flex-wrap">
                            <div className="radio-btn">
                              <input type="radio" className="status-radio" id="active" name="status" defaultChecked />
                              <label htmlFor="active">Active</label>
                            </div>
                            <div className="radio-btn">
                              <input type="radio" className="status-radio" id="inactive" name="status" />
                              <label htmlFor="inactive">Inactive</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Basic Info */}
              </div>
              <div className="submit-button text-end">
                <a href="#" className="btn btn-light sidebar-close1">Cancel</a>
                <button type="submit" className="btn btn-primary">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    {/* /Edit User */}
    {/* Delete User */}
    <div className="modal custom-modal fade" id="delete_contact" role="dialog">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header border-0 m-0 justify-content-end">
            <button className="btn-close" data-bs-dismiss="modal" aria-label="Close">
              <i className="ti ti-x" />
            </button>
          </div>
          <div className="modal-body">
            <div className="success-message text-center">
              <div className="success-popup-icon">
                <i className="ti ti-trash-x" />
              </div>
              <h3>Remove User?</h3>
              <p className="del-info">Are you sure you want to remove it.</p>
              <div className="col-lg-12 text-center modal-btn">
                <a href="#" className="btn btn-light" data-bs-dismiss="modal">Cancel</a>
                <a href="manage-users.html" className="btn btn-danger">Yes, Delete it</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* /Delete User */}
  </div>
}


export default StaffPage





