import React from 'react';
import styled from "styled-components";

const MainContainer = styled.div`
    @include background-img-display();
    margin:0;
    padding:0;
    min-height:100vh;
    font-size: 15px;
    background-color:#f5f5f5;
    font-family: 'Roboto', Helvetica, sans-serif;
    background-image: url("../image/sp_main_bg.png");
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: -10;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
`;

const InnerContainer = styled.div`
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    overflow-y: hidden;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 800px;
    @media screen and (min-width: 768px) {
        max-width: 1031px;
    }
    @media screen and (min-width: 1050px) {
        max-width: 1032px;
    }

`

const Layout = ({ children }) => {
  return (
    <MainContainer>
        <InnerContainer>
            {children}
        </InnerContainer>
    </MainContainer>
  )
}

export default Layout