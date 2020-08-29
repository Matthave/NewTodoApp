import { createGlobalStyle } from "styled-components";
import { device } from "../MediaQuery/mq";

const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    padding:0;
    font-family: Arial, Helvetica, sans-serif;
    box-sizing:border-box;
    border:none;
    outline:0;
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
  flex-wrap:wrap;
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

      &:hover .fa-highlighter {
     color:#777; 
    }
  }

  .card_cardWrapContent{
    display:flex;
    justify-content:space-around
  }

  .card_wrapLabel{
    display:flex;
    flex-wrap:wrap;
    width:100%;
    transition:0.1s linear;

    &:hover{
      opacity:0.6;
    }
  }

  .labelElement{
    align-self:center;
    min-width: 15%;
    min-height:8px;
    border-radius:5px;
    margin-bottom:4px;
    margin-right:4px;
    padding: 3px;
    color:white;
    transition: 0.1s linear;
  }

  .labelElement_DetailCover{
    min-width:40px;
    width:auto;
    height:32px;
    border-radius:3px;
    margin: 3px 3px 3px 0px;
    cursor:pointer;
    transition: 0.1s linear;
    padding: 8px 5px;
    color:white;
    font-size:14px;
    font-weight:600;

    &:hover{
      opacity: 0.85;
    }
  }

  .lists{
  top:0;
  left:0;
  width: 275px;
  max-height: 80vh;
  margin-right: 10px;
  align-self: flex-start;
  background-color: #ebecf0;
  border-radius: 4px;
  padding: 10px 7.5px;
  margin-bottom: 15px;
  cursor: pointer;
  overflow-y:scroll;

  &::-webkit-scrollbar{
    width:1px;
}

&::-webkit-scrollbar-track{
    background:rgba(0,0,0,0);
}

&::-webkit-scrollbar-thumb{
  background:rgba(0,0,0,0);
  border-radius: 10px;
  height:10px;
}
&::-webkit-scrollbar-thumb:hover{
  background:rgba(0,0,0,0);
}
  }
  
  .singleListWrap{
     position:relative;
     width: 285px;
     display:flex;
     flex-direction:column;
   }

  .fa-highlighter{
    color:#777;
    align-self:center;
    margin:2px;
    margin-bottom:0px;
    color:#000;
    @media ${device.laptop} {
      color:#fff;

      &:hover{
        color:#000;
      }
  }
  }
  
  .fa-ellipsis-h{
   padding: 9px ;
   margin-left:2px;
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

   .termSpan{
    color: #888;
    font-size: 12.5px;
    letter-spacing: 0.5px;
    margin-left:3px;
    padding: 2.5px 5px;
    border-radius:3px;
   }

   .menuSlidePosition{
     top:40px ;
     right:0px ;
     bottom:0px ;
     width:320px;
     height:auto ;
     border-radius:0px;
     background-color:#F4F5F7;
   }

   .ultimateDelete{
     background-color:#CF513D;
     color:#fff;

     &:hover{
      background-color:#ef715d;
     }
   }

   .fa-skull-crossbones{
     color:#fff;
   }

   .navLink{
    text-decoration: none;
  font-size: 1.5rem;
  color: #fff;
  padding:7px 17px;
   }

   .navLinkIntro{
    background-color: #fff;
  border-radius: 5px;
  padding: 5px 20px;
  margin: auto 0 auto auto;
  font-size: inherit;
  text-decoration:none;
  color: #0079bf;
  transition:0.1s linear;
  cursor: pointer;

  &:hover{
    transform: rotate(4deg);
  }
   }

   .headerLinkIntro{
  background-color: #61bd4f;
  border-radius: 5px;
  margin: 10px auto auto;
  padding: 10px 15px;
  font-size: 25px;
  text-decoration:none;
  color: #fff;
  transition:0.1s linear;
  cursor: pointer;

  &:hover{
    background-color: #50a33e;
  }
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
