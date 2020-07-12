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
    font-family: 'Roboto', sans-serif;
  }

  html{
    font-size:10px;
  }

  body{
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
    background-color: #F4F5F7;
  }

  &:hover > *{
  color:#777;
  }
  }

  .lists{
  top:0;
  left:0;
  width: 275px;
  margin-right: 10px;
  align-self: flex-start;
  background-color: #ebecf0;
  border-radius: 4px;
  padding: 10px 7.5px;
  margin-bottom: 15px;
  cursor: pointer;
  }
  
  .listWrap{
     position:relative;
     width: 285px;
     display:flex;
     flex-direction:column;
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

  .fa-credit-card{
    margin-right: 7.5px;
     color:#42526E;
     font-size: 19px;
     
   }

   .detail > .fa-times{
     position: absolute;
     top:15px;
     right:15px;
     font-size: 20px;
     color:#42526E;
     cursor: pointer;
   }

::-webkit-scrollbar{
    height:17.5px;
}::-webkit-scrollbar-track{
    background:rgba(0,0,0,0.5);
}
::-webkit-scrollbar-thumb{
  background:rgba(0,0,0,0.3);
  border-radius: 10px;
  height:10px;
}
::-webkit-scrollbar-thumb:hover{
  background:rgba(0,0,0,0.5);
}
`;

export default GlobalStyle;
