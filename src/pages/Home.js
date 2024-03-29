import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { GoComment } from "react-icons/go";
import { useSelector } from "react-redux";
import moment from "moment";

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 300px;
  justify-content: center;
  align-items: flex-start;
  padding: 0px 20px 20px 20px;

  @media screen and (max-width: 768px) {
    grid-template-columns: auto;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

const MiddleColumn = styled.div`
  flex: 1;
  margin: 0 20px;
  margin-top: 20px;
`;

// const RightColumn = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
// `;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (max-width: 768px) {
    display: none;
  }
  /* overflow-y: auto;  */
  /* max-height: calc(100vh - 60px); */
`;

const Header = styled.div`
  font-size: 19px;
  font-weight: 500;
  margin-bottom: 20px;
`;

const Feed = styled.div`
  display: grid;
  grid-template-columns: 90px auto;
  align-items: center;
  background-color: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  padding: 20px 20px 20px 0;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 70px auto;
  }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 5px;
`;

const Subreddits = styled.div`
  width: 260px;
  position: fixed;
  border-left: 1px solid #e5e5e5;
  padding: 20px;
  height: calc(100vh - 117px);
`;

const Subreddit = styled.div`
  width: 100%;
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

const ArrowButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    font-size: 19px;
  }
`;

const LikeCount = styled.span`
  font-size: 14px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const PostContent = styled.div``;

const PostTitle = styled.h1`
  font-size: 1.125rem;
  line-height: 1.5rem;
  font-weight: 500;
  margin-bottom: 1rem;
  a {
    color: #0f1a1c;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  @media screen and (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  color: #0f1a1c;
`;

const PostBy = styled.span`
  a {
    color: #fd4400;
    text-decoration: none;
  }
`;

const PostComment = styled.span`
  display: flex;
  align-items: center;
`;

const PostTime = styled.span``;

const SubredditImage = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  border-radius: 50%;
`;

const Home = () => {
  const { posts, loading, search } = useSelector((state) => state);
  console.log(search);

  let content = null;

  if (loading) {
    content = <p>Loading...</p>;
  }

  if (!loading && posts.length > 0) {
    content = posts
      .filter(({data}) => {
        return search?.toLowerCase() === ""
          ? data
          : data?.title?.toLowerCase()?.includes(search?.toLowerCase());
      })
      .map(({ data }) => (
        <Feed key={data?.id}>
          <LeftColumn>
            <ArrowButton>
              <FaArrowUp style={{ color: "#0F1A1C" }} />
            </ArrowButton>
            <LikeCount>
              {data?.ups}
              {data?.ups >= 1000 && "k"}
            </LikeCount>
            <ArrowButton>
              <FaArrowDown style={{ color: "#0F1A1C" }} />
            </ArrowButton>
          </LeftColumn>
          <PostContent>
            <PostTitle>
              <a href={data?.url} target="_blank">
                {data?.title}
              </a>
            </PostTitle>
            {data?.thumbnail != "default" && data?.thumbnail != "self" && (
              <Image
                src={data?.thumbnail}
                alt="Robert de Niro and his daughter"
              />
            )}
            {/* <Image
            src="https://plus.unsplash.com/premium_photo-1711508491465-1f242f42c826?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Robert de Niro and his daughter"
          /> */}
            <Footer>
              <PostBy>
                Post by <a href="@">{data?.author}</a>
              </PostBy>
              <PostTime>{moment.unix(data?.created).fromNow()}</PostTime>
              <PostComment>
                <GoComment />
                {data?.num_comments}
              </PostComment>
            </Footer>
          </PostContent>
        </Feed>
      ));
  }
  return (
    <>
      <Navbar />
      <Container>
        <MiddleColumn>{content}</MiddleColumn>
        <RightColumn>
          <Subreddits>
            <Header>Subreddits</Header>
            <Subreddit>
              <SubredditImage src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              t/ComputerZone
            </Subreddit>
            <Subreddit>
              <SubredditImage src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              t/techlabe
            </Subreddit>
          </Subreddits>
        </RightColumn>
      </Container>
    </>
  );
};

export default Home;
