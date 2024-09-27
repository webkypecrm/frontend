import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import PageHeader from "../../components/Layouts/PageHeader";
import CampaignStatus from "../../components/Layouts/CampaignStatus/Index";
import AddStaff from "../../components/HRMS/AddStaff";
import ManageStaffList from "../../components/HRMS/ManageStaffList";
import EditStaff from "../../components/HRMS/EditStaff";
import SearchSection from "../../components/HRMS/SearchSection";
import ContentLoader from "../../components/Layouts/ContentLoader/Index";
import ErrorLoader from "../../components/Layouts/ErrorLoader/Index";
import axios from "axios";
import { Empty } from "antd";
import { toast } from "react-toastify";



const ManageStaff = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const Token = localStorage.getItem('token') || '';

  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [adduser, setAdduser] = useState(false);
  const [staffDetails, setStaffDetails] = useState(null)
  const [departmentOptions, setDepartmentOptions] = useState([])
  const [groupOptions, setGroupOptions] = useState([])
  const [workShiftOptions, setWorkShiftOptions] = useState([])
  const [jobTypeOptions, setJobTypeOptions] = useState([])


  const togglePopup = () => {
    setAdduser(!adduser);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(`${apiUrl}/staff/staff-list`, {
        headers: {
          Authorization: `Bearer ${Token}`
        }
      });
      const formattedData = response.data.data.map((item) => ({
        ...item,
        key: item.staffId,
      }));
      setData(formattedData);
      setIsLoading(false)
    } catch (error) {
      setError(error)
      setIsLoading(false)
    }
  };

  const fetchDepartmentData = async () => {
    try {
      const response = await axios.get(`${apiUrl}/master/department-list`, {
        headers: {
          Authorization: `Bearer ${Token}`
        }
      });
      const formattedData = response.data.data.map((item) => ({
        label: item.name,
        value: item.id,
        id: item.id
      }));
      setDepartmentOptions(formattedData);

    } catch (error) {
      toast.error(error.message)
    }
  };

  const fetchGroupData = async () => {
    try {
      const response = await axios.get(`${apiUrl}/master/group-list`, {
        headers: {
          Authorization: `Bearer ${Token}`
        }
      });
      const formattedData = response.data.data.map((item) => ({
        label: item.name,
        value: item.id
      }));
      setGroupOptions(formattedData);
    } catch (error) {
      toast.error(error.message)
    }
  };

  const fetchJobTypeData = async () => {
    try {
      const response = await axios.get(`${apiUrl}/master/job-type-list`, {
        headers: {
          Authorization: `Bearer ${Token}`
        }
      });
      const formattedData = response.data.data.map((item) => ({
        label: item.name,
        value: item.id
      }));
      setJobTypeOptions(formattedData);
    } catch (error) {
      toast.error(error.message)
    }
  };

  const fetchWorkShiftData = async () => {
    try {
      const response = await axios.get(`${apiUrl}/master/work-shift-list`, {
        headers: {
          Authorization: `Bearer ${Token}`
        }
      });
      const formattedData = response.data.data.map((item) => ({
        label: item.name,
        value: item.id
      }));
      setWorkShiftOptions(formattedData);
    } catch (error) {
      toast.error(error.message)
    }
  };

  const handleRefreshData = () => {
    fetchData()
  }

  useEffect(() => {

    fetchData();
    fetchDepartmentData();
    fetchGroupData();
    fetchJobTypeData();
    fetchWorkShiftData();

  }, []);


  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-md-12">
              {/* Page Header */}
              <PageHeader title="Staff" count={data.length} />
              {/* /Page Header */}
              {/* Campaign Status */}
              <CampaignStatus />
              {/* /Campaign Status */}
              <div className="card main-card">
                <div className="card-body">
                  {/* Search */}
                  <SearchSection togglePopup={togglePopup} />
                  {/* /Search */}

                  {/* Manage Users List */}
                  {isLoading &&
                    <ContentLoader />
                  }
                  {error &&
                    <ErrorLoader title={error.name} message={error.message} />
                  }
                  {data.length > 0 &&
                    <ManageStaffList
                      togglePopup={togglePopup}
                      setStaffDetails={setStaffDetails}
                      data={data}
                      setData={setData}
                      handleRefreshData={handleRefreshData}
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
      {/* Add Staff */}
      {!staffDetails &&
        <AddStaff
          adduser={adduser}
          togglePopup={togglePopup}
          departmentOptions={departmentOptions}
          groupOptions={groupOptions}
          workShiftOptions={workShiftOptions}
          jobTypeOptions={jobTypeOptions}
          handleRefreshData={handleRefreshData}
        />
      }
      {/* /Add Staff */}
      {/* /Edit Staff */}
      {staffDetails &&
        <EditStaff
          staffDetails={staffDetails}
          setStaffDetails={setStaffDetails}
          adduser={adduser}
          togglePopup={togglePopup}
          departmentOptions={departmentOptions}
          groupOptions={groupOptions}
          workShiftOptions={workShiftOptions}
          jobTypeOptions={jobTypeOptions}
          handleRefreshData={handleRefreshData}
        />
      }
      {/* /Edit Staff */}
    </>
  );
};

export default ManageStaff;
