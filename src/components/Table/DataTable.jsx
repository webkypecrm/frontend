
import React, { useState } from "react";
import { Table } from "antd";


const DataTable = ({  dataSource ,columns }) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
 
  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <Table
      className="table datanew dataTable no-footer"
      rowSelection={rowSelection}
      columns={columns}
      dataSource={dataSource}
    // Assuming `id` is the unique identifier of each record
    />
  );
};

export default DataTable;