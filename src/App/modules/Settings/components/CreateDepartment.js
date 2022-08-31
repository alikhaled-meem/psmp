import { useState } from "react";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

import { styled } from "@mui/material/styles";

const H1 = styled("h1")({
  textAlign: "center",
});

const Component = () => {
  const [DepartmentName, setDepartmentName] = useState("");
  const [Description, setDescription] = useState("");
  const [IsActive, setIsActive] = useState(true);

  const [DepartmentNameIsValid, setDepartmentNameIsValid] = useState(true);

  const handleDepartmentName = (e) => {
    setDepartmentName(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleIsActive = (e) => {
    setIsActive(e.target.checked);
  };

  //==================================
  //==================================
  //==================================
  //==================================

  const checkDepartmentNameIsValid = () => {
    setDepartmentNameIsValid(DepartmentName === "" ? false : true);
  };

  return (
    <Container maxWidth={false}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <H1>Create New Department</H1>
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            label='Department Name'
            type='text'
            helperText={
              !DepartmentNameIsValid &&
              "Please enter a valid Department Name (Max. 50 characters)"
            }
            error={!DepartmentNameIsValid}
            required
            fullWidth
            variant='outlined'
            value={DepartmentName}
            onChange={handleDepartmentName}
            onBlur={checkDepartmentNameIsValid}
            //autoFocus
            inputProps={{
              maxLength: "50",
            }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            label='Description'
            type='text'
            fullWidth
            variant='outlined'
            value={Description}
            onChange={handleDescription}
            inputProps={{
              maxLength: "150",
            }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <FormGroup>
            <FormControlLabel
              label='Is Active'
              control={<Checkbox checked={IsActive} />}
              onChange={handleIsActive}
            />
          </FormGroup>
        </Grid>

        <Grid item xs={12} md={6}></Grid>

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
    </Container>
  );
};

export default Component;
