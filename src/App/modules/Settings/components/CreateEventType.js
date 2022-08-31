import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { styled } from "@mui/material/styles";
import { useState } from "react";
import { Checkbox, FormControlLabel } from "@mui/material";

const H1 = styled("h1")({ textAlign: "center" });

const CreateEventType = ({ lang, theme }) => {
  const [EventTypeName, setEventTypeName] = useState("");
  const [EventTypeDesc, setEventTypeDesc] = useState("");
  const [EventIsActive, setEventIsActive] = useState(true);

  const [EventTypeIsValid, setEventTypeIsValid] = useState(true);
  const [EventTypeNameIsValid, setEventTypeNameIsValid] = useState(true);
  const [EventTypeDescIsValid, setEventTypeDescIsValid] = useState(true);

  const handleEventTypeName = (e) => {
    setEventTypeName(e.target.value);
  };

  const handleEventTypeDesc = (e) => {
    setEventTypeDesc(e.target.value);
  };

  const handleChangeEventIsActive = (e) => {
    setEventIsActive(e.target.checked);
  };
  //==================================
  //==================================
  //==================================
  //==================================

  const checkEventTypeNameIsValid = () => {
    setEventTypeName(EventTypeName === "" ? false : true);
  };

  const checkEventTypeDescIsValid = () => {
    setEventTypeDescIsValid(
      EventTypeDesc.length < 150 || EventTypeDesc === "" ? false : true
    );
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <H1>Create Event Type</H1>
      </Grid>

      <Grid item xs={12}>
        <h3>Examples</h3>
        <p>Safety</p>
        <p>Production</p>
        <p>Financial</p>
      </Grid>

      <Grid item xs={12} md={6}>
        <TextField
          label='Event Type Name'
          type='text'
          helperText={
            !EventTypeNameIsValid &&
            "Please enter a valid Event Type Name (Max. 50 characters)"
          }
          error={!EventTypeNameIsValid}
          required
          fullWidth
          variant='outlined'
          value={EventTypeName}
          onChange={handleEventTypeName}
          onBlur={checkEventTypeNameIsValid}
          //  autoFocus
          inputProps={{
            maxLength: "50",
          }}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <TextField
          label='Event Type Description'
          type='text'
          helperText={
            !EventTypeDescIsValid &&
            "Please enter a valid Event Type Description (Min. 150 characters)"
          }
          error={!EventTypeDescIsValid}
          required
          fullWidth
          variant='outlined'
          value={EventTypeDesc}
          onChange={handleEventTypeDesc}
          onBlur={checkEventTypeDescIsValid}
          //autoFocus
          multiline
          //rows={5}
          inputProps={{
            maxLength: "150",
          }}
        />
      </Grid>

      <Grid item xs={12} md={12}>
        <FormControlLabel
          control={
            <Checkbox
              checked={EventIsActive}
              onChange={handleChangeEventIsActive}
              name='EventIsActive'
            />
          }
          label='Is Active'
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <Button fullWidth variant='contained' type='submit'>
          Save
        </Button>
      </Grid>

      <Grid item xs={12} md={6}>
        <Button fullWidth variant='contained'>
          Cancel
        </Button>
      </Grid>
    </Grid>
  );
};

export default CreateEventType;
