import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Loader from "./Loader";
import styled from "styled-components";
import { FcFolder, FcOpenedFolder, FcFile } from "react-icons/fc";
// import { EmojiProvider, Emoji } from "react-apple-emojis";
// import emojiData from "react-apple-emojis/lib/data.json";
import DelayLink from "react-delay-link";
import wookIcon from "../img/wook-icon.png";

const StyledHome = styled.main`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 100vh;
  width: 90%;
  margin: auto;
  overflow-y: hidden;

  .welcome-text {
    font-size: 3rem;
  }

  .emoji {
    font-size: 7rem;
  }
`;

const StyledIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
`;

const StyledIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  const initialFolders = [
    {
      id: 1,
      title: "about",
      open: false,
    },
    {
      id: 2,
      title: "projects",
      open: false,
    },
    {
      id: 3,
      title: "contact",
      open: false,
    },
  ];

  const [loading, setLoading] = useState(true);
  const [folders, setFolders] = useState(initialFolders);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  const handleFolders = (id) => {
    let updatedFolders = folders.map((folder) => {
      if (folder.id === id) {
        return { ...folder, open: !folder.open };
      }
      return folder;
    });
    setFolders(updatedFolders);
  };
  return (
    <StyledHome>
      {loading ? (
        <Loader />
      ) : (
        <>
          <p className="welcome-text">Hello, my name is Wook</p>
          <div className="emoji">🙋‍♂️</div>
          <StyledIconsContainer>
            {folders.map((folder) => {
              return (
                <StyledIcons key={folder.id}>
                  <DelayLink
                    delay={500}
                    clickAction={() => handleFolders(folder.id)}
                    to={"/" + folder.title}
                  >
                    {folder.open === false ? (
                      <FcFolder size={85} />
                    ) : (
                      <FcOpenedFolder size={85} />
                    )}
                  </DelayLink>
                  {folder.title}
                </StyledIcons>
              );
            })}
            <StyledIcons>
              <a
                href="https://docs.google.com/document/d/1iMDqtw2HSwWwigWeS9lQ_ZCxt5dBDbjfz43diFnCBu8/edit"
                target="_blank"
                rel="noreferrer"
              >
                <FcFile size={85} />
              </a>
              resume
            </StyledIcons>
          </StyledIconsContainer>
        </>
      )}
    </StyledHome>
  );
};

export default Home;
