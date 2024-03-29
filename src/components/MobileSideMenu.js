import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: ${({ isopen }) => (isopen && "0")};
  left: ${({ isopen }) => (isopen && "0")};
  right: ${({ isopen }) => (isopen && "0")};
  bottom: ${({ isopen }) => (isopen && "0")};
  background-color: #ffffff00;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0.1)
  );
  backdrop-filter: blur(4px); 
`;

const Menu = styled.div`
  position: fixed;
  top: 0;
  right: ${({ isopen }) =>
    isopen ? "0" : "-100%"}; /* Hide the menu by default */
  height: 100vh;
  width: 250px;
  background-color: #ffffff;
  transition: right 0.3s ease-in-out;
  padding: 10px;
  border-left: 1px solid #e5e5e5;
  opacity: 0;

  @media screen and (max-width: 768px) {
    opacity: 1;
  }
`;

const Subreddit = styled.div`
  color: #0f1a1c;
  font-size: 13px;
  font-weight: 400;
  cursor: pointer;
  padding: 8px 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  &:hover {
    background-color: #f2f4f5;
  }
`;

const SubredditImage = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  border-radius: 50%;
`;

const Header = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin: 10px 0 8px 10px;
`;

export default function MobileSideMenu({ isOpen, toggleMenu }) {
  const handleClick = (event) => {
    event.stopPropagation();
  };

  return (
    <Container isopen={isOpen} onClick={toggleMenu}>
      <Menu isopen={isOpen} onClick={handleClick}>
        <Header>Subreddits</Header>
        <Subreddit>
          <SubredditImage src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          t/ComputerZone
        </Subreddit>
        <Subreddit>
          <SubredditImage src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          t/techlabe
        </Subreddit>
      </Menu>
    </Container>
  );
}
