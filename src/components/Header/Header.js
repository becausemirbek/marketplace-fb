import React, { Component } from "react";
import { Container, Button, Row, Col } from "reactstrap";
import ProfileDropdown from "../ProfileDropdown/ProfileDropdown";
import { connect } from "react-redux";

import "../Header/Header.css";
import { Link } from "react-router-dom";
import { isUserAuthenticated } from "../../helpers/authUtils";
import BurgerMenu from "../BurgerMenu";
import UserDropdown from "../UserDropdownMenu";
import SearchInput from "../SearchInput";
import qs from "qs";

import { BottomNavigation, BottomNavigationAction, makeStyles } from "@material-ui/core";
import * as Feather from "react-feather";

import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

class Header extends Component {
  state = {
    result: "",
  };

  // componentDidMount() {
  //   this.props.getMetro();
  // }
  render() {
    return (
      <>
        <Container className="py-3">
          <header className="Header d-none d-lg-block">
            <Row className="justify-content-between">
              <div className="d-flex align-items-center">
                <Link to="/" className="nav-menu__item">
                  Выбрать регион
                </Link>
                {/* <MetroDrop metro={this.props.metro} /> */}
              </div>

              {isUserAuthenticated() ? (
                <ProfileDropdown />
              ) : (
                // <Link className="nav-menu__item" to="/account/logout">Выйти</Link>
                <div>
                  <Link to="/account/login" className="nav-menu__item">
                    Войти
                  </Link>
                  <Link to="/account/register" className="nav-menu__item">
                    Регистрация
                  </Link>
                </div>
              )}
            </Row>

            <Row className="d-flex mt-2">
              <Col className="logo px-0 col-6 col-lg-2">
                <h3>
                  <Link to="/" className="text-info">
                    Logo
                  </Link>
                </h3>
              </Col>
              <Col md="7">
                <SearchInput
                  result={this.state.result}
                  query={qs.parse(
                    this.props.history.location.search.replace("?", "")
                  )}
                  history={this.props.history}
                />
              </Col>
              <Link
                to="/announcement"
                className="col-6 col-lg-3 d-none d-lg-block"
              >
                <Button
                  color="info"
                  className="nav-bar__adBtn rounded-pipi w-100"
                >
                  Опубликовать Объявление
                </Button>
              </Link>
            </Row>
          </header>

          {/*-----------Mobile Header-------------*/}
          <header className="Header d-lg-none d-block">
          <BottomNav history={this.props.history} />
                <h3 className="d-flex justify-content-center" color="info" style={{position: "fixed", top:"0", left:"0", padding:"5px", width:"100%", zIndex: "5", background: "#fff"}}>
                  <Link to="/">Logo</Link>
                </h3>
                <div style={{height: "40px"}}></div>
              <Col xs={12}>
                <SearchInput
                  result={this.state.result}
                  query={qs.parse(
                    this.props.history.location.search.replace("?", "")
                  )}
                  history={this.props.history}
                />
              </Col>
          </header>
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const { metro, loading, error } = state.Category;
  return { metro, loading, error };
};

export default connect(mapStateToProps)(Header);


const useStyles = makeStyles({
  root: {
    backgroundColor: "#17a2b8"
  },
  mobileNavig: {
    width: "100%",
    height: "40px",
    position: "fixed",
    bottom: "10px",
    left: 0,
    zIndex: 1
  }
})

const options = [
  "Мои объявления",
  "Выйти"
];

const ITEM_HEIGHT = 48;

function BottomNav({history}) {
  const classes = useStyles()

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (value) => {
    setAnchorEl(null);
    if(value == "Мои объявления"){
      history.push("/my-profile")
    } else if(value == "Выйти"){
      history.push("/account/logout") 
    } else {
      return
    }
  };

  return (
    <div className={classes.mobileNavig}>
      <BottomNavigation
        className={classes.root}
      >
        <BottomNavigationAction onClick={() => history.push("/")} style={{paddingBottom: "25px"}} icon={<Feather.Home />}/>
        <BottomNavigationAction onClick={() => history.push("/announcement")} showLabel="Добавить" icon={<Feather.PlusCircle />}/>
        <BottomNavigationAction onClick={() => history.push("/favorites")} showLabel="Избранное" icon={<Feather.Heart />} />
        
        {isUserAuthenticated() ? (
        <div>
          <IconButton
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <Feather.AlignJustify style={{maxWidth: "190px", minWidth: "90px"}} />
          </IconButton>
          <Menu
            id="long-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: '20ch',
              },
            }}
          >
            {options.map((option) => (
              <MenuItem key={option} selected={option === 'Pyxis'} onClick={() => handleClose(option)}>
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
      ) : (
        // <Link className="nav-menu__item" to="/account/logout">Выйти</Link>
        <div className="mb-2">
          <UserDropdown />
        </div>
      )}
      </BottomNavigation>
    </div>
  )
}