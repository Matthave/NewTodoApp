import React from "react";
import styled from "styled-components";

const StyledTermsWrap = styled.div`
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
`;

const StyledTitle = styled.h2`
  width: 100%;
  color: #42516e;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const StyledIcon = styled.span`
  margin-right: 6px;
  margin-left: ${(props) => (props.marginLeft ? "6" : "none")};
  font-size: ${(props) => (props.biggerSize ? "23px" : "17px")};
  color: #42516e;
  cursor: ${(props) => (props.pointer ? "pointer" : "initial")};
  vertical-align: middle;
`;

const StyledPlaceholder = styled.h3`
  text-align: center;
  color: #172b4d;
  font-size: 14px;
  font-weight: 400;
`;

const StyledTermWrap = styled.div`
  display: flex;
  align-items: center;
`;

const StyledTerm = styled.h3`
  background-color: #eaecf0;
  border-radius: 4px;
  padding: 7.5px 10px;
  letter-spacing: 1px;
  font-weight: 400;
  font-size: 15px;
  color: #42516e;
  cursor: pointer;

  &:hover {
    background-color: #dadce0;
  }
`;

const StyledStatus = styled.span`
  padding: 2.5px 5px;
  margin: 0 3px;
  border-radius: 3px;
  color: #fff;
`;

const StyledCheckedBox = styled.span`
  position: relative;
  width: 17px;
  height: 17px;
  border-radius: 2px;
  margin-right: 7px;
  color: white;
  cursor: pointer;
  transition: 0.1s linear;
  z-index: 0;
`;

const StyledCheckIcon = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 8px;
`;

function TermsWrap({
  matchedTerms,
  taskId,
  termDoneCheckbox,
  toggleCurrentListVisiFunc,
}) {
  return (
    <StyledTermsWrap>
      <StyledTitle marginTop className="detailCoverClose">
        <StyledIcon className="far fa-clock detailCoverClose" />
        Terms
      </StyledTitle>
      {matchedTerms.length === 0 ? (
        <StyledPlaceholder className="detailCoverClose">
          This card has no deadline yet
        </StyledPlaceholder>
      ) : (
        <>
          {matchedTerms.map((ele) => (
            <StyledTermWrap key={ele.term}>
              <StyledCheckedBox
                className="detailCoverClose"
                onClick={() => termDoneCheckbox(taskId)}
                style={{
                  backgroundColor: `${
                    ele.status === "Done" ? "#0079BF" : "white"
                  }`,
                  border: `${
                    ele.status === "Done"
                      ? "2px solid #0079BF"
                      : "2px solid #aaa"
                  }`,
                }}
              >
                <StyledCheckIcon className="fas fa-check detailCoverClose" />
              </StyledCheckedBox>
              <StyledTerm
                onClick={() => toggleCurrentListVisiFunc("datePickerVisi")}
              >
                {`${ele.day} ${ele.monthName} ${ele.year}`} at{" "}
                {`${ele.hour}:${ele.minutes}`}
                <StyledStatus
                  style={{
                    backgroundColor: ele.statusColor,
                    opacity: `${ele.statusColor === "#888" ? 0 : 1}`,
                  }}
                >{`${ele.status}`}</StyledStatus>
                <StyledIcon
                  className="fas fa-chevron-down"
                  pointer
                  marginLeft
                />
              </StyledTerm>
            </StyledTermWrap>
          ))}
        </>
      )}
    </StyledTermsWrap>
  );
}

export default TermsWrap;
