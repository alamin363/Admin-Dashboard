import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import DataGridGridCustomToolbar from "components/DataGridGridCustomToolbar";
import Header from "components/Header";
import React, { useReducer, useState } from "react";
import { useGetTransactionsQuery } from "state/api";

const Transaction = () => {
  const theme = useTheme();

  const initialStage = {
    page: 0,
    pageSize: 20,
    sort: {},
    search: "",
    searchInput: "",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "page":
        return {
          ...state,
          page: action.payload,
        };
      case "newPageSize":
        return {
          ...state,
          pageSize: action.payload,
        };
      case "newSortModel":
        return {
          ...state,
          sort: action.payload,
        };
      case "search":
        return {
          ...state,
          search: action.payload,
        };
      case "searchInput":
        return {
          ...state,
          searchInput: action.payload,
        };

      default:
        return { ...state };
    }
  };
  const [state, dispatch] = useReducer(reducer, initialStage);
  const { data, isLoading } = useGetTransactionsQuery({
    page: state.page,
    pageSize: state.pageSize,
    sort: JSON.stringify(state.sort),
    search: state.search,
  });

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "userId",
      headerName: "User ID",
      flex: 1,
    },
    {
      field: "createdAt",
      headerName: "CreatedAt",
      flex: 1,
    },
    {
      field: "products",
      headerName: "# of Products",
      flex: 0.5,
      sortable: false,
      renderCell: (params) => params.value.length,
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
  ];

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="TRANSACTIONS" subtitle="Entire list of transactions" />
      <Box
        height="80vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary.light,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[200]} !important`,
          },
        }}
      >
        <DataGrid
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={(data && data.transactions) || []}
          columns={columns}
          rowCount={(data && data.total) || 0}
          rowsPerPageOptions={[20, 50, 100]}
          pagination
          page={state.page}
          pageSize={state.pageSize}
          paginationMode="server"
          sortingMode="server"
          onPageChange={(newPage) =>
            dispatch({ type: "page", payload: newPage })
          }
          onPageSizeChange={(newPageSize) =>
            dispatch({ type: "newPageSize", payload: newPageSize })
          }
          onSortModelChange={(newSortModel) =>
            dispatch({ type: "newSortModel", payload: { ...newSortModel } })
          }
          components={{ Toolbar: DataGridGridCustomToolbar }}
          componentsProps={{
            toolbar: { searchInput: state.searchInput, dispatch },
          }}
        />
      </Box>
    </Box>
  );
};

export default Transaction;
