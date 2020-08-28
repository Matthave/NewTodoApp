import React from "react";
import styled from "styled-components";

const StyledAuthor = styled.a`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 5px;
  background-color: rgba(0, 0, 0, 0.5);
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  text-align: center;
  opacity: 0;
  font-size: 12px;
  font-weight: 400;
  color: #fff;
  transition: 0.1s linear;

  &:hover {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.75);
    text-decoration: underline;
  }
`;

const StyledInput = styled.input`
  width: 85%;
  background-color: #fafbfc;
  box-shadow: 0px 0px 1px 1.5px #ccc;
  border-radius: 3px;
  padding: 7.5px 5px;
  margin: 5px auto;

  &:focus {
    background-color: #fff;
    box-shadow: 0px 0px 1px 1.5px #0079bf;
  }
`;

const StyledOptionsWrap = styled.div`
  position: relative;
  width: 100%;
  height: 75vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 10px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0px;
  }
`;

const StyledOption = styled.div`
  position: relative;
  display: flex;
  width: 45%;
  border-radius: 10px;
  height: 95px;
  filter: grayscale(25%);
  margin-bottom: 15px;
  cursor: pointer;
  transition: 0.1s linear;

  &:hover {
    opacity: 0.75;
  }
`;

const StyledImg = styled.img`
  width: 100%;
  border-radius: 10px;

  &:hover ~ .authorName {
    opacity: 1;
  }
`;

function UnsplashGeneratedPhotos({
  unsplashSearchPhotosChange,
  unsplashSearchPhotosValue,
  unsplashPhotos,
  setThisPhotoFunc,
}) {
  return (
    <>
      <StyledInput
        className="menu"
        placeholder="Photos..."
        onChange={(e) => unsplashSearchPhotosChange(e)}
        value={unsplashSearchPhotosValue}
      />
      <StyledOptionsWrap>
        {unsplashPhotos.map((ele) => (
          <StyledOption key={ele.id}>
            <StyledImg
              src={ele.urls.small}
              onClick={() => setThisPhotoFunc(ele.urls.full, ele.urls.thumb)}
            />
            <StyledAuthor
              className="authorName"
              target="_blank"
              rel="noopener noreferrer"
              href={ele.user.links.html}
            >
              {ele.user.name}
            </StyledAuthor>
          </StyledOption>
        ))}
      </StyledOptionsWrap>
    </>
  );
}

export default UnsplashGeneratedPhotos;
