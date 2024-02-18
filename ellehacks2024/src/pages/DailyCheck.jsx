import React from "react";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function DailyCheck() {
  return (
    <div className="form-container">
      <form>
        <Typography variant="h4" style={{ fontFamily: 'Roboto' }}>Daily Check In</Typography>
        <TextField
          id="date"
          label="Date"
          type="date"
          defaultValue={new Date().toISOString().substr(0, 10)}
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
          margin="normal"
        />
        <Box sx={{ width: 300 }}>
          <Typography id="feel-slider" gutterBottom>
            How are you feeling today?
          </Typography>
          <Slider
            aria-label="feeling-slider"
            defaultValue={5}
            min={1}
            max={10}
            step={1}
            marks={[
              { value: 1, label: "1" },
              { value: 2, label: "2" },
              { value: 3, label: "3" },
              { value: 4, label: "4" },
              { value: 5, label: "5" },
              { value: 6, label: "6" },
              { value: 7, label: "7" },
              { value: 8, label: "8" },
              { value: 9, label: "9" },
              { value: 10, label: "10" },
            ]}
          />
        </Box>
        <TextField
          id="proud-activity"
          label="What were you proud of doing today?"
          multiline
          rows={4}
          fullWidth
          margin="normal"
        />
        <Typography variant="h6">Today I...</Typography>
        <FormControlLabel control={<Checkbox />} label="Talked to a friend" />
        <FormControlLabel control={<Checkbox />} label="Had time to myself" />
        {/* Add more checkboxes for other options */}
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default DailyCheck;
