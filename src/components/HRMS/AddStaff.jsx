
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import Select from "react-select";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const AddStaff = ({
    adduser,
    togglePopup,
    departmentOptions,
    groupOptions,
    workShiftOptions,
    jobTypeOptions,
    handleRefreshData
}) => {

    const apiUrl = import.meta.env.VITE_API_URL;
    const Token = localStorage.getItem('token') || '';


    const initialForm = {
        name: '',
        email: '',
        mobile: '',
        gender: '',
        departmentId: null,
        roleId: null,
        jobTypeId: null,
        workShiftId: null,
        password: '',
        confirmPassword: '',
        groupId: null,
        status: 'active',
        profilePic: null
    }
    const [formData, setFormData] = useState(initialForm)
    const [passwords, setPasswords] = useState([false, false]); 
    const [profilePicFile, setProfilePicFile] = useState(null)
    const [roleOptions, setRoleOptions] = useState([])

    const handleFileChange = (event) => {
        const files = event.target.files;
        if (files.length > 0) {
            const profilePicFile = files[0];
            if (profilePicFile.type.startsWith("image/")) {
                if (profilePicFile.size <= 800 * 1024) {
                    setProfilePicFile(profilePicFile)
                    setFormData((prevData) => ({
                        ...prevData,
                        profilePic: profilePicFile
                    }))
                } else {
                    toast.error('File size exceeds 800k');
                }
            }
        }
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setFormData((prevForm) => ({
            ...prevForm,
            [name]: value
        }))
    }

    const togglePassword = (index) => {
        const updatedPasswords = [...passwords];
        updatedPasswords[index] = !updatedPasswords[index];
        setPasswords(updatedPasswords);
    };

    const genderOptions = [
        { value: "", label: "Choose" },
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
    ]


    const handleSubmit = async (event) => {
        event.preventDefault()
        if (formData.confirmPassword === formData.password) {
            handleInputChange({ target: { name: "confirmPassword", value: '' } })
            delete formData.confirmPassword
            try {
                const formDataToSend = new FormData();
                for (const key in formData) {
                    if (formData[key] !== null) {
                        formDataToSend.append(key, formData[key])
                    }
                }
                const response = await fetch(`${apiUrl}/staff/add-staff`, {
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ${Token}`
                    },
                    body: formDataToSend
                })
                const resData = await response.json();
                if (!response.ok) {
                    throw new Error(resData.message || 'Failed to add staff');
                }
                togglePopup()
                handleRefreshData()
                setFormData(initialForm)
                toast.success('Staff added successfully!');
            } catch (error) {
                toast.error(error.message || 'Something went wrong');
            }
        } else {
            toast.error('Password does not match')
        }
    }

    useEffect(() => {
        const fetchRoleData = async () => {
            try {
                const response = await axios.get(`${apiUrl}/master/role-list-by-department/${formData.departmentId}`);
                const formattedData = response.data.data.map((item) => ({
                    label: item.name,
                    value: item.id
                }));
                setRoleOptions(formattedData);
            } catch (error) {
                // console.log(error)
                toast.error(error.message)
            }
        };
        if (formData.departmentId) {
            fetchRoleData()
        }
    }, [formData.departmentId])

    // console.log('formData =>', formData)

    return <div className={`toggle-popup ${adduser ? "sidebar-popup" : ""}`}>
        <div className="sidebar-layout">
            <div className="sidebar-header">
                <h4>Add New Staff</h4>
                <Link
                    to="#"
                    className="sidebar-close toggle-btn"
                    onClick={togglePopup}
                >
                    <i className="ti ti-x" />
                </Link>
            </div>
            <div className="toggle-body">
                <div className="pro-create">
                    <form onSubmit={handleSubmit}>
                        <div className="accordion-lists" id="list-accord">
                            {/* Basic Info */}
                            <div className="manage-user-modal">
                                <div className="manage-user-modals">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="profile-pic-upload">
                                                <div className="profile-pic">
                                                    {profilePicFile ?
                                                        <div>
                                                            <img
                                                                src={URL.createObjectURL(profilePicFile)}
                                                                alt="Image selected"
                                                            />
                                                        </div> :
                                                        <span>
                                                            <i className="ti ti-photo" />
                                                        </span>
                                                    }
                                                </div>
                                                <div className="upload-content">
                                                    <div className="upload-btn"  >
                                                        <input
                                                            type="file"
                                                            onChange={handleFileChange}
                                                        />
                                                        <span >
                                                            <i className="ti ti-file-broken" />
                                                            Upload File
                                                        </span>
                                                    </div>
                                                    <p>JPG, GIF or PNG. Max size of 800K</p>
                                                    {profilePicFile &&
                                                        <button
                                                            className="btn btn-light"
                                                            type="button"
                                                            onClick={() => { setProfilePicFile(null) }}
                                                        >
                                                            Remove
                                                        </button>}
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-wrap">
                                                <label className="col-form-label">
                                                    Name <span className="text-danger">*</span>
                                                </label>
                                                <input
                                                    name="name"
                                                    type="text"
                                                    className="form-control"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleInputChange}

                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-wrap">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <label className="col-form-label">
                                                        Email <span className="text-danger">*</span>
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
                                                    name="email"
                                                    type="email"
                                                    className="form-control"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-wrap">
                                                <label className="col-form-label">
                                                    Mobile <span className="text-danger">*</span>
                                                </label>
                                                <input
                                                    name="mobile"
                                                    type="number"
                                                    className="form-control"
                                                    required
                                                    value={formData.mobile}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-wrap">
                                                <label className="col-form-label">
                                                    Gender <span className="text-danger">*</span>
                                                </label>
                                                <Select
                                                    classNamePrefix="react-select"
                                                    className="select"
                                                    defaultValue={formData.gender}
                                                    onChange={(event) => {
                                                        let { value } = event
                                                        handleInputChange({ target: { name: 'gender', value } })
                                                    }}
                                                    options={genderOptions}

                                                />

                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-wrap">
                                                <label className="col-form-label">
                                                    Department <span className="text-danger">*</span>
                                                </label>
                                                <Select
                                                    classNamePrefix="react-select"
                                                    className="select"
                                                    value={departmentOptions.find(option => option.value === formData.departmentId)}
                                                    onChange={(event) => {
                                                        let { value } = event
                                                        handleInputChange({ target: { name: 'departmentId', value } })
                                                        setFormData((prevData) => ({
                                                            ...prevData,
                                                            roleId: null
                                                        }))
                                                    }}
                                                    options={departmentOptions}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-wrap">
                                                <label className="col-form-label">
                                                    Role <span className="text-danger">*</span>
                                                </label>
                                                <Select
                                                    classNamePrefix="react-select"
                                                    className="select"
                                                    value={roleOptions.find(option=>option.value === formData.roleId)}
                                                    onChange={(event) => {
                                                        let { value } = event
                                                        handleInputChange({ target: { name: 'roleId', value } })
                                                    }}
                                                    options={roleOptions}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-wrap">
                                                <label className="col-form-label">
                                                    Job Type <span className="text-danger">*</span>
                                                </label>
                                                <Select
                                                    classNamePrefix="react-select"
                                                    className="select"
                                                    value={roleOptions.find(option=>option.value === formData.jobTypeId)}
                                                    onChange={(event) => {
                                                        let { value } = event
                                                        handleInputChange({ target: { name: 'jobTypeId', value } })
                                                    }}
                                                    options={jobTypeOptions}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-wrap">
                                                <label className="col-form-label">
                                                    Work Shift <span className="text-danger">*</span>
                                                </label>
                                                <Select
                                                    classNamePrefix="react-select"
                                                    className="select"
                                                    value={roleOptions.find(option=>option.value === formData.workShiftId)}
                                                    onChange={(event) => {
                                                        let { value } = event
                                                        handleInputChange({ target: { name: 'workShiftId', value } })
                                                    }}
                                                    options={workShiftOptions}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-wrap">
                                                <label className="col-form-label">
                                                    Group <span className="text-danger">*</span>
                                                </label>
                                                <Select
                                                    classNamePrefix="react-select"
                                                    className="select"
                                                    value={roleOptions.find(option=>option.value === formData.groupId)}
                                                    onChange={(event) => {
                                                        let { value } = event
                                                        handleInputChange({ target: { name: 'groupId', value } })
                                                    }}
                                                    options={groupOptions}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-wrap">
                                                <label className="col-form-label">
                                                    Password <span className="text-danger">*</span>
                                                </label>
                                                <div className="icon-form-end">
                                                    <span
                                                        className="form-icon"
                                                        onClick={() => togglePassword(0)}
                                                    >
                                                        <i
                                                            className={
                                                                passwords[0] ? "ti ti-eye" : "ti ti-eye-off"
                                                            }
                                                        ></i>
                                                    </span>
                                                    <input
                                                        type={passwords[0] ? "text" : "password"}
                                                        className="form-control"
                                                        name="password"
                                                        required
                                                        minLength={4}
                                                        value={formData.password}
                                                        onChange={handleInputChange}

                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-wrap">
                                                <label className="col-form-label">
                                                    Confirm Password{" "}
                                                    <span className="text-danger">*</span>
                                                </label>
                                                <div className="icon-form-end">
                                                    <span
                                                        className="form-icon"
                                                        onClick={() => togglePassword(1)}
                                                    >
                                                        <i
                                                            className={
                                                                passwords[1] ? "ti ti-eye" : "ti ti-eye-off"
                                                            }
                                                        ></i>
                                                    </span>
                                                    <input
                                                        type={passwords[1] ? "text" : "password"}
                                                        className="form-control"
                                                        name="confirmPassword"
                                                        required
                                                        value={formData.confirmPassword}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="radio-wrap">
                                                <label className="col-form-label">Status</label>
                                                <div className="d-flex flex-wrap">
                                                    <div className="radio-btn">
                                                        <input
                                                            type="radio"
                                                            className="status-radio"
                                                            id="active"
                                                            name="status"
                                                            defaultChecked={true}
                                                            onChange={() => {
                                                                handleInputChange({ target: { name: 'status', value: 'active' } })
                                                            }}
                                                        />
                                                        <label htmlFor="active">Active</label>
                                                    </div>
                                                    <div className="radio-btn">
                                                        <input
                                                            type="radio"
                                                            className="status-radio"
                                                            id="inactive"
                                                            name="status"
                                                            onChange={() => {
                                                                handleInputChange({ target: { name: 'status', value: 'inactive' } })
                                                            }}
                                                        />
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
                            <Link to="#" className="btn btn-light sidebar-close" onClick={togglePopup} >
                                Cancel
                            </Link>
                            <button type="submit" className="btn btn-primary" >
                                Create
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
}



export default AddStaff