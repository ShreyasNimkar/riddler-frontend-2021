import styled from "styled-components";
// import Brice from './assets/Brice.otf';
import briceBold from "./assets/Brice-Bold.otf";
// import newFont from './assets/Inconsolata.ttf';

export const AboutContainer = styled.div`
  height: calc(100vh - 80px);
  width: 100%;
  background-color: black;
  position: relative;
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-image: url("bg_pattern.svg");
  background-position: center top -20px;
  background-size: cover;
  background-color: black;
`;

export const AboutBox = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 20rem;

  img {
    width: 100%;
  }

  @media screen and (max-width: 900px) {
    width: 15rem;
    top: 2rem;
  }

  @media screen and (max-width: 500px) {
    width: 10rem;
    top: 4rem;
  }
`;

export const AboutBg = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  .Wave1 {
    position: absolute;
    bottom: -1px;
    height: 25%;
    z-index: 3;
  }

  .Wave1 svg {
    display: block;
  }

  .Wave2 {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 75%;
  }
`;

export const Heading = styled.div`
  @font-face {
    font-family: "Brice-Bold";
    src: url(${briceBold}) format("truetype");
  }
  position: absolute;
  top: 4rem;
  left: 4rem;
  z-index: 2;
  font-weight: 600;
  font-size: 6rem;
  letter-spacing: 0.05rem;
  width: 50%;
  color: #d8f029;
  text-align: left;
  font-family: Brice;

  @media screen and (max-width: 1100px) {
    width: 50%;
    font-size: 5rem;
  }

  @media screen and (max-width: 900px) {
    width: 60%;
    font-size: 3.5rem;
  }

  @media screen and (max-width: 650px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 500px) {
    width: 90%;
    font-size: 1.5rem;
    line-height: 5rem;
    left: 2rem;
  }

  @media screen and (max-width: 350px) {
    width: 90%;
    font-size: 1.2rem;
    line-height: 5rem;
    left: 1rem;
  }
`;

export const AboutText = styled.p`
  @font-face {
    font-family: Ligconsolata;
    src: url("ligconsolata.ttf");
  }
  font-family: Ligconsolata;
  z-index: 2;
  margin-left: 10%;
  font-weight: 700;
  font-size: 1.3rem;
  width: 50%;
  color: white;
  text-align: left;
  line-height: 180%;
  text-transform: uppercase;
  align-self: flex-start;
  background-color: rgba(0, 0, 0, 0.5);

  @media screen and (max-width: 1100px) {
    width: 50%;
  }

  @media screen and (max-width: 900px) {
    width: 70%;
  }

  @media screen and (max-width: 700px) {
    margin-left: 5%;
  }

  @media screen and (max-width: 650px) {
    width: 80%;
    font-size: 1rem;
  }

  @media screen and (max-width: 500px) {
    width: 90%;
  }

  @media screen and (max-width: 350px) {
    font-size: 0.8rem;
  }
`;

export const Yellow = styled.span`
  color: #d8f029;
`;

export const RiddlerBox = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 1rem;
  width: 20rem;

  img {
    width: 100%;
  }

  @media screen and (max-width: 900px) {
    bottom: 1rem;
  }

  @media screen and (max-width: 700px) {
    width: 15rem;
  }

  @media screen and (max-width: 450px) {
    width: 12rem;
  }
`;
