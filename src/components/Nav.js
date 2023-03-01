import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import Switch from "react-switch";

const StyledHeader = styled.header`
  position: relative;
  overflow: hidden;
  top: 0;
  height: 50px;
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 3;
`;

const HamburgerIcon = styled.button`
  background: none;
  border: none;
  color: #2c2c2c;
  font-size: 2rem;
  cursor: pointer;
  padding-top: 1rem;
  padding-right: 16px;
  position: absolute;
  top: 5px;
  right: 0;
  z-index: 3;
`;

const Links = styled.ul`
  box-sizing: border-box;
  border-radius: 4px;
  background-color: #6f6f6f;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  font-size: 16px;
  margin: 10px 25px 0px 15px;
  padding: 1rem;
  position: fixed;
  text-align: center;
  top: 60px;
  right: 0;
  list-style: none;
  z-index: 1;
  li {
    list-style: none;
    margin-top: 10px;
    margin-bottom: 1rem;
    margin-right: 30px;
    &:last-child {
      margin-bottom: 0;
      margin-right: 30px;
    }
  }
  a {
    text-decoration: none;
    color: #fff;
  }
  .active {
    background: #000;
    border-radius: 3px;
    color: #fff;
    font-weight: bold;
    padding: 10px 30px;
    text-transform: uppercase;
  }
  li:hover {
    cursor: pointer;
    color: #000;
    font-weight: bold;
    text-transform: uppercase;
    transition: color 0.2s cubic-bezier(0.3, 0, 0.45, 1);
  }
`;

// const Resume = styled.div`
//   cursor: pointer;
//   border: 2px solid #00332a;
//   border-radius: 25px;
//   padding: 5px 20px;
//   display: inline-block;
//   color: #f3f4f5;
//   font-size: 16px;
//   background-color: transparent;
//   margin-right: 30px;
//   &:hover,
//   &:focus,
//   &:active {
//     background-color: #8da79f;
//     color: #00332a;
//     font-weight: bold;
//     outline: none;
//     text-transform: uppercase;
//     transition: color.2s cubic-bezier(0.3, 0, 0.45, 1),
//       background-color 0.2s cubic-bezier(0.3, 0, 0.45, 1);
//   }
// `;

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHamburger, setIsHamburger] = useState(true);
  const [checked, setChecked] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setIsHamburger(!isHamburger);
  };

  // const handleResume = () => {
  //   window.open(resume);
  // };

  const handleClose = useCallback(() => {
    setIsOpen(false);
    setIsHamburger(!isHamburger);
  }, [setIsOpen, setIsHamburger, isHamburger]);

  useEffect(() => {
    const closeMenu = () => {
      if (isOpen) {
        handleClose();
      }
    };

    window.addEventListener("click", closeMenu);

    return () => {
      window.removeEventListener("click", closeMenu);
    };
  }, [isOpen, handleClose]);

  function onThemeSwitchChange(checked) {
    setChecked(checked);
    setTheme();
  }

  function setTheme() {
    const dataThemeAttribute = "data-theme";
    const body = document.body;
    const newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  }

  return (
    <StyledHeader>
      <StyledNav>
        <HamburgerIcon className="dark-burger" onClick={toggleDropdown}>
          {isHamburger ? (
            <FontAwesomeIcon icon={faBars} />
          ) : (
            <FontAwesomeIcon icon={faTimes} />
          )}
        </HamburgerIcon>
        <Links isOpen={isOpen}>
          <ul>
            <li>
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                onClick={handleClose}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                onClick={handleClose}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="portfolio"
                spy={true}
                smooth={true}
                onClick={handleClose}
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                onClick={handleClose}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="resume"
                spy={true}
                smooth={true}
                onClick={handleClose}
              >
                Calendar
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                onClick={handleClose}
              >
                Inquiries
              </Link>
            </li>
            {/* <Resume onClick={handleResume}>
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleClose}
              >
                {" "}
              </a>
              Resume
            </Resume> */}
            <hr
              style={{
                height: "1px",
                width: "80%",
                border: "none",
                backgroundColor: "#dedede",
                marginLeft: "0",
              }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "flex-center",
                alignItems: "center",
                paddingRight: "15px",
                postion: "fixed",
                marginTop: "5px",
              }}
            >
              <Switch
                checked={checked}
                onChange={onThemeSwitchChange}
                offColor="#000"
                onColor="#424242"
                className="react-switch"
                width={90}
                height={40}
                uncheckedIcon={
                  <span
                    className="iconify"
                    data-icon="material-symbols:clear-night"
                    data-inline="false"
                    style={{
                      color: "#dedede",
                      display: "block",
                      fontSize: 25,
                      height: "100%",
                      marginLeft: "10px",
                      textAlign: "end",
                    }}
                  ></span>
                }
                checkedIcon={
                  <span
                    className="iconify"
                    data-icon="ic:baseline-light-mode"
                    data-inline="false"
                    style={{
                      color: "#dedede",
                      display: "block",
                      fontSize: 25,
                      height: "100%",
                      marginLeft: "10px",
                      textAlign: "end",
                    }}
                  ></span>
                }
                id="icon-switch"
              />
            </div>
          </ul>
        </Links>
      </StyledNav>
    </StyledHeader>
  );
};

export default Nav;
