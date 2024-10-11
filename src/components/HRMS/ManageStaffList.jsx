import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DataTable from "../Table/DataTable.jsx"
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
// import ContentLoader from "../Layouts/ContentLoader/Index.jsx";
// import ErrorLoader from "../Layouts/ErrorLoader.jsx/Index.jsx";
import DeleteData from "../DeleteData/DeleteData.jsx";
import { toast } from "react-toastify";



const ManageStaffList = ({ togglePopup, setStaffDetails, data, setData, handleRefreshData, manageColumns }) => {
  const [stars, setStars] = useState({});
  const [staffId, setStaffId] = useState(null)

  const apiUrl = import.meta.env.VITE_API_URL;
  const Token = localStorage.getItem('token') || '';


  const initializeStarsState = () => {
    const starsState = {};
    data.forEach((item, index) => {
      starsState[index] = false;
    });
    setStars(starsState);
  };

  const handleDelete = async () => {
    if (staffId) {
      try {
        await axios.delete(`${apiUrl}/staff/delete/${staffId}`, {
          headers: {
            Authorization: `Bearer ${Token}`
          }
        })
        handleRefreshData()
        toast.success('Staff deleted successfully!')
        setStaffId(null)
      } catch (error) {
        toast.error(error.message)
      }
    }

  }

  const handleStarToggle = (index) => {
    setStars((prevStars) => ({
      ...prevStars,
      [index]: !prevStars[index],
    }));
  };

  const columns = [
    {
      title: "",
      dataIndex: "",
      render: (text, record, index) => (
        <div
          className={`set-star rating-select ${stars[index] ? "filled" : ""}`}
          onClick={() => handleStarToggle(index)}
        >
          <i className="fa fa-star"></i>
        </div>
      ),
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => (
        <div className="table-avatar d-flex align-items-center">
          <Link to="#" className="avatar">
            <img src={record.profilePic} alt="UserImage" />
          </Link>
          <Link
            to="#"
            className="profile-split d-flex flex-column"
          >
            {record.name}
            <span>id : {record.staffId}</span>
          </Link>
        </div>
      ),
      sorter: true,
    },
    {
      title: "Mobile",
      dataIndex: "mobile",
      key: "mobile",
      sorter: true,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      sorter: true,
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
      sorter: true,
    },
    {
      title: "Created By",
      dataIndex: "createdBy",
      key: "createdBy",
      sorter: true,
    },
    {
      title: "Department",
      dataIndex: "department",
      key: "department",
      sorter: true,
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      sorter: true,
    },
    {
      title: "Group",
      dataIndex: "group",
      key: "group",
      sorter: true,
    },
    {
      title: "Job Type",
      dataIndex: "jobType",
      key: "jobType",
      sorter: true,
    },
    {
      title: "Work Shift",
      dataIndex: "workShift",
      key: "workShift",
      sorter: true,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: 'status',
      render: (text) => (
        <div>
          {text === "active" && (
            <span className="badge badge-pill badge-status bg-success">
              {text}
            </span>
          )}

          {text === "inactive" && (
            <span className="badge badge-pill badge-status bg-danger">
              {text}
            </span>
          )}
        </div>
      ),
      sorter: true,
    },
    {
      title: "Action",
      dataIndex: "Action",
      render: (text, record) => (
        <div className="dropdown table-action">
          <Link
            to="#"
            className="action-icon "
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fa fa-ellipsis-v" />
          </Link>
          <div className="dropdown-menu dropdown-menu-right">
            <Link
              className="dropdown-item"
              to="#"
              onClick={() => {
                togglePopup(true);
                setStaffDetails(record)
              }}
            >
              <i className="ti ti-edit text-blue" /> Edit
            </Link>
            <Link
              className="dropdown-item"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#delete_contact"
              onClick={() => setStaffId(record.staffId)}
            >
              <i className="ti ti-trash text-danger"></i> Delete
            </Link>

          </div>
        </div>
      ),
    },
  ];

  const modifiedColumns = columns.filter((column, index) => {
    if (index == 0) {
        return column
    }

    for (const ele in manageColumns) {
        if (column.title == ele && manageColumns[ele] == true) {
            return column
        }
    }
})

  useEffect(() => {
    initializeStarsState();
  }, []);

  return <>
    {data.length !== 0 &&
      <>
        <div className="table-responsive custom-table">
          <DataTable dataSource={data} columns={modifiedColumns} />
        </div>
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="datatable-length" />
          </div>
          <div className="col-md-6">
            <div className="datatable-paginate" />
          </div>
        </div>

        <DeleteData title="Staff" onDeleteHandler={handleDelete} />

      </>
    }

  </>
}


export default ManageStaffList