import React from "react";
import { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import qs from "qs";
import "./DropDown.css";
import * as Feather from "react-feather";

const ProfileDropdown = ({ metro, history, title, type }) => {
  const handleSetMetro = (id) => {
    const query = qs.parse(history.location.search.replace("?", ""));
    query[type] = id;
    history.push(`/home?${qs.stringify(query)}`);
  };
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle tag="a" className="mr-3 dropdown-title">
        <span>
          {title} <Feather.ChevronDown />
        </span>
      </DropdownToggle>
      <DropdownMenu
        modifiers={{
          setMaxHeight: {
            enabled: true,
            order: 890,
            fn: (data) => {
              return {
                ...data,
                styles: {
                  ...data.styles,
                  overflow: "auto",
                  maxHeight: "100px",
                },
              };
            },
          },
        }}
      >
        {metro ? (
          metro.map((item) => (
            <DropdownItem
              className="metro-item"
              onClick={() => handleSetMetro(item.title)}
              key={item.id}
            >
              {item.title}
            </DropdownItem>
          ))
        ) : (
          <span style={{ fontSize: "15px" }}>"Что то пошло не так"</span>
        )}
      </DropdownMenu>
    </Dropdown>
  );
};

export default ProfileDropdown;
