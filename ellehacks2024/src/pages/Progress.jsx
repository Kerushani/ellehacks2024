import React from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Box,
  CircularProgress,
  Typography
} from "@mui/material";

const data = [
  { date: "2024-02-01", mood: 7, proudOf: "Completed a book" },
  { date: "2024-02-02", mood: 5, proudOf: "Helped someone cross the street" },
  // Add more data as needed
];

function Progress() {
  return (
    <div className="progress">
        <div className="progress-title">
        <Typography variant="h4" style={{ fontFamily: 'Roboto' }}>Historical Data of You Check-Ins</Typography>
        <Typography variant="h7" style={{ fontFamily: 'Roboto' }}>Life has its ups and downs. You are doing great and this is proof.</Typography>
        </div>
      <Box display="flex" justifyContent="space-around" marginBottom={2}>
        <div style={{ textAlign: "center" }}>
          <CircularProgress variant="determinate" value={70} size={100} thickness={4} />
          <Typography variant="h6" style={{ fontFamily: 'Roboto' }}>Me Time</Typography>
          <Typography variant="h5" style={{ fontFamily: 'Roboto' }}>70%</Typography>
        </div>
        <div style={{ textAlign: "center" }}>
          <CircularProgress variant="determinate" value={90} size={100} thickness={4} />
          <Typography variant="h6" style={{ fontFamily: 'Roboto' }}>Journaled</Typography>
          <Typography variant="h5" style={{ fontFamily: 'Roboto' }}>90%</Typography>
        </div>
        <div style={{ textAlign: "center" }}>
          <CircularProgress variant="determinate" value={89} size={100} thickness={4} />
          <Typography variant="h6" style={{ fontFamily: 'Roboto' }}>Meditated</Typography>
          <Typography variant="h5" style={{ fontFamily: 'Roboto' }}>89%</Typography>
        </div>
      </Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Mood</TableCell>
            <TableCell>Today I Was Proud Of...</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.mood}</TableCell>
              <TableCell>{row.proudOf}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default Progress;
