import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 220px;
  background-color: #ebecf0;
  border-radius: 1px;
  padding: 5px 4px;
  font-size: 1.4rem;
  font-weight: 600;
  color: #172b4d;

  &:focus {
    background-color: white;
    box-shadow: 0px 0px 1px 1.5px #0079bf;
  }

  &::placeholder {
    font-weight: 400;
    color: #779;
  }
`;

const StyledInputCover = styled.div`
  display: inline-block;
  width: 220px;
  background-color: #ebecf0;
  border-radius: 1px;
  padding: 5px 4px;
  font-size: 1.4rem;
  font-weight: 600;
  color: #172b4d;
  margin-bottom: 25px;
`;

function ListInput({ selectedList, id, inputTitle, listOption, setListTitle }) {
  return (
    <>
      {selectedList ? (
        <StyledInputCover
          onChange={(e) => setListTitle(e, id)}
          className="input"
        >
          {inputTitle}
        </StyledInputCover>
      ) : (
        <StyledInput
          value={inputTitle}
          onChange={(e) => setListTitle(e, id)}
          className="input"
          placeholder="Add any title..."
        />
      )}
      <span className="fas fa-ellipsis-h" onClick={() => listOption(id)} />
    </>
  );
}

export default ListInput;
