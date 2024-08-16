
import { Link } from "react-router-dom";
import DataTable from "../Table/DataTable.jsx"
import { manageusersData } from "../../data/manageUser.jsx";

const ManageStaffList = () => {

    const data = manageusersData;

    const columns = [
        // {
        //   title: "",
        //   dataIndex: "",
        //   render: (text, record, index) => (
        //     <div
        //       className={`set-star rating-select ${stars[index] ? "filled" : ""}`}
        //       onClick={() => handleStarToggle(index)}
        //     >
        //       <i className="fa fa-star"></i>
        //     </div>
        //   ),
        // },
        {
          title: "Name",
          dataIndex: 'customer_name',
          // render: (text, record) => (
          //   <div className="table-avatar d-flex align-items-center">
          //     <Link to="/crm/company-details" className="avatar">
          //       <ImageWithBasePath src={record.image} alt="UserImage" />
          //     </Link>
          //     <Link
          //       to="/crm/company-details"
          //       className="profile-split d-flex flex-column"
          //     >
          //       {record.customer_name}
          //       <span>{text.customer_no}</span>
          //     </Link>
          //   </div>
          // ),
          sorter: true,
        },
        {
          title: "Phone",
          dataIndex: "phone",
          key: "phone",
          sorter: true,
        },
        {
          title: "Email",
          dataIndex: "email",
          key: "email",
          sorter: true,
        },
        {
          title: "Location",
          dataIndex: "location",
          key: "location",
          sorter: true,
        },
        {
          title: "Created",
          dataIndex: "created",
          key: "created",
          sorter: true,
        },
        {
          title: "Last Activity",
          dataIndex: "last_activity",
          key: "last_activity",
          sorter: true,
        },
        {
          title: "Status",
          dataIndex: "status",
          render: (text) => (
            <div>
              {text === "Active" && (
                <span className="badge badge-pill badge-status bg-success">
                  {text}
                </span>
              )}
    
              {text === "Inactive" && (
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
          render: () => (
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
                // onClick={() => togglePopup(true)}
                >
                  <i className="ti ti-edit text-blue" /> Edit
                </Link>
    
                <Link
                  className="dropdown-item"
                  to="#"
                  data-bs-toggle="modal"
                  data-bs-target="#delete_contact"
                >
                  <i className="ti ti-trash text-danger"></i> Delete
                </Link>
              </div>
            </div>
          ),
        },
      ];

    return <>
    
        <div className="table-responsive custom-table">
            <DataTable dataSource={data} columns={columns} />
        </div>
        <div className="row align-items-center">
            <div className="col-md-6">
                <div className="datatable-length" />
            </div>
            <div className="col-md-6">
                <div className="datatable-paginate" />
            </div>
        </div>

    </>
}


export default ManageStaffList