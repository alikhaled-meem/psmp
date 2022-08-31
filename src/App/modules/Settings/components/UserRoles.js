import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { styled } from "@mui/material/styles";

const H1 = styled("h1")({
  textAlign: "center",
});

function createData(_id, RoleName, RoleDesc, RoleMembers) {
  return { _id, RoleName, RoleDesc, RoleMembers };
}

const rows = [
  createData(
    1,
    "Administrative Role",
    "Lorem Ipsum is simply dummy like Aldus PageMaker including versions of Lorem Ipsum.",
    []
  ),
  createData(
    2,
    "Issuer",
    "Lorem Ipsum is simply dummy text of thewn printer tooo the leap ting pularised in thing Lorem Ipsum passages, and more Lorem Ipsum.",
    []
  ),
  createData(
    3,
    "RCA Specialist",
    "Lorem Ipsum is simply dummy text of thewn printer tooo the leap ting pularised in thing Lorem Ipsum passages, and more  publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    []
  ),
  createData(
    4,
    "Sponsor",
    "Lorem Ipsum is simply dummy text of thewn printer tooo the leap ting pularised in thing Lorem Ipsum passages, and more like Aldus PageMaker including versions of Lorem Ipsum.",
    []
  ),
  createData(
    5,
    "RCA Lead",
    "Lorem Ipsum is simply dummy text of thewn printer tooo the leap ting pularised in recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    []
  ),
  createData(
    6,
    "RCA Members",
    "Lorem Ipsum is simply dummy text of Ipsum has been the industry'swn printer tooo the leap ting pularised in recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    []
  ),
];

const UserRoles = () => {
  return (
    <>
      <H1>User Roles</H1>
      <TableContainer component={Paper}>
        <Table
          sx={{
            minWidth: 650,
            maxWidth: "90%",
            margin: "5vh auto",
            border: "1px solid #000",
          }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow sx={{ backgroundColor: "#9d9d9d" }}>
              <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                User Role name
              </TableCell>
              <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                User Role Description
              </TableCell>
              <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                User Role Members
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell width="20%" component="th" scope="row">
                  {row.RoleName}
                </TableCell>
                <TableCell width="40%">{row.RoleDesc}</TableCell>
                <TableCell>Member1, Member2, ...</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default UserRoles;
