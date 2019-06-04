import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Image from "../../shared/Image";
import Nav from "../Nav";
import NavMobile from "../NavMobile";
import MobileMenu from "../../widgets/MobileMenu";
import DropDownMenu from "../../widgets/DropDownMenu";

import useBoolean from "../../../hooks/useBoolean";

import "./Header.scss";

const Header = ({ logo, navigation }) => {
  const { value: isOpen, setFalse: hide, setTrue: show } = useBoolean();

  const onMouseEnter = () => show();

  const onMouseLeave = () => hide();

  return (
    <>
      <header className="header">
        <div className="container container--wide">
          <main className="header__main">
            <MobileMenu>
              <NavMobile config={navigation.sub} />
            </MobileMenu>
            <Nav links={navigation.main} {...{ onMouseEnter }} />
            <Link to="/">
              <Image className="header__logo" {...logo} />
            </Link>
          </main>
        </div>
      </header>
      <DropDownMenu
        isOpen={isOpen}
        config={navigation.sub}
        {...{ onMouseLeave }}
      />
    </>
  );
};

Header.propTypes = {
  logo: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string
  }).isRequired,
  navigation: PropTypes.object.isRequired
};

export default Header;
