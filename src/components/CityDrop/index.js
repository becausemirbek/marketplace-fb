import React from "react";
import { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const CityDrop = ({ cityTitle, city, onClick }) => {
  const handleSetMetro = (id) => {
    onClick(id);
  };
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <Dropdown className="mb-3" isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle tag="a" caret>
        <span>{cityTitle || "Выберите город"}</span>
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
        {city ? (
          city.map((item) => (
            <DropdownItem
              className="metro-item"
              onClick={() => handleSetMetro(item.id)}
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

export default CityDrop;
