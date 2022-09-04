import styled from "@emotion/styled";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import { Button, Container, Grid, TextField } from "@mui/material";

import OutlinedInput from "@mui/material/OutlinedInput";

const H1 = styled("h1")({
  textAlign: "center",
});

// START MAIN COMPONENT ~ SubmitNewInvitation

const SubmitNewInvitation = () => {
  const [UserRole, setUserRole] = useState("RCA-member");
  const [ImpactLevel, setImpactLevel] = useState(["Medium"]);
  const [DepName, setDepName] = useState(["department-one"]);
  const [TagName, setTagName] = useState(["tag-one"]);
  const [Email, setEmail] = useState("");

  const [EmailIsValid, setEmailIsValid] = useState(true);

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const ImpactLevels = ["High", "Medium", "Low"];
  const Departments = ["department-one", "department-two", "department-three"];
  const Tags = ["tag-one", "tag-two", "tag-three"];

  const handleUserRoleChange = (event) => {
    setUserRole(event.target.value);
  };

  const handleImpactLevelChange = (event) => {
    setImpactLevel(event.target.value);
  };

  const handleDepartmentChange = (event) => {
    setDepName(event.target.value);
  };

  const handleTagChange = (event) => {
    setTagName(event.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const checkEmailIsValid = () => {
    const emailValidation =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    setEmailIsValid(
      !Email.match(emailValidation) || Email.length > 150 ? false : true
    );
  };

  return (
    <>
      <H1>Submit New Invitation</H1>

      <Container maxWidth={false}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">User Role</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={UserRole}
                label="Age"
                onChange={handleUserRoleChange}
                required
              >
                <MenuItem value={"issuer"}>Issuer</MenuItem>
                <MenuItem value={"RCA-specialist"}>RCA Specialist</MenuItem>
                <MenuItem value={"sponsor"}>Sponsor</MenuItem>
                <MenuItem value={"RCA-lead"}>RCA Lead</MenuItem>
                <MenuItem value={"RCA-member"}>RCA Member</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth required error={!ImpactLevel.length}>
              <InputLabel id="demo-multiple-name-label">
                Impact Level
              </InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                value={ImpactLevel}
                onChange={handleImpactLevelChange}
                input={<OutlinedInput label="Name" />}
                MenuProps={MenuProps}
              >
                {ImpactLevels.map((level) => (
                  <MenuItem key={level} value={level}>
                    {level}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth required error={!DepName.length}>
              <InputLabel id="demo-multiple-name-label">Department</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                value={DepName}
                onChange={handleDepartmentChange}
                input={<OutlinedInput label="DepName" />}
                MenuProps={MenuProps}
              >
                {Departments.map((dep) => (
                  <MenuItem key={dep} value={dep}>
                    {dep}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth required error={!TagName.length}>
              <InputLabel id="demo-multiple-name-label">Tags</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                value={TagName}
                onChange={handleTagChange}
                input={<OutlinedInput label="TagName" />}
                MenuProps={MenuProps}
              >
                {Tags.map((tag) => (
                  <MenuItem key={tag} value={tag}>
                    {tag}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} md={12}>
            <TextField
              label="Email"
              type="email"
              helperText={
                !EmailIsValid &&
                "Please enter a valid Email (Max. 150 characters and only A-Z, a-z and 0-9 are allowed!)"
              }
              error={!EmailIsValid}
              fullWidth
              variant="outlined"
              value={Email}
              onChange={handleEmail}
              onBlur={checkEmailIsValid}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <Button fullWidth variant="contained" type="submit">
              Save
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default SubmitNewInvitation;
