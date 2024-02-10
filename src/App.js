import React from "react";
import {tableHeader, tableOptions, getUserData} from "./Data";
import {Chip, IconButton} from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import {VirtualDataGrid} from "./VirtualDataGrid/VDG";

const cities = [
  {label: "New York", value: "New York"},
  {label: "Los Angeles", value: "Los Angeles"},
  {label: "Chicago", value: "Chicago"},
  {label: "San Francisco", value: "San Francisco"},
];

const columns = [
  {
    field: "name",
    header: "Name",
    type: "text",
    filterType: "textField",
    width: "400px",
  },
  {
    field: "age",
    header: "Age",
    type: "number",
    filterType: "numberField",
  },
  {field: "email", header: "Email"},
  {
    field: "city",
    header: "City",
    filterType: "select",
    options: cities,
    render: (rowData) => (
        <Chip
            label={rowData.city}
            variant="outlined"
            style={{
              color: "#EB6262",
              backgroundColor: "#eb626238",
              fontWeight: "500",
            }}
        />
    ),
    headerAlign: "center",
    cellAlign: "center",
  },
  {field: "date", header: "Date", filterType: "dateSelect"},
  {
    header: "Actions",
    render: (rowData) => (
        <IconButton onClick={() => {
        }}>
          <VisibilityIcon
              style={{
                color: "#ff9800",
              }}
          />
        </IconButton>
    ),
    width: "100px",
    align: "left",
  },
];
const App = () => {
  return (
      <VirtualDataGrid
          // containerHeight={400}
          buffer={30}
          numberOfRows={50}
          itemHeight={50} // Adjust as needed
          incomingData={getUserData(5000)}
          tableHeaders={tableHeader}
          incomingTableOptions={tableOptions}
          callExportCSV={false}
          onDataChange={(data) => {
            console.log(data);
          }}
      />
  );
};

export default App;
