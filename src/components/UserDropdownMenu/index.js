import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import UserIcon from '../../assets/icons/userIcon.svg';
import { useHistory } from 'react-router-dom';


const UserDropdownMenu = (props) => {
  const [dropdownOpen, setOpen] = useState(false);
  const history = useHistory()

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <ButtonDropdown className="mt-1" style={{maxWidth: "190px", minWidth: "90px"}} isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle color="white px-0" style={{boxShadow: 'none'}}>
        <img src={UserIcon} alt="userIcon" />
      </DropdownToggle>
      <DropdownMenu right>
        <DropdownItem onClick={()=>history.push('/account/login')} className="mt-3" style={{fontSize:'.8rem', fontWeight: '200'}}>Войти</DropdownItem>
        <DropdownItem onClick={()=>history.push('/account/register')}  style={{fontSize:'.8rem', fontWeight: '200'}}>Зарегистрироваться</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
}

export default UserDropdownMenu;