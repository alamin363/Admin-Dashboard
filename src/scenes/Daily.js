import { Box, useTheme } from "@mui/material";
import Header from "components/Header";
import React, { useMemo, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useGetSalesQuery } from "state/api";
const Daily = () => {
  const [startDate, setStartDate] = useState(new Date("2021-02-01"));
  const [endtDate, setEndtDate] = useState(new Date("2021-03-01"));
  const { data } = useGetSalesQuery();
  const theme = useTheme();
  const [formattedData] = useMemo(() => {

  }, [data]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Box m="1.5rem 2rem">
      <Header title="DAILY SALES" subtitle="Chart of daily sales" />
    </Box>
  );
};

export default Daily;
