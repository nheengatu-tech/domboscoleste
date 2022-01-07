import styled from "styled-components";
import { tablet } from "../../_breakpoints";

export const Grid = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  margin: auto;

  @media (min-width: ${tablet}) {
    flex-direction: row;
  }
`;

export const BodyNotice = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  text-align: justify;
  padding: 24px;

  @media (min-width: ${tablet}) {
    width: 70%;
    padding: 48px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  min-height: 200px;
  background: #f4f4f4;
  position: relative;
  overflow: hidden;
  font-family: "Dekar", sans-serif;
  color: #1c3f95;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 25%;
    background: #fff;
    transform: rotate(-1.5deg);
    top: -15%;
  }

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 33%;
    background: #fff;
    transform: rotate(2deg);
    bottom: -15%;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    padding: 48px;
    font-weight: bold;
  }

  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    width: 35%;
    height: auto;
    max-height: 350px;
    top: -80px;
    margin-left: 16px;
    background-color: white;
    border-radius: 3%;
  }

  .shadow-image{
    box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.15);
  }

  .shadow-content{
    box-shadow: 0px -1px 5px 3px rgba(0, 0, 0, 0.05);
  }

  #fileImage {
    border-radius: inherit;
    height: 100%;
    width: 100%;
  }

  @media only screen and (max-width: 1000px) {
    .image {
      width: 50%;
    }
  }

  @media only screen and (max-width: 840px) {
    .image {
      width: 70%;
    }
  }
`;

export const Banner = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  background-color: gray;
  justify-content: center;
  align-items: center;

  .cover{
    object-fit: cover;
  }
`;

export const Content = styled.div`
  display: block;
  padding: 0px 36px 36px 36px;
`;

export const ContainerText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;

  .text {
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: justify;
    font-size: 16px;

    .title {
      color: #222;
      font-size: 48px;
      font-weight: bold;
      font-family: Dekar, sans-serif;
      margin-top: 16px;
    }
  }

  @media only screen and (max-width: 1000px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;

    .text {
      width: 80%;
    }
  }
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  
  @media only screen and (max-width: 810px) {
    .cardDeck {
      flex-direction: column;
    }
  }

  .cardDeck {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    font-size: 16px;

    .item {
      width: 100%;
      margin: 0px;
      margin-bottom: 3rem;
      align-self: flex-start;
      text-align: center;

      li {
        margin-bottom: 8px;
        list-style-type: none;
      }
    }
  }

  .title {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 24px;
    color: #222;
  }
`;
