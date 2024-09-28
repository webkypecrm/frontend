
import React, { useState } from "react";
import { Table } from "antd";


const DataTable = ({ dataSource, columns, onSelectionChange, pageSize, totalPages, onFetchRecord }) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
    onSelectionChange(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange
  };

  return (
    <Table
      className="table datanew dataTable no-footer"
      rowSelection={rowSelection}
      columns={columns}
      dataSource={dataSource}
      pagination={{
        pageSize: pageSize,
        total: totalPages,
        onChange: (page) => {
          onFetchRecord(page)
        }
      }}
    // Assuming `id` is the unique identifier of each record
    />
  );
};

export default DataTable;