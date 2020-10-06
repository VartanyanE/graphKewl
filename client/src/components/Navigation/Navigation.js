import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import AuthContext from "../../context/auth-context";
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap'



const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

// const navigation = (props) => (
//   <AuthContext.Consumer>
//     {(context) => {
//       return (
//         <header className="main-navigation">
//           <div className="main-navigation__logo">
//             <h1>CALM YO SELF</h1>
//           </div>
//           <nav className="main-navigation__items">
//             <ul>
//               {!context.token && (
//                 <li>
//                   <NavLink to="/auth">Authenticate</NavLink>
//                 </li>
//               )}
//               <li>
//                 <NavLink to="/events">Events</NavLink>
//               </li>
//               {context.token && (
//                 <li>
//                   <NavLink to="/bookings">Booking</NavLink>
//                 </li>
//               )}
//             </ul>
//           </nav>
//         </header>
//       );
//     }}
//   </AuthContext.Consumer>
// );

// export default navigation;

export default function Links() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
    <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Calm Ya Self</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Enlighten Me</Nav.Link>
      <Nav.Link href="#link">Compliment Me</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  );
}