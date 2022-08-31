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
  const [Level, setLevel] = useState("");
  const [LevelName, setLevelName] = useState("");
  const [ShowWithoutReview, setShowWithoutReview] = useState(false);
  const [IsActive, setIsActive] = useState(true);

  const [LevelIsValid, setLevelIsValid] = useState(true);
  const [LevelNameIsValid, setLevelNameIsValid] = useState(true);

  const handleLevel = (e) => {
    setLevel(e.target.value);
  };

  const handleLevelName = (e) => {
    setLevelName(e.target.value);
  };

  const handleShowWithoutReview = (e) => {
    setShowWithoutReview(e.target.checked);
  };

  const handleIsActive = (e) => {
    setIsActive(e.target.checked);
  };
  //==================================
  //==================================
  //==================================
  //==================================

  const checkLevelIsValid = () => {
    setLevelIsValid(Level === "" || +Level < 0 ? false : true);
  };

  const checkLevelNameIsValid = () => {
    setLevelNameIsValid(LevelName === "" || +LevelName < 0 ? false : true);
  };

  //==================================
  //==================================
  //==================================
  //==================================

  return (
    <Container maxWidth={false}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <H1>Create Impact Level</H1>
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            label='Level'
            type='number'
            helperText={
              !LevelIsValid &&
              "Please enter a valid Department Name (Max. 50 characters)"
            }
            error={!LevelIsValid}
            required
            fullWidth
            variant='outlined'
            value={Level}
            onChange={handleLevel}
            onBlur={checkLevelIsValid}
            //autoFocus
            inputProps={{
              min: "0",
            }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            label='Level Name'
            type='text'
            helperText={
              !LevelNameIsValid &&
              "Please enter a valid Department Name (Max. 50 characters)"
            }
            error={!LevelNameIsValid}
            required
            fullWidth
            variant='outlined'
            value={LevelName}
            onChange={handleLevelName}
            onBlur={checkLevelNameIsValid}
            //autoFocus
            inputProps={{
              maxLength: "50",
            }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <FormGroup>
            <FormControlLabel
              label='Show without review'
              control={<Checkbox checked={ShowWithoutReview} />}
              onChange={handleShowWithoutReview}
            />
          </FormGroup>
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
