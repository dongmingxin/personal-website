import React from 'react';
import styled from "styled-components";
import { NavLink } from 'react-router-dom';


const NavbarContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 40px 0px 50px 0px;
`;

const NavLogo = styled.div`
    font-size: 18px;
    color: #000;
    font-weight: 500;
`;

const NavlogoSpan = styled.span`
    color: #2eca7f;
`

const NavLinks = styled.div`

`
const NavLinkItem = styled(NavLink)`
    text-decoration: none;
    padding: 0px 40px 0px 40px;
    color: #49515D;
    font-weight: bold;
    opacity: 0.6;
    position: relative;
    cursor: pointer;
    &:hover{
        opacity: 1;
        &::before{
            content:'';
            position: absolute;
            width: 30px;
            height: 3px;
            background-color: #2eca7f;
            top: 22px;
            right: 38%;
        }
    }
`;

const Navbar = () => {
    const NavLinkActiveStyle = {
        color: 'red',
        opacity: '1',
    }
  return (
    <NavbarContainer>
        <NavLogo>Mingxin <NavlogoSpan>Dong</NavlogoSpan></NavLogo>
        <NavLinks>
            <NavLinkItem
                to="/home"
                style={({ isActive }) => 
                    isActive ? NavLinkActiveStyle : undefined}
            >
                Home
            </NavLinkItem>
            <NavLinkItem 
                to="/resume"
                style={({ isActive }) =>
                    isActive ? NavLinkActiveStyle : undefined
                }
            >
                Resume
            </NavLinkItem>
            {/* <NavLinkItem 
                to="/blog">
                Blog
            </NavLinkItem>
            <NavLinkItem 
                to="/contact"
            >
                Contact
            </NavLinkItem> */}
        </NavLinks>
    </NavbarContainer>
  )
}

export default Navbar