import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
// import UncontrolledDropdown from 'reactstrap/lib/UncontrolledDropdown';
import { Link, useHistory } from "react-router-dom";

import Row from "reactstrap/lib/Row";
import IconUser from "../../assets/icons/-1_2_1 1.webp";
import Favorites from "../../assets/icons/favorites.svg";

const ProfileDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const history = useHistory();
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const logout = () => history.push("/account/logout");
  return (
    <>
      <div className="d-none d-lg-flex">
        <Row className="mr-1">
          <div className="mt-2 mr-1">
            <Link to="/favorites">
              <img
                className="mr-2"
                src={Favorites}
                alt="favoritesIcon"
                width="15rem"
                height="15rem"
                style={{ cursor: "pointer" }}
              />
            </Link>
          </div>
          <img
            onClick={() => history.push("/my-profile")}
            className="rounded-circle d-none d-lg-flex"
            src={IconUser}
            alt="profile-icon"
            width="40rem"
            height="40rem"
            style={{ cursor: "pointer" }}
          />
        </Row>
        <Dropdown
          isOpen={dropdownOpen}
          toggle={toggle}
          className="d-none d-lg-flex"
        >
          <DropdownToggle tag="a" className="nav-link h6">
            <span style={{ cursor: "pointer", color: "#808080" }}>
              Name user
            </span>
          </DropdownToggle>
          <DropdownMenu className="dropdown-menu" right>
            <DropdownItem
              key="mb-go-home"
              className="border-bottom"
              onClick={() => history.push("/my-profile")}
              style={{ fontSize: ".8rem" }}
            >
              Мои объявления
            </DropdownItem>
            <DropdownItem
              key="mb-logout"
              onClick={logout}
              style={{ fontSize: ".8rem" }}
            >
              Выход
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <ProfileMobile />
    </>
  );
};

const ProfileMobile = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const history = useHistory();
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const logout = () => history.push("/account/logout");
  return (
    <div className="d-flex d-lg-none">
      <div className="mt-2 mr-1">
        <Link to="/favorites">
          <img
            className="mr-2"
            src={Favorites}
            alt="favoritesIcon"
            width="15rem"
            height="15rem"
            style={{ cursor: "pointer" }}
          />
        </Link>
      </div>
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle tag="a" className="nav-link h6 p-0">
          <img
            className="rounded-circle"
            src={IconUser}
            alt="profile-icon"
            width="40rem"
            height="40rem"
            style={{ cursor: "pointer" }}
          />
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu" right>
          <DropdownItem
            onClick={() => history.push("/my-profile")}
            key="md-go-home"
            className="border-bottom"
            style={{ fontSize: ".8rem" }}
          >
            Мои объявления
          </DropdownItem>
          <DropdownItem
            key="md-logout"
            onClick={logout}
            style={{ fontSize: ".8rem" }}
          >
            Выйти
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};
export default ProfileDropdown;
