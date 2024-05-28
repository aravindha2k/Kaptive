import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import data from "../data.json"
import { Box, Heading } from '@chakra-ui/react';
import { CashflowSummary } from './CashflowSummary';



const Charts = () => {

  const{Sheet1} = data

  const getMonthlyData = (data) => {
    const months = [
      "Jan", "Feb", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    const monthlyData = months.map((month) => {
      let sales = 0;
      let cogs = 0;
      let grossProfit = 0;

      data.forEach((row) => {
        if (
          [
            "Sales - Products",
            "Sales - Services",
            "Sales - Other",
            "Sales - Deductions",
          ].includes(row.Overhead)
        ) {
          sales += row[month];
        } else if (
          [
            "COGS - Labour",
            "COGS - Raw Material",
            "COGS - Freight",
            "COGS - Overheads",
            "COGS - Other",
          ].includes(row.Overhead)
        ) {
          cogs += row[month];
        } else if (row.Overhead === "Gross Profit") {
          grossProfit += row[month];
        }
      });

      return {
        month,
        sales: sales.toFixed(2),
        cogs: cogs.toFixed(2),
        grossProfit: grossProfit.toFixed(2),
      };
    });

    return monthlyData;
  };

  const filteredData = getMonthlyData(Sheet1)
  console.log(filteredData);

  return (
    <Box>
    <Heading size="md" mb={7} >
        Sales, COGS, and Gross Profit
    </Heading>
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={filteredData}
        margin={{
          top: 0, right: 20, left: 60, bottom: 10,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="sales" fill="#bb85e9" />
        <Bar dataKey="cogs" fill="#02aff1" />
        <Bar dataKey="grossProfit" fill="#eb802c" />
      </BarChart>
    </ResponsiveContainer>
    <CashflowSummary/>
    </Box>
  );
}

export default Charts;
