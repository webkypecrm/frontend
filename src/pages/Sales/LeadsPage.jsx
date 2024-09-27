import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap-daterangepicker/daterangepicker.css";
import PageHeader from "../../components/Layouts/PageHeader"
import { Empty } from "antd";
import axios from "axios";
import CampaignStatus from "../../components/Layouts/CampaignStatus/Index"
import SearchSection from "../../components/Sales/SearchSection";
import ManageLeadList from "../../components/Sales/ManageLeadList";
import AddLead from "../../components/Sales/AddLead";
import ContentLoader from "../../components/Layouts/ContentLoader/Index";
import ErrorLoader from "../../components/Layouts/ErrorLoader/Index";
import EditLead from "../../components/Sales/EditLead";
import EditCompany from "../../components/Sales/EditCompany";
import Filter from '../../components/Sales/Filter'


const LeadsPage = () => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const Token = localStorage.getItem('token') || '';
    const [addLead, setAddLead] = useState(false);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [sourceOptions, setSourceOptions] = useState([]);
    const [industryOptions, setIndustryOptions] = useState([]);
    const [countryOptions, setCountryOptions] = useState([]);
    const [leadDetails, setLeadDetails] = useState(null);
    const [editCompany, setEditCompany] = useState(false);
    const [companyDetails, setCompanyDetails] = useState(null);
    const [filterSlider, setFilterSlider] = useState(false);
    const [manageColumns, setManageColumns] = useState({
        "Lead Name": true,
        "Lead Email": true,
        "Lead Mobile1": true,
        "Lead Mobile2": false,
        "Lead Mobile3": false,
        "Company Name": true,
        "Company Email": false,
        "Company Location": false,
        "Country": true,
        "Source": true,
        "Tags": true,
        "Value": false,
        "Assign To": true,
        "Updates": true,
        "Created Date": true,
        "Stage": true,
        "Action": true,
    });
    const [totalPages, setTotalPages] = useState(0);
    const [pageSize, setPageSize] = useState(2);
    const [filterByObj, setFilterByObj] = useState({
        from: "",
        to: "",
        source: "",
        industry: "",
        country: "",
        stage: "",
        company: "",
        leadOwner: "",
    })

    const togglePopup = () => {
        setAddLead(prev => !prev);
    };

    function leadDetailsHandler(data) {
        setLeadDetails(data)
    }

    const fetchLeadData = async (page) => {
        try {
            console.log('filterByObj =>', filterByObj)
            const { from, to, industry, source, country, stage, company, leadOwner } = filterByObj;
            const response = await axios.get(`${apiUrl}/lead/lead-list?page=${page ? page : 1}&pageSize=${pageSize}&to=${to}&from=${from}
                &industry=${industry}&source=${source}&country=${country}&stage=${stage}&company=${company}&leadOwner=${leadOwner}`,
                {
                    headers: {
                        Authorization: `Bearer ${Token}`
                    }
                });
            const formattedData = response.data.data.map((item) => ({
                ...item,
                key: item.leadId,
                tags: JSON.parse(item.tags)
            }));

            setData(formattedData);
            setTotalPages(response.data.totalCount)
            setIsLoading(false)

        } catch (error) {
            setError(error)
            setIsLoading(false)

        }
    };

    const fetchSourceData = async () => {
        try {
            const response = await axios.get(`${apiUrl}/master/source-list`, {
                headers: {
                    Authorization: `Bearer ${Token}`
                }
            });
            const formattedData = response.data.data.map((item) => ({
                label: item.name,
                value: item.id
            }));
            setSourceOptions(formattedData);

        } catch (error) {
            setError(error)

        }
    };

    const fetchIndustryData = async () => {
        try {
            const response = await axios.get(`${apiUrl}/master/industry-list`, {
                headers: {
                    Authorization: `Bearer ${Token}`
                }
            });
            const formattedData = response.data.data.map((item) => ({
                label: item.name,
                value: item.id
            }));
            setIndustryOptions(formattedData);

        } catch (error) {
            setError(error)

        }
    };

    const fetchCountryData = async () => {
        try {
            const response = await axios.get(`${apiUrl}/employee/country-list`, {
                headers: {
                    Authorization: `Bearer ${Token}`
                }
            });
            const formattedData = response.data.data.map((item) => ({
                label: item.name,
                value: item.id
            }));
            setCountryOptions(formattedData);

        } catch (error) {
            setError(error)

        }
    };



    useEffect(() => {
        fetchLeadData()
        fetchSourceData()
        fetchIndustryData()
        fetchCountryData()

    }, [])

    return <>
        {/* Page Wrapper */}
        <div className="page-wrapper">
            <div className="content">
                <div className="row">
                    <div className="col-md-12">
                        {/* Page Header */}
                        <PageHeader title="Leads" count={data.length} />
                        {/* /Page Header */}

                        {/* Campaign Status */}
                        <CampaignStatus />
                        {/* /Campaign Status */}

                        <div className="card main-card">
                            <div className="card-body">
                                {/* Search */}
                                <SearchSection
                                    togglePopup={togglePopup}
                                    onManageColumns={setManageColumns}
                                    manageColumns={manageColumns}
                                    fetchLeadData={fetchLeadData}
                                    filterByObj={filterByObj}
                                    setFilterByObj={setFilterByObj}
                                    setFilterSlider={setFilterSlider}
                                />
                                {/* /Search */}

                                {/* Manage Users List */}
                                {isLoading &&
                                    <ContentLoader />
                                }
                                {error &&
                                    <ErrorLoader title={error.name} message={error.message} />
                                }
                                {data.length > 0 &&
                                    <ManageLeadList
                                        data={data}
                                        onLeadDetails={leadDetailsHandler}
                                        togglePopup={togglePopup}
                                        fetchLeadData={fetchLeadData}
                                        setEditCompany={setEditCompany}
                                        setCompanyDetails={setCompanyDetails}
                                        manageColumns={manageColumns}
                                        pageSize={pageSize}
                                        totalPages={totalPages}

                                    />
                                }
                                {
                                    data.length === 0 && !isLoading && !error && <Empty />
                                }
                                {/* /Manage Users List */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* /Page Wrapper */}
        {/* Add Lead */}
        {!leadDetails &&
            <AddLead
                addLead={addLead}
                togglePopup={togglePopup}
                sourceOptions={sourceOptions}
                industryOptions={industryOptions}
                countryOptions={countryOptions}
                fetchLeadData={fetchLeadData}
            />
        }
        {/* /Add Lead */}
        {/* /Edit Lead */}
        {leadDetails &&
            <EditLead
                addLead={addLead}
                togglePopup={togglePopup}
                sourceOptions={sourceOptions}
                industryOptions={industryOptions}
                countryOptions={countryOptions}
                leadDetails={leadDetails}
                onLeadDetails={leadDetailsHandler}
                fetchLeadData={fetchLeadData}
                setLeadDetails={setLeadDetails}
            />
        }
        {/* /Edit Lead */}
        {/* {  Edit Company} */}
        {companyDetails &&
            <EditCompany
                editCompany={editCompany}
                setEditCompany={setEditCompany}
                industryOptions={industryOptions}
                countryOptions={countryOptions}
                companyDetails={companyDetails}
                setCompanyDetails={setCompanyDetails}
                fetchLeadData={fetchLeadData}
            />
        }
        {/* {  Edit Company} */}
        <div className="form-sorts dropdown">
            <Filter
                filterSlider={filterSlider}
                setFilterSlider={setFilterSlider}
                sourceOptions={sourceOptions}
                industryOptions={industryOptions}
                countryOptions={countryOptions}
                setFilterByObj={setFilterByObj}
                fetchLeadData={fetchLeadData}
            />
        </div>
        <div className="modal custom-modal fade" id="save_view" role="dialog">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Add New View</h5>
                        <button
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        >
                            <i className="ti ti-x" />
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-wrap">
                                <label className="col-form-label">View Name</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="modal-btn text-end">
                                <Link
                                    to="#"
                                    className="btn btn-light"
                                    data-bs-dismiss="modal"
                                >
                                    Cancel
                                </Link>
                                <button type="submit" className="btn btn-danger">
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
}


export default LeadsPage