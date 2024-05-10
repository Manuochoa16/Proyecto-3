import CreateAppointment from "../../views/CreateAppointment/CreateAppointment";
import Login from "../../views/Login/Login";
import Register from "../../views/Register/Register";
import AboutUs from "../../views/AboutUs/AboutUs";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <>
      <h1>
        <CreateAppointment />
        <Register />
        <Login />
        <AboutUs />
      </h1>
    </>
  );
};

export default NavBar;
