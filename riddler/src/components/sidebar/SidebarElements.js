import styled from "styled-components";
import {Link as LinkS} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';
import {FaTimes} from 'react-icons/fa';

export const SidebarContainer = styled.aside`
    width:100%;
    height:100%;
    position:fixed;
    z-index:999;
    background:#000000;
    display:grid;
    align-items:center;
    top:0;
    left:0;
    transition: all 0.3 ease-in-out;
    opacity: ${({ isOpen}) => (isOpen ? '1' : '0')};
    top: ${({ isOpen}) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes) `
    color: #fff;
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;

    &:hover {
        cursor: pointer;
    }
`;

export const SidebarWrapper = styled.div`
    color: #fff;
`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }
`;

export const SidebarLink = styled(LinkS)`
    display: flex;
    align-tems: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoraction: none;
    list-style: none;
    transition: 0;
    transition: all 2x ease-in-out;
    text-decoraction: none;
    color: #fff;
    cursor: pointer;

    &:active {
        color: rgba(219, 244, 41, 1);
    }
`;

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`;

export const SidebarRoute = styled(LinkR)`
    border-radius:50px;
    background: #ffffff;
    white-space: nowrap;
    padding:10px 22px;
    color:#000000;
    font-size:16px;
    outline:none;
    border:none;
    font-weight: bold;
    cursor:pointer;
    transition:all 0.2 ease-in-out;
    text-decoration: none;

    &:hover {
        transition:all 0.2 ease-in-out;
        background:rgba(219, 244, 41, 1);
        color:#000000;
    };
`;