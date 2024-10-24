import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Select from "react-select";
import { TagsInput } from "react-tag-input-component";
import AddNewCompany from "../../components/Sales/AddNewCompany";
import { toast } from 'react-toastify'
import axios from 'axios';

const EditLead = ({
    togglePopup,
    addLead,
    sourceOptions,
    industryOptions,
    countryOptions,
    fetchLeadData,
    onLeadDetails,
    leadDetails,
    setLeadDetails
}) => {

    const apiUrl = import.meta.env.VITE_API_URL;
    const Token = localStorage.getItem('token') || '';

    const initialForm = {
        leadId: leadDetails.leadId,
        leadName: leadDetails.leadName,
        leadEmail: leadDetails.leadEmail,
        leadMobile1: leadDetails.leadMobile1,
        leadMobile2: leadDetails.leadMobile2,
        leadMobile3: leadDetails.leadMobile3,
        value: leadDetails.value,
        tags: leadDetails.tags,
        companyId: leadDetails.companyId,
        countryId: leadDetails.countryId,
        industryId: leadDetails.industryId,
        sourceId: leadDetails.sourceId,
        visibility: leadDetails.visibility
    }
    const [formData, setFormData] = useState(initialForm);
    const [tagValue, setTagValue] = useState(['Collab']);
    const [addCompany, setAddCompany] = useState(false);
    const [newContents, setNewContents] = useState([0]);
    const [leadTypePerson, setLeadTypePerson] = useState(leadDetails.companyId ? false : true);
    const [companyOptions, setCompanyOptions] = useState([]);

    const addNewContent = () => {
        setNewContents([...newContents, newContents.length]);
    };

    const addCompanyPopup = () => {
        setAddCompany(!addCompany);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setFormData((prevForm) => ({
            ...prevForm,
            [name]: value
        }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            formData.tags = JSON.stringify(tagValue)
            const formDataToSend = new FormData();
            for (const key in formData) {
                if (formData[key] !== null) {
                    formDataToSend.append(key, formData[key])
                }
            }
            const response = await fetch(`${apiUrl}/lead/edit-lead`, {
                method: 'PUT',
                headers: {
                    Authorization: `Bearer ${Token}`
                },
                body: formDataToSend
            })
            const resData = await response.json();
            if (!response.ok) {
                throw new Error(resData.message || 'Failed to edit lead');
            }
            togglePopup()
            fetchLeadData()
            setLeadDetails(null)
            toast.success('Lead edited successfully!');
        } catch (error) {
            toast.error(error.message || 'Something went wrong');
        }
    }

    const fetchCompanyData = async () => {
        try {
            const response = await axios.get(`${apiUrl}/lead/company-list`, {
                headers: {
                    Authorization: `Bearer ${Token}`
                }
            });
            const formattedData = response.data.data.map((item) => ({
                label: item.companyName,
                value: item.companyId
            }));
            setCompanyOptions(formattedData);

        } catch (error) {
            toast.error(error.message)
        }
    };

    useEffect(() => {

        fetchCompanyData()

    }, [leadDetails])

    return (
        <>
            <div className={`toggle-popup ${addLead ? "sidebar-popup" : ""}`}>
                <div className="sidebar-layout">
                    <div className="sidebar-header">
                        <h4>Edit New Lead</h4>
                        <Link
                            to="#"
                            className="sidebar-close toggle-btn"
                            onClick={() => {
                                togglePopup(),
                                    onLeadDetails(null)
                            }}
                        >
                            <i className="ti ti-x" />
                        </Link>
                    </div>
                    <div className="toggle-body">
                        <div className="pro-create">
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-wrap">
                                            <div className="radio-wrap inline-radio-button">
                                                <label className="col-form-label">Lead Type : </label>
                                                <div className="d-flex flex-wrap">
                                                    <div className="radio-btn">
                                                        <input
                                                            type="radio"
                                                            className="status-radio"
                                                            id="person"
                                                            name="leave"
                                                            defaultChecked={leadTypePerson === true}
                                                            onChange={() => {
                                                                setLeadTypePerson((prev) => !prev)
                                                            }}
                                                        />
                                                        <label htmlFor="person">Person</label>
                                                    </div>
                                                    <div className="radio-btn">
                                                        <input
                                                            type="radio"
                                                            className="status-radio"
                                                            id="org"
                                                            name="leave"
                                                            defaultChecked={leadTypePerson === false}
                                                            onChange={() => {
                                                                setLeadTypePerson((prev) => !prev)
                                                            }}
                                                        />
                                                        <label htmlFor="org">Organization</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-wrap">
                                            <label className="col-form-label">
                                                Lead Name <span className="text-danger">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name='leadName'
                                                required
                                                value={formData.leadName}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-wrap">
                                            <label className="col-form-label">
                                                Source <span className="text-danger">*</span>
                                            </label>
                                            <Select
                                                classNamePrefix="react-select"
                                                className="select"
                                                value={sourceOptions.find(option => option.value === formData.sourceId)}
                                                onChange={(event) => {
                                                    let { value } = event
                                                    handleInputChange({ target: { name: 'sourceId', value } })

                                                }}
                                                options={sourceOptions}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-wrap">
                                            <label className="col-form-label">
                                                Industry <span className="text-danger">*</span>
                                            </label>
                                            <Select
                                                classNamePrefix="react-select"
                                                className="select"
                                                value={industryOptions.find(option => option.value === formData.industryId)}
                                                onChange={(event) => {
                                                    let { value } = event
                                                    handleInputChange({ target: { name: 'industryId', value } })

                                                }}
                                                options={industryOptions}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-wrap">
                                            <label className="col-form-label">
                                                Value <span className="text-danger">*</span>
                                            </label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                name='value'
                                                required
                                                value={formData.value}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-wrap">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <label className="col-form-label">
                                                    Lead Email <span className="text-danger">*</span>
                                                </label>
                                                <div className="status-toggle small-toggle-btn d-flex align-items-center">
                                                    <span className="me-2 label-text">
                                                        Email Opt Out
                                                    </span>
                                                    <input
                                                        type="checkbox"
                                                        id="user1"
                                                        className="check"
                                                        defaultChecked={true}
                                                    />
                                                    <label
                                                        htmlFor="user1"
                                                        className="checktoggle"
                                                    />
                                                </div>
                                            </div>
                                            <input
                                                name="leadEmail"
                                                type="email"
                                                className="form-control"
                                                required
                                                value={formData.leadEmail}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                    {newContents.map((index) => (
                                        <div className="col-md-6" key={index} >
                                            <div className="add-product-new">
                                                <div className="row align-items-end">
                                                    <div className="col-md-12">
                                                        <div className="form-wrap mb-2">
                                                            <label className="col-form-label">
                                                                Lead Mobile <span className="text-danger">*</span>
                                                            </label>
                                                            <input
                                                                name="leadMobile1"
                                                                type="number"
                                                                className="form-control"
                                                                value={formData.leadMobile1}
                                                                onChange={(event) => {
                                                                    let { value } = event.target
                                                                    handleInputChange({ target: { name: "leadMobile1", value } })
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <Link
                                                    onClick={addNewContent}
                                                    to="#"
                                                    className="add-new add-new-phone mb-3 d-block"
                                                >
                                                    <i className="ti ti-square-rounded-plus me-2" />
                                                    Add New
                                                </Link>
                                            </div>
                                        </div>
                                    ))}

                                    {!leadTypePerson &&
                                        <div className="col-md-12">
                                            <div className="form-wrap">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <label className="col-form-label">
                                                        Company <span className="text-danger">*</span>
                                                    </label>
                                                    <Link
                                                        to="#"
                                                        className="add-new add-new-company add-popups"
                                                        onClick={addCompanyPopup}
                                                    >
                                                        <i className="ti ti-square-rounded-plus me-2" />
                                                        Add New
                                                    </Link>
                                                </div>
                                                <Select
                                                    classNamePrefix="react-select"
                                                    className="select"
                                                    value={companyOptions.find(option => option.value === formData.companyId)}
                                                    onChange={(event) => {
                                                        let { value } = event
                                                        handleInputChange({ target: { name: 'companyId', value } })
                                                    }}
                                                    options={companyOptions}
                                                />
                                            </div>
                                        </div>
                                    }
                                    <div className="col-md-6">
                                        <div className="form-wrap">
                                            <label className="col-form-label">
                                                Country <span className="text-danger">*</span>
                                            </label>
                                            <Select
                                                classNamePrefix="react-select"
                                                className="select"
                                                value={countryOptions.find(option => option.value === formData.countryId)}
                                                onChange={(event) => {
                                                    let { value } = event
                                                    handleInputChange({ target: { name: 'countryId', value } })
                                                }}
                                                options={countryOptions}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-wrap">
                                            <label className="col-form-label">
                                                Tags <span className="text-danger">*</span>
                                            </label>
                                            <TagsInput
                                                className="input-tags form-control"
                                                value={tagValue}
                                                onChange={setTagValue}
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="radio-wrap form-wrap">
                                                <label className="col-form-label">Visibility</label>
                                                <div className="d-flex flex-wrap">
                                                    <div className="radio-btn">
                                                        <input
                                                            type="radio"
                                                            className="status-radio"
                                                            id="public1"
                                                            name="visibility"
                                                            value="public"
                                                            checked={formData.visibility == "public"}
                                                            onChange={handleInputChange}
                                                        />
                                                        <label htmlFor="public1">Public</label>
                                                    </div>
                                                    <div className="radio-btn">
                                                        <input
                                                            type="radio"
                                                            className="status-radio"
                                                            id="private1"
                                                            name="visibility"
                                                            value="private"
                                                            checked={formData.visibility == "private"}
                                                            onChange={handleInputChange}
                                                        />
                                                        <label htmlFor="private1">Private</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="col-md-6">
                                            <div className="radio-wrap form-wrap">
                                                <label className="col-form-label">Status</label>
                                                <div className="d-flex flex-wrap">
                                                    <div className="radio-btn">
                                                        <input
                                                            type="radio"
                                                            className="status-radio"
                                                            id="active1"
                                                            name="status"
                                                            value="active"
                                                            checked={formData.status == "active"}
                                                            onChange={handleInputChange}
                                                        />
                                                        <label htmlFor="active1">Active</label>
                                                    </div>
                                                    <div className="radio-btn">
                                                        <input
                                                            type="radio"
                                                            className="status-radio"
                                                            id="inactive1"
                                                            name="status"
                                                            value="inactive"
                                                            checked={formData.status == "inactive"}
                                                            onChange={handleInputChange}
                                                        />
                                                        <label htmlFor="inactive1">Inactive</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="submit-button text-end">
                                    <Link to="#" className="btn btn-light sidebar-close" onClick={togglePopup}>
                                        Cancel
                                    </Link>
                                    <button type="submit" className="btn btn-primary">
                                        Edit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <AddNewCompany
                addCompany={addCompany}
                addCompanyPopup={addCompanyPopup}
                sourceOptions={sourceOptions}
                industryOptions={industryOptions}
                countryOptions={countryOptions}
                handleRefreshCompanyData={fetchCompanyData}
            />

        </>
    )
}

export default EditLead