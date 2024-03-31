import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/reddit.png";
import { CiSearch, CiMenuFries } from "react-icons/ci";
import MobileSideMenu from "./MobileSideMenu";
import { search } from "../actions/redditActions";
import { useDispatch } from "react-redux";

const NavbarContainer = styled.div`
  position: sticky;
  top: 0;
`;

const NavbarDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #fff;
  border-bottom: 1px solid #e5e5e5;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Logo = styled.img`
  width: 60px;
  height: auto;
`;

const SearchInput = styled.input`
  padding: 12px 18px 12px 43px;
  border-radius: 20px;
  border: none;
  background-color: #e2e7e9;
  color: #0f1a1c;
  width: 300px;
  outline: none;
  position: relative;
`;

const SearchBox = styled.div`
  position: relative;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const SearchIcon = styled.span`
  position: absolute;
  top: 58%;
  left: 15px;
  transform: translateY(-50%);
  color: #0f1a1c;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoText = styled.h2`
  /* color: #fd4400; */
  color: red;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  font-size: 25px;
  position: absolute;
  left: 35px;
  top: 55%;
  transform: translateY(-50%);
  cursor: pointer;
`;

const MobileMenuIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(search(e.target.value));
  };

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <NavbarContainer>
      {/* mobile menu  */}
      <MobileSideMenu isOpen={isOpen} toggleMenu={toggleMenu} />
      {/* mobile menu  */}
      <NavbarDiv>
        <MobileMenuIcon>
          <MobileMenu>
            <CiMenuFries onClick={toggleMenu} />
          </MobileMenu>
        </MobileMenuIcon>
        <LogoContainer>
          <Logo src={logo} alt="Logo" />
          <LogoText>miniReddit</LogoText>
        </LogoContainer>
        <SearchBox>
          <SearchInput
            type="text"
            placeholder="Search..."
            onChange={handleSearch}
          />
          <SearchIcon>
            <CiSearch style={{ fontSize: "20px" }} />
          </SearchIcon>
        </SearchBox>
      </NavbarDiv>
    </NavbarContainer>
  );
};

export default Navbar;
