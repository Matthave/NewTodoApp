import { createGlobalStyle } from "styled-components";

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
  }

  .card{
  display:flex;
  justify-content:space-between;
  width: 100%;
  word-break: break-all;
  margin: 10px 0px;
  padding: 9px 7.5px;
  font-size: 1.4rem;
  box-shadow: 0px 1px 0.5px 0.5px #bbb;
  background-color: #fff;
  border-radius:3px;
  cursor: pointer;
  transition: 0.1s linear;
  color:black;

  &:hover {
    background-color: #ebecf0;
  }

  &:hover > *{
  color:#777;
  }
  }

  .fa-highlighter{
    color:#fff;
    align-self:center;
    margin-left:2px;
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
