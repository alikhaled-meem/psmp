import styled from "@emotion/styled";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useReducer, useState } from "react";
import { Button, Container, Grid, TextField } from "@mui/material";

import OutlinedInput from "@mui/material/OutlinedInput";

const H1 = styled("h1")({
  textAlign: "center",
});

// START MAIN COMPONENT ~ SubmitNewInvitationNew

const SubmitNewInvitationNew = () => {
  const ImpactLevels = ["High", "Medium", "Low"];
  const Departments = ["department-one", "department-two", "department-three"];
  const Tags = ["tag-one", "tag-two", "tag-three"];

  const [errors, setErrors] = useReducer(
    (oldState, updates) => ({ ...oldState, ...updates }),
    {
      _tags: "",
      _userRoles: "",
      _impactLevels: "",
      _departments: "",
      _emails: "",
    }
  );

  const [data, setData] = useReducer(
    (oldState, updates) => ({ ...oldState, ...updates }),
    {
      tags: [],
      userRoles: [],
      impactLevels: [],
      departments: [],
      emails: "",
    }
  );

  const checkValidity = (keyName, keyData) => {
    const emailValidation =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    switch (keyName) {
      case "userRoles":
        if (keyData.length < 1) {
          setData({
            [keyName]: [],
          });
          setErrors({ [`_${keyName}`]: "You must add at least one role!" });
        } else {
          setErrors({ [`_${keyName}`]: "" });
        }
        break;
      case "tags":
        if (keyData.length < 1) {
          setData({
            [keyName]: [],
          });
          setErrors({
            [`_${keyName}`]: "You must add at least one tag!",
          });
        } else {
          setErrors({ [`_${keyName}`]: "" });
        }
        break;
      case "impactLevels":
        if (keyData.length < 1) {
          setData({
            [keyName]: [],
          });
          setErrors({ [`_${keyName}`]: "You must add at least one Impact level!" });
        } else {
          setErrors({ [`_${keyName}`]: "" });
        }
        break;
      case "departments":
        if (keyData.length < 1) {
          setData({
            [keyName]: [],
          });
          setErrors({
            [`_${keyName}`]: "You must add at least one Department!",
          });
        } else {
          setErrors({ [`_${keyName}`]: "" });
        }
        break;
      case "emails":
        if (!keyData.length) {
          setErrors({
            [`_${keyName}`]: "Email is required!",
          });
        } else if (!keyData.match(emailValidation) || keyData.length > 150) {
          setErrors({
            [`_${keyName}`]:
              "Please enter a valid Email (Max. 150 characters and only A-Z, a-z and 0-9 are allowed!)",
          });
        } else {
          setErrors({ [`_${keyName}`]: "" });
        }
        break;
      default:
        return false;
    }
  };

  const handleFieldChange = (event) => {
    setData({
      [event.target.name]: event.target.value,
    });
    checkValidity(event.target.name, event.target.value);
  };

  const handleEmail = (event) => {
    setData({
      [event.target.name]: event.target.value,
    });
    checkValidity(event.target.name, event.target.value);
  };

  return (
    <>
      <H1>Submit New Invitation</H1>

      <Container maxWidth={false}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              helperText={errors._userRoles}
              error={errors._userRoles}
              onBlur={() => checkValidity("userRoles", data.userRoles)}
              fullWidth
              select
              name="userRoles"
              id="userRoles"
              variant="outlined"
              label="User Roles"
              SelectProps={{
                multiple: true,
                value: data.userRoles,
                onChange: handleFieldChange,
              }}
            >
              <MenuItem value="issuer">Issuer</MenuItem>
              <MenuItem value="RCA-specialist">RCA Specialist</MenuItem>
              <MenuItem value="sponsor">Sponsor</MenuItem>
              <MenuItem value="RCA-lead">RCA Lead</MenuItem>
              <MenuItem value="RCA-member">RCA Member</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField
              helperText={errors._tags}
              error={errors._tags}
              onBlur={() => checkValidity("tags", data.tags)}
              fullWidth
              select
              name="tags"
              id="tags"
              variant="outlined"
              label="Tags"
              SelectProps={{
                multiple: true,
                value: data.tags,
                onChange: handleFieldChange,
              }}
            >
              {Tags.map((tag) => (
                <MenuItem key={tag} value={tag}>
                  {tag}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField
              helperText={errors._impactLevels}
              error={errors._impactLevels}
              onBlur={() => checkValidity("impactLevels", data.impactLevels)}
              fullWidth
              select
              name="impactLevels"
              id="impactLevels"
              variant="outlined"
              label="Impact Levels"
              SelectProps={{
                multiple: true,
                value: data.impactLevels,
                onChange: handleFieldChange,
              }}
            >
              {ImpactLevels.map((level) => (
                <MenuItem key={level} value={level}>
                  {level}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField
              helperText={errors._departments}
              error={errors._departments}
              onBlur={() => checkValidity("departments", data.departments)}
              fullWidth
              select
              name="departments"
              id="departments"
              variant="outlined"
              label="Departments"
              SelectProps={{
                multiple: true,
                value: data.departments,
                onChange: handleFieldChange,
              }}
            >
              {Departments.map((dep) => (
                <MenuItem key={dep} value={dep}>
                  {dep}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              label="Email"
              type="email"
              name="emails"
              helperText={errors._emails}
              error={errors._emails}
              fullWidth
              variant="outlined"
              value={data.emails}
              onChange={handleEmail}
              onBlur={() => checkValidity("emails", data.emails)}
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

export default SubmitNewInvitationNew;
