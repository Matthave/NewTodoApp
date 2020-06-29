import { createGlobalStyle } from "styled-components";
import { device } from "../mq";

const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    padding:0;
    font-family: Arial, Helvetica, sans-serif;
    box-sizing:border-box;
    border:none;
    outline:none;
  }

  html{
    font-size:10px;
  }

  body{
    min-width:350px;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .card{
  top:0;
  left:0;
  display:flex;
  justify-content:space-between;
  width: 100%;
  max-width:260px;
  word-break: break-all;
  margin: 10px 0px;
  padding: 9px 7.5px;
  font-size: 1.4rem;
  box-shadow: 0px 0.5px 0px 0.5px #aaa;
  background-color: #fff;
  border-radius:3px;
  cursor: pointer;
  color:black;

  &:hover {
    background-color: #ebecf0;
  }

  &:hover > *{
  color:#777;
  }
  }

  .fa-highlighter{
    color:#777;
    align-self:center;
    margin-left:2px;
    @media ${device.laptop} {
      color:#fff;
  }
  }
  
  .fa-ellipsis-h{
   padding: 9px ;
   margin-left:2px;
   margin-bottom: 5px;
   font-size: 13px;
   color: #777;
   cursor: pointer;

   &:hover{
    background-color: #dddfe5;
   }
  }

`;

export default GlobalStyle;
