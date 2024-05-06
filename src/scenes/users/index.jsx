import React, { useState } from "react";

import { Box } from "@mui/material";
import { DataGrid,GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useTheme} from "@mui/material";
import { useGetUserQuery } from "../../state/api";


const Users = () => {
  const theme = useTheme();

  // values to be sent to the backend
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);
  const [with_count] = useState(true);

  const colors = tokens(theme.palette.mode);
  const { data, isLoading } = useGetUserQuery({
    page,
    limit,
    with_count,
  });
  console.log("data", data);

  const columns = [
    { 
      field: "id", 
    headerName: "ID",
     flex: 0.5 
    },
    {
      field: "user_name",
      headerName: "UserName",
      flex: 1,
      cellClassName: "username-column--cell",
    },
    {
      field: "pass_word",
      headerName: "Password",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "first_name",
      headerName: "First Name",
      flex: 1,
    },
    {
      field: "last_name",
      headerName: "LastName",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
    },
    {
      field: "permission",
      headerName: "Permission",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
    },
    {
      field: "created_at",
      headerName: "Created At",
      flex: 1,
    },
    {
      field: "updated_at",
      headerName: "Updated At",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="USERS"
        subtitle="List of Users for Future Reference"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .username-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          pagination
          page={page}
          pageSize={limit}
          paginationMode="server"
          onPageChange={(newPage) => setPage(newPage)}
          onPageSizeChange={(newPageSize) => setLimit(newPageSize)}
          loading={isLoading || !data}
          getRowId={(row) => row.id}
          rows={(data && data.data) || []}
          // rows={[]}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Users;
