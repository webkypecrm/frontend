import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap-daterangepicker/daterangepicker.css";
import PageHeader from "../../components/Layouts/PageHeader"
import { Empty } from "antd";
import axios from "axios";
import CampaignStatus from "../../components/Layouts/CampaignStatus/Index"
import ManageLeadList from "../../components/Sales/ManageLeadList";
import AddLead from "../../components/Sales/AddLead";
import ContentLoader from "../../components/Layouts/ContentLoader/Index";
import ErrorLoader from "../../components/Layouts/ErrorLoader/Index";
import EditLead from "../../components/Sales/EditLead";
import EditCompany from "../../components/Sales/EditCompany";
import Filter from '../../components/Sales/Filter'
import ManageCustomerList from "../../components/Customer/ManageCustomerList";
import SearchSection from "../../components/Customer/SearchSection";



let num = 0;

const CustomerPage = () => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const Token = localStorage.getItem('token') || '';
    const [addLead, setAddCustomer] = useState(false);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [sourceOptions, setSourceOptions] = useState([]);
    const [industryOptions, setIndustryOptions] = useState([]);
    const [countryOptions, setCountryOptions] = useState([]);
    const [customerDetails, setCustomerDetails] = useState(null);
    const [editCompany, setEditCompany] = useState(false);
    const [companyDetails, setCompanyDetails] = useState(null);
    const [filterSlider, setFilterSlider] = useState(false);
    const [stageOptions, setStageOptions] = useState([]);
    const [manageColumns, setManageColumns] = useState({
        "Customer Name": true,
        "Customer Email": true,
        "Customer Mobile1": true,
        "Customer Mobile2": false,
        "Customer Mobile3": false,
        "Company Name": true,
        "Company Email": false,
        // "Company Location": false,
        "Country": true,
        "State": true,
        "City": true,
        "Source": true,
        "Tags": true,
        "Value": false,
        "Owner": true,
        // "Assign To": true,
        // "Updates": true,
        "Created Date": true,
        "Stage": true,
        "Contact": true,
        "Action": true,
    });
    const [totalPages, setTotalPages] = useState(0);
    // const [pageSize, setPageSize] = useState(2);
    const pageSize = 500

    // const employeeId = localStorage.getItem('staffId') || '';
    const staffType = localStorage.getItem('type') || '';



    const initialFilter = {
        from: "",
        to: "",
        source: [],
        industry: [],
        country: [],
        stage: [],
        company: [],
        customerOwner: [],
        search: "",
    }
    const [filterByObj, setFilterByObj] = useState(initialFilter);

    const togglePopup = () => {
        setAddCustomer(prev => !prev);
    };

    function customerDetailsHandler(data) {
        setCustomerDetails(data)
    }

    console.log('filterByObj =>', filterByObj, num++)

    const fetchStageData = async () => {
        try {
            const response = await axios.get(`${apiUrl}/master/stage-list`);
            const formattedData = response.data.data.map((item) => ({
                label: item.name,
                value: item.id
            }));
            setStageOptions(() => [...formattedData]);
        } catch (error) {
            toast.error(error.message)
        }
    };

    const fetchCustomerData = async (page) => {
        try {
            const { from, to, industry, source, country, stage, company, customerOwner, search } = filterByObj;

            let url = `${apiUrl}/customer/customer-list?page=${page ? page : 1}&pageSize=${pageSize}&to=${to}&from=${from}
                &industry=${industry}&source=${source}&country=${country}&stage=${stage}&company=${company}&customerOwner=${customerOwner}&search=${search}`

            if (staffType == '0') {
                url = `${apiUrl}/customer/customer-list?staffType=${0}&page=${page ? page : 1}&pageSize=${pageSize}&to=${to}&from=${from}
                &industry=${industry}&source=${source}&country=${country}&stage=${stage}&company=${company}&customerOwner=${customerOwner}&search=${search}`
            }

            console.log('search =>', search)
            const response = await axios.get(url,
                {
                    headers: {
                        Authorization: `Bearer ${Token}`
                    }
                });

            // let filterCustomerData 

            // if (staffType === 1) {
            //     filterCustomerData = response.data.data
            // } else {
            //     filterCustomerData = response.data.data.filter((item) => !(parseInt(item?.staffId === employeeId)))
            // }

            const formattedData = response.data.data.map((item) => ({
                ...item,
                key: item.customerId,
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

    // const fetchStageData = async () => {
    //     try {
    //         const response = await axios.get(`${apiUrl}/customer/customer-status-history?customerId=${data.customerId}`,
    //             {
    //                 headers: {
    //                     Authorization: `Bearer ${Token}`
    //                 }
    //             }
    //         );
    //         const formattedData = response.data.data
    //         setStageOptions(() => [...formattedData]);
    //     } catch (error) {
    //         console.log(error)
    //         toast.error(error.message)
    //     }
    // };

    useEffect(() => {
        fetchCustomerData()
        fetchSourceData()
        fetchIndustryData()
        fetchCountryData()
        fetchStageData()
    }, [])

    console.log('stageOptions =>', stageOptions)

    return <>
        {/* Page Wrapper */}
        <div className="page-wrapper">
            <div className="content">
                <div className="row">
                    <div className="col-md-12">
                        {/* Page Header */}
                        <PageHeader title="Total Sales Customer" count={totalPages} />
                        {/* /Page Header */}

                        {/* Campaign Status */}
                        {/* <CampaignStatus /> */}
                        {/* /Campaign Status */}



                        <div className="card main-card">
                            <div className="card-body">
                                {/* Search */}
                                <SearchSection
                                    togglePopup={togglePopup}
                                    onManageColumns={setManageColumns}
                                    manageColumns={manageColumns}
                                    fetchCustomerData={fetchCustomerData}
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
                                {data.length > 0 && !error &&
                                    <ManageCustomerList
                                        data={data}
                                        onCustomerDetails={customerDetailsHandler}
                                        togglePopup={togglePopup}
                                        fetchCustomerData={fetchCustomerData}
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
        {/* Add Customer */}
        {/* {!customerDetails &&
            <AddCustomer
                addCustomer={addCustomer}
                togglePopup={togglePopup}
                sourceOptions={sourceOptions}
                industryOptions={industryOptions}
                countryOptions={countryOptions}
                fetchCustomerData={fetchCustomerData}
            />
        } */}
        {/* /Add Customer */}
        {/* /Edit Customer */}
        {/* {customerDetails &&
            <EditCustomer
                addCustomer={addCustomer}
                togglePopup={togglePopup}
                sourceOptions={sourceOptions}
                industryOptions={industryOptions}
                countryOptions={countryOptions}
                customerDetails={customerDetails}
                onCustomerDetails={customerDetailsHandler}
                fetchCustomerData={fetchCustomerData}
                setCustomerDetails={setCustomerDetails}
            />
        } */}
        {/* /Edit Customer */}
        {/* {  Edit Company} */}
        {/* {companyDetails &&
            <EditCompany
                editCompany={editCompany}
                setEditCompany={setEditCompany}
                industryOptions={industryOptions}
                countryOptions={countryOptions}
                companyDetails={companyDetails}
                setCompanyDetails={setCompanyDetails}
                fetchCustomerData={fetchCustomerData}
            />
        } */}
        {/* {  Edit Company} */}
        {/* <div className="form-sorts dropdown">
            <Filter
                filterSlider={filterSlider}
                setFilterSlider={setFilterSlider}
                sourceOptions={sourceOptions}
                industryOptions={industryOptions}
                countryOptions={countryOptions}
                setFilterByObj={setFilterByObj}
                fetchCustomerData={fetchCustomerData}

            />
        </div> */}

    </>
}


export default CustomerPage