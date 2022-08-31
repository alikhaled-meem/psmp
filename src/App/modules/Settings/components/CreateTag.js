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
  const [TagName, setTagName] = useState("");
  const [IsActive, setIsActive] = useState(true);

  const [TagNameIsValid, setTagNameIsValid] = useState(true);

  const handleTagName = (e) => {
    setTagName(e.target.value);
  };

  const handleIsActive = (e) => {
    setIsActive(e.target.checked);
  };
  //==================================
  //==================================
  //==================================
  //==================================

  const checkTagNameIsValid = () => {
    setTagNameIsValid(TagName === "" ? false : true);
  };

  //==================================
  //==================================
  //==================================
  //==================================

  return (
    <Container maxWidth={false}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <H1>Create New Tag</H1>
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            label='Tag Name'
            type='text'
            helperText={
              !TagNameIsValid &&
              "Please enter a valid Department Name (Max. 50 characters)"
            }
            error={!TagNameIsValid}
            required
            fullWidth
            variant='outlined'
            value={TagName}
            onChange={handleTagName}
            onBlur={checkTagNameIsValid}
            //autoFocus
            inputProps={{
              maxLength: "50",
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
