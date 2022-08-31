import { useState } from "react";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

import { styled } from "@mui/material/styles";

const H1 = styled("h1")({
  textAlign: "center",
});

const countries = [
  {
    id: "1",
    enName: "Egypt",
    arName: "مصر",
  },
  {
    id: "2",
    enName: "Egypt",
    arName: "مصر",
  },
  {
    id: "3",
    enName: "Egypt",
    arName: "مصر",
  },
  {
    id: "4",
    enName: "Egypt",
    arName: "مصر",
  },
];

const fields = [
  {
    id: "1",
    enName: "Electrical",
    arName: "كهرباء",
  },
  {
    id: "2",
    enName: "Mechanical",
    arName: "مكيانيكا",
  },
  {
    id: "3",
    enName: "Chemistry",
    arName: "كيمياء",
  },
];

const numberOfUsers = [
  {
    id: "1",
    range: "1 - 10",
  },
  {
    id: "2",
    range: "11 - 30",
  },
  {
    id: "3",
    range: "31 - 100",
  },
];

const themes = [
  {
    id: "1",
    name: "Default",
  },
  {
    id: "2",
    name: "Dark",
  },
];

const Component = ({ lang, theme }) => {
  const [WorkSpaceName, setWorkSpaceName] = useState("");
  const [Logo, setLogo] = useState("");
  const [Country, setCountry] = useState("");
  const [Address, setAddress] = useState("");
  const [WebSite, setWebSite] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Email, setEmail] = useState("");
  const [Fields, setFields] = useState([]);
  const [NumberOfUsers, setNumberOfUsers] = useState("");
  const [Theme, setTheme] = useState(theme);

  const [WorkSpaceNameIsValid, setWorkSpaceNameIsValid] = useState(true);
  const [LogoIsValid, setLogoIsValid] = useState(true);
  const [CountryIsValid, setCountryIsValid] = useState(true);
  const [AddressIsValid, setAddressIsValid] = useState(true);
  const [WebSiteIsValid, setWebSiteIsValid] = useState(true);
  const [PhoneNumberIsValid, setPhoneNumberIsValid] = useState(true);
  const [EmailIsValid, setEmailIsValid] = useState(true);
  const [NumberOfUsersIsValid, setNumberOfUsersIsValid] = useState(true);

  const handleWorkSpaceName = (e) => {
    setWorkSpaceName(e.target.value);
  };

  const handleLogo = (e) => {
    setLogo(e.target.value);
  };

  const handleCountry = (e) => {
    setCountry(e.target.value);
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleWebSite = (e) => {
    setWebSite(e.target.value);
  };

  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleFields = (e) => {
    //setFields(e.target.value);
    const {
      target: { value },
    } = e;
    setFields(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleNumberOfUsers = (e) => {
    setNumberOfUsers(e.target.value);
  };

  const handleTheme = (e) => {
    setTheme(e.target.value);
  };

  //==================================
  //==================================
  //==================================
  //==================================

  const checkWorkSpaceNameIsValid = () => {
    let specialChars = /[^a-zA-Z0-9 ]/g;

    setWorkSpaceNameIsValid(
      WorkSpaceName.match(specialChars) ||
        WorkSpaceName.length > 150 ||
        WorkSpaceName === ""
        ? false
        : true
    );
  };

  const checkLogoIsValid = () => {
    setLogoIsValid(Logo ? true : false);
  };

  const checkCountryIsValid = () => {
    setCountryIsValid(Country === "" ? false : true);
  };

  const checkAddressIsValid = () => {
    setAddressIsValid(Address.length > 150 ? false : true);
  };

  const checkWebSiteIsValid = () => {
    let pattern = new RegExp(
      "^(https?:\\/\\/)?" +
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
        "((\\d{1,3}\\.){3}\\d{1,3}))" +
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
        "(\\?[;&a-z\\d%_.~+=-]*)?" +
        "(\\#[-a-z\\d_]*)?$",
      "i"
    );

    setWebSiteIsValid(!!pattern.test(WebSite) ? true : false);
  };

  const checkPhoneNumberIsValid = () => {
    let pattern = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

    // /((00)?(\+)?\d{1,3})[-\s]+(\d{1,3})[-\s]+(\d{4,10})/

    /*
     /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/
      Matches the following
      123-456-7890
      (123) 456-7890
      123 456 7890
      123.456.7890
      +91 (123) 456-7890
    */
    setPhoneNumberIsValid(PhoneNumber.match(pattern) ? true : false);
  };

  const checkEmailIsValid = () => {
    const emailValidation =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    setEmailIsValid(
      !Email.match(emailValidation) || Email.length > 150 ? false : true
    );
  };

  const checkNumberOfUsersIsValid = () => {
    setNumberOfUsersIsValid(NumberOfUsers ? true : false);
  };

  //==================================
  //==================================
  //==================================
  //==================================

  const countriesList = countries.map((country) => (
    <MenuItem key={country.id} value={country.id}>
      {country[`${lang}Name`]}
    </MenuItem>
  ));

  const fieldsList = fields.map((field) => (
    <MenuItem key={field.id} value={field.id}>
      {field[`${lang}Name`]}
    </MenuItem>
  ));

  const numberOfUsersList = numberOfUsers.map((number) => (
    <MenuItem key={number.id} value={number.id}>
      {number.range}
    </MenuItem>
  ));

  const themesList = themes.map((theme) => (
    <MenuItem key={theme.id} value={theme.id}>
      {theme.name}
    </MenuItem>
  ));

  return (
    <Container maxWidth={false}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <H1>Create New Work Space</H1>
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            label='Work Space Name'
            type='text'
            helperText={
              !WorkSpaceNameIsValid &&
              "Please enter a valid Work Space Name (Max. 150 characters and only A-Z, a-z and 0-9 are allowed!)"
            }
            error={!WorkSpaceNameIsValid}
            required
            fullWidth
            variant='outlined'
            value={WorkSpaceName}
            onChange={handleWorkSpaceName}
            onBlur={checkWorkSpaceNameIsValid}
            autoFocus
            inputProps={{
              maxLength: "150",
            }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            label='Logo'
            type='file'
            helperText={!LogoIsValid && "Please enter a valid Logo"}
            error={!LogoIsValid}
            fullWidth
            variant='outlined'
            value={Logo}
            onChange={handleLogo}
            onBlur={checkLogoIsValid}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            label='Country'
            select
            helperText={!CountryIsValid && "Please choose your Country"}
            error={!CountryIsValid}
            required
            fullWidth
            variant='outlined'
            value={Country}
            onChange={handleCountry}
            onBlur={checkCountryIsValid}
          >
            {countriesList}
          </TextField>
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            label='Address'
            type='text'
            helperText={!AddressIsValid && "Please enter a valid Address"}
            error={!AddressIsValid}
            fullWidth
            variant='outlined'
            value={Address}
            onChange={handleAddress}
            onBlur={checkAddressIsValid}
            inputProps={{
              maxLength: "150",
            }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            label='Website'
            type='url'
            helperText={!WebSiteIsValid && "Please enter a valid Website"}
            error={!WebSiteIsValid}
            fullWidth
            variant='outlined'
            value={WebSite}
            onChange={handleWebSite}
            onBlur={checkWebSiteIsValid}
            inputProps={{
              maxLength: "150",
            }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            label='Phone Number'
            type='tel'
            helperText={
              !PhoneNumberIsValid && "Please enter a valid Phone Number"
            }
            error={!PhoneNumberIsValid}
            fullWidth
            variant='outlined'
            value={PhoneNumber}
            onChange={handlePhoneNumber}
            onBlur={checkPhoneNumberIsValid}
            inputProps={{
              maxLength: "15",
              //pattern: "((00)?(+)?d{1,3})[-s]+(d{1,3})[-s]+(d{4,10})",
            }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            label='Email'
            type='email'
            helperText={!EmailIsValid && "Please enter a valid Email"}
            error={!EmailIsValid}
            fullWidth
            variant='outlined'
            value={Email}
            onChange={handleEmail}
            onBlur={checkEmailIsValid}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            label='Fields'
            select
            SelectProps={{
              multiple: true,
              value: Fields,
            }}
            fullWidth
            variant='outlined'
            onChange={handleFields}
          >
            {fieldsList}
          </TextField>
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            label='Number of Users'
            select
            helperText={
              !NumberOfUsersIsValid && "Please choose number of users"
            }
            error={!NumberOfUsersIsValid}
            required
            fullWidth
            variant='outlined'
            value={NumberOfUsers}
            onChange={handleNumberOfUsers}
            onBlur={checkNumberOfUsersIsValid}
          >
            {numberOfUsersList}
          </TextField>
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            label='Themes List'
            select
            required
            fullWidth
            variant='outlined'
            value={Theme}
            onChange={handleTheme}
          >
            {themesList}
          </TextField>
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
