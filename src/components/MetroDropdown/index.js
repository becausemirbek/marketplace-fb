import React, { useState } from "react";
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
} from "reactstrap";

import "./MetroDrop.css";

const MetroDropdown = ({ metro }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle tag="a">
        <span className="metro-title">Выбрать метро</span>
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
        {metro
          ? metro.map((item) => (
              <DropdownItem className="metro-elems" key={item.id}>
                {item.title}
              </DropdownItem>
            ))
          : "Что то пошло не так"}
      </DropdownMenu>
    </Dropdown>
  );
};

export default MetroDropdown;
