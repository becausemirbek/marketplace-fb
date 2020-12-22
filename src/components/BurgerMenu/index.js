import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import * as Feather from 'react-feather';

const BurgerMenu = (props) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle color="white px-0" style={{boxShadow: 'none'}}>
        <Feather.Menu color='#4B729F' className="mr-2"/>
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem className="mt-3" style={{fontSize:'.8rem', fontWeight: '200'}}>Объявления</DropdownItem>
        <DropdownItem style={{fontSize:'.8rem', fontWeight: '200'}}>Реклама на сайте</DropdownItem>
        <DropdownItem style={{fontSize:'.8rem', fontWeight: '200'}}>Выбрать регион</DropdownItem>
        <DropdownItem className="mb-3" style={{fontSize:'.8rem', fontWeight: '200'}}>Выбрать метро</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
}

export default BurgerMenu;