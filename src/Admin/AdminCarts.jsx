import styled from "@emotion/styled";
import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "black",
    color: "white",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "grey",
  },
  "&:nth-of-type(even)": {
    backgroundColor: "silver",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const AdminCarts = () => {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    axios.get("/carts?active=true").then((data) => setCarts(data.data));
  }, []);

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Status</StyledTableCell>
              <StyledTableCell align="right">SubTotal</StyledTableCell>
              <StyledTableCell align="right">Id</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {carts.map((cart) => (
              <StyledTableRow key={cart._id}>
                <StyledTableCell component="th" scope="row">
                  {cart.active ? "true" : "false"}
                </StyledTableCell>
                <StyledTableCell align="right">{cart.subTotal}</StyledTableCell>
                <StyledTableCell align="right">{cart._id}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default AdminCarts;
