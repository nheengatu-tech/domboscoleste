import React from "react";
import { Background } from "../../../molecules";
import styled from "styled-components";

const TotemHome = (props) => {
  return (
    <>
      <Background />
      <Title>Como posso te ajudar?</Title>
      <PrimaryButton
        left="56px"
        top="350px"
        onClick={() => window.open("https://loja.edebe.com.br/")}
      >
        <span>
          <BookIcon />
        </span>
        <span>Compra de Livros</span>
      </PrimaryButton>
      <PrimaryButton
        left="390px"
        top="350px"
        onClick={() =>
          window.open(
            "https://forms.gennera.com.br/view#/formulario/5489646583647829751"
          )
        }
      >
        <span>
          <PrimaryIcon />
        </span>
        <span>Reserva de Matrículas</span>
      </PrimaryButton>
      <PrimaryButton
        left="56px"
        top="545px"
        onClick={() => window.open("https://edu.edebe.com.br/")}
      >
        <span>
          <ChartIcon />
        </span>
        <span>Extrato Financeiro</span>
      </PrimaryButton>
      <PrimaryButton
        left="390px"
        top="545px"
        onClick={() => window.open("https://edu.edebe.com.br/")}
      >
        <span>
          <FAQIcon />
        </span>
        <span>2° Via Boleto</span>
      </PrimaryButton>
    </>
  );
};

const FAQIcon = () => {
  return (
    <svg
      width="38"
      height="35"
      viewBox="0 0 38 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.7917 17.0833C17.778 17.0833 16.7872 17.3839 15.9444 17.9471C15.1016 18.5102 14.4447 19.3106 14.0568 20.2471C13.6689 21.1836 13.5674 22.214 13.7651 23.2082C13.9629 24.2023 14.451 25.1155 15.1677 25.8323C15.8845 26.549 16.7977 27.0371 17.7918 27.2349C18.786 27.4326 19.8164 27.3311 20.7529 26.9432C21.6894 26.5553 22.4898 25.8984 23.0529 25.0556C23.6161 24.2128 23.9167 23.222 23.9167 22.2083C23.9167 20.8491 23.3767 19.5455 22.4156 18.5844C21.4545 17.6233 20.1509 17.0833 18.7917 17.0833ZM18.7917 23.9167C18.4538 23.9167 18.1235 23.8165 17.8426 23.6288C17.5616 23.441 17.3427 23.1742 17.2134 22.8621C17.0841 22.5499 17.0502 22.2064 17.1162 21.8751C17.1821 21.5437 17.3448 21.2393 17.5837 21.0004C17.8226 20.7614 18.127 20.5987 18.4584 20.5328C18.7898 20.4669 19.1333 20.5007 19.4454 20.63C19.7576 20.7593 20.0244 20.9783 20.2121 21.2592C20.3998 21.5402 20.5 21.8705 20.5 22.2083C20.5 22.6614 20.32 23.0959 19.9996 23.4163C19.6793 23.7367 19.2447 23.9167 18.7917 23.9167ZM17.5787 13.1713C17.7412 13.3268 17.9328 13.4487 18.1425 13.53C18.347 13.6204 18.5681 13.6671 18.7917 13.6671C19.0152 13.6671 19.2363 13.6204 19.4408 13.53C19.6505 13.4487 19.8421 13.3268 20.0046 13.1713L23.9167 9.3275C24.2474 8.99675 24.4332 8.54816 24.4332 8.08042C24.4332 7.61267 24.2474 7.16408 23.9167 6.83333C23.5859 6.50259 23.1373 6.31677 22.6696 6.31677C22.2018 6.31677 21.7532 6.50259 21.4225 6.83333L20.5 7.84125V1.70833C20.5 1.25526 20.32 0.820734 19.9996 0.500359C19.6793 0.179985 19.2447 0 18.7917 0C18.3386 0 17.9041 0.179985 17.5837 0.500359C17.2633 0.820734 17.0833 1.25526 17.0833 1.70833V7.84125L16.1608 6.83333C15.8301 6.50259 15.3815 6.31677 14.9137 6.31677C14.446 6.31677 13.9974 6.50259 13.6667 6.83333C13.3359 7.16408 13.1501 7.61267 13.1501 8.08042C13.1501 8.54816 13.3359 8.99675 13.6667 9.3275L17.5787 13.1713ZM30.75 22.2083C30.75 21.8705 30.6498 21.5402 30.4621 21.2592C30.2744 20.9783 30.0076 20.7593 29.6954 20.63C29.3833 20.5007 29.0398 20.4669 28.7084 20.5328C28.377 20.5987 28.0726 20.7614 27.8337 21.0004C27.5948 21.2393 27.4321 21.5437 27.3662 21.8751C27.3002 22.2064 27.3341 22.5499 27.4634 22.8621C27.5927 23.1742 27.8116 23.441 28.0926 23.6288C28.3735 23.8165 28.7038 23.9167 29.0417 23.9167C29.4947 23.9167 29.9293 23.7367 30.2496 23.4163C30.57 23.0959 30.75 22.6614 30.75 22.2083ZM32.4583 10.25H27.3333C26.8803 10.25 26.4457 10.43 26.1254 10.7504C25.805 11.0707 25.625 11.5053 25.625 11.9583C25.625 12.4114 25.805 12.8459 26.1254 13.1663C26.4457 13.4867 26.8803 13.6667 27.3333 13.6667H32.4583C32.9114 13.6667 33.3459 13.8467 33.6663 14.167C33.9867 14.4874 34.1667 14.9219 34.1667 15.375V29.0417C34.1667 29.4947 33.9867 29.9293 33.6663 30.2496C33.3459 30.57 32.9114 30.75 32.4583 30.75H5.125C4.67192 30.75 4.2374 30.57 3.91703 30.2496C3.59665 29.9293 3.41667 29.4947 3.41667 29.0417V15.375C3.41667 14.9219 3.59665 14.4874 3.91703 14.167C4.2374 13.8467 4.67192 13.6667 5.125 13.6667H10.25C10.7031 13.6667 11.1376 13.4867 11.458 13.1663C11.7783 12.8459 11.9583 12.4114 11.9583 11.9583C11.9583 11.5053 11.7783 11.0707 11.458 10.7504C11.1376 10.43 10.7031 10.25 10.25 10.25H5.125C3.76577 10.25 2.4622 10.79 1.50108 11.7511C0.539954 12.7122 0 14.0158 0 15.375V29.0417C0 30.4009 0.539954 31.7045 1.50108 32.6656C2.4622 33.6267 3.76577 34.1667 5.125 34.1667H32.4583C33.8176 34.1667 35.1211 33.6267 36.0823 32.6656C37.0434 31.7045 37.5833 30.4009 37.5833 29.0417V15.375C37.5833 14.0158 37.0434 12.7122 36.0823 11.7511C35.1211 10.79 33.8176 10.25 32.4583 10.25ZM6.83333 22.2083C6.83333 22.5462 6.93353 22.8765 7.12124 23.1574C7.30895 23.4384 7.57576 23.6573 7.88792 23.7866C8.20007 23.9159 8.54356 23.9498 8.87495 23.8838C9.20633 23.8179 9.51073 23.6552 9.74964 23.4163C9.98855 23.1774 10.1513 22.873 10.2172 22.5416C10.2831 22.2102 10.2493 21.8667 10.12 21.5546C9.99066 21.2424 9.7717 20.9756 9.49077 20.7879C9.20983 20.6002 8.87954 20.5 8.54167 20.5C8.08859 20.5 7.65407 20.68 7.33369 21.0004C7.01332 21.3207 6.83333 21.7553 6.83333 22.2083Z"
        fill="white"
      />
    </svg>
  );
};

const BookIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.25 7C13.25 7.55228 12.8023 8 12.25 8C11.6977 8 11.25 7.55228 11.25 7C11.25 6.44772 11.6977 6 12.25 6C12.8023 6 13.25 6.44772 13.25 7Z"
        fill="white"
      />
      <path
        d="M11.5 9.75L11.5 14.75C11.5 15.1642 11.8358 15.5 12.25 15.5C12.6642 15.5 13 15.1642 13 14.75V9.75C13 9.33579 12.6642 9 12.25 9C11.8358 9 11.5 9.33579 11.5 9.75Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4 4.5C4 3.11929 5.11929 2 6.5 2H18C19.3807 2 20.5 3.11929 20.5 4.5V18.75C20.5 19.1642 20.1642 19.5 19.75 19.5H5.5C5.5 20.0523 5.94772 20.5 6.5 20.5H19.75C20.1642 20.5 20.5 20.8358 20.5 21.25C20.5 21.6642 20.1642 22 19.75 22H6.5C5.11929 22 4 20.8807 4 19.5V4.5ZM19 18V4.5C19 3.94772 18.5523 3.5 18 3.5H6.5C5.94772 3.5 5.5 3.94772 5.5 4.5V18H19Z"
        fill="white"
      />
    </svg>
  );
};

const ChartIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.74908 3C6.99122 3 7.99817 4.00695 7.99817 5.24908V18.7509C7.99817 19.9931 6.99122 21 5.74908 21C4.50695 21 3.5 19.9931 3.5 18.7509V5.24908C3.5 4.00695 4.50695 3 5.74908 3ZM12.2491 7C13.4912 7 14.4982 8.00695 14.4982 9.24908V18.7509C14.4982 19.9931 13.4912 21 12.2491 21C11.0069 21 10 19.9931 10 18.7509V9.24908C10 8.00695 11.0069 7 12.2491 7ZM18.7491 11C19.9912 11 20.9982 12.0069 20.9982 13.2491V18.7509C20.9982 19.9931 19.9912 21 18.7491 21C17.5069 21 16.5 19.9931 16.5 18.7509V13.2491C16.5 12.0069 17.5069 11 18.7491 11ZM5.74908 4.5C5.33538 4.5 5 4.83538 5 5.24908V18.7509C5 19.1646 5.33538 19.5 5.74908 19.5C6.16279 19.5 6.49817 19.1646 6.49817 18.7509V5.24908C6.49817 4.83538 6.16279 4.5 5.74908 4.5ZM12.2491 8.5C11.8354 8.5 11.5 8.83537 11.5 9.24908V18.7509C11.5 19.1646 11.8354 19.5 12.2491 19.5C12.6628 19.5 12.9982 19.1646 12.9982 18.7509V9.24908C12.9982 8.83537 12.6628 8.5 12.2491 8.5ZM18.7491 12.5C18.3354 12.5 18 12.8354 18 13.2491V18.7509C18 19.1646 18.3354 19.5 18.7491 19.5C19.1628 19.5 19.4982 19.1646 19.4982 18.7509V13.2491C19.4982 12.8354 19.1628 12.5 18.7491 12.5Z"
        fill="white"
      />
    </svg>
  );
};

const PrimaryIcon = () => {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25.9175 21.49C27.0252 20.3004 27.6492 18.7404 27.6675 17.115C27.6675 15.3606 26.9706 13.678 25.73 12.4375C24.4895 11.1969 22.8069 10.5 21.0525 10.5C19.2981 10.5 17.6155 11.1969 16.375 12.4375C15.1344 13.678 14.4375 15.3606 14.4375 17.115C14.4558 18.7404 15.0798 20.3004 16.1875 21.49C14.6451 22.258 13.3179 23.3974 12.3251 24.8056C11.3323 26.2138 10.7051 27.8468 10.5 29.5575C10.4489 30.0216 10.5844 30.487 10.8764 30.8513C11.1685 31.2156 11.5934 31.4489 12.0575 31.5C12.5216 31.5511 12.987 31.4156 13.3513 31.1236C13.7156 30.8315 13.9489 30.4066 14 29.9425C14.2088 28.247 15.0305 26.6864 16.3102 25.5546C17.5898 24.4229 19.2392 23.7982 20.9475 23.7982C22.6558 23.7982 24.3052 24.4229 25.5849 25.5546C26.8645 26.6864 27.6862 28.247 27.895 29.9425C27.9437 30.3912 28.1638 30.8038 28.5095 31.094C28.8552 31.3843 29.2996 31.5297 29.75 31.5H29.9425C30.4012 31.4472 30.8205 31.2153 31.109 30.8547C31.3974 30.4941 31.5317 30.0341 31.4825 29.575C31.2926 27.8733 30.6852 26.2448 29.7143 24.8343C28.7435 23.4239 27.4392 22.275 25.9175 21.49V21.49ZM21 20.23C20.3839 20.23 19.7817 20.0473 19.2694 19.705C18.7571 19.3627 18.3579 18.8763 18.1221 18.3071C17.8864 17.7379 17.8247 17.1115 17.9449 16.5073C18.065 15.903 18.3617 15.348 18.7974 14.9124C19.233 14.4767 19.788 14.18 20.3923 14.0599C20.9965 13.9397 21.6229 14.0013 22.1921 14.2371C22.7613 14.4729 23.2477 14.8721 23.59 15.3844C23.9323 15.8967 24.115 16.4989 24.115 17.115C24.115 17.9412 23.7868 18.7335 23.2026 19.3176C22.6185 19.9018 21.8262 20.23 21 20.23V20.23ZM33.25 3.5H8.75C7.35761 3.5 6.02226 4.05312 5.03769 5.03769C4.05312 6.02226 3.5 7.35761 3.5 8.75V33.25C3.5 34.6424 4.05312 35.9777 5.03769 36.9623C6.02226 37.9469 7.35761 38.5 8.75 38.5H33.25C34.6424 38.5 35.9777 37.9469 36.9623 36.9623C37.9469 35.9777 38.5 34.6424 38.5 33.25V8.75C38.5 7.35761 37.9469 6.02226 36.9623 5.03769C35.9777 4.05312 34.6424 3.5 33.25 3.5ZM35 33.25C35 33.7141 34.8156 34.1593 34.4874 34.4874C34.1593 34.8156 33.7141 35 33.25 35H8.75C8.28587 35 7.84075 34.8156 7.51256 34.4874C7.18438 34.1593 7 33.7141 7 33.25V8.75C7 8.28587 7.18438 7.84075 7.51256 7.51256C7.84075 7.18438 8.28587 7 8.75 7H33.25C33.7141 7 34.1593 7.18438 34.4874 7.51256C34.8156 7.84075 35 8.28587 35 8.75V33.25Z"
        fill="white"
      />
    </svg>
  );
};

const PrimaryButton = styled.button`
  background: rgb(12, 51, 159);
  padding-right: 94px;
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 324px;
  height: 184px;
  // left: 56px;
  // top: 330px;
  left: ${(props) => (props.left ? props.left : "auto")};
  top: ${(props) => (props.top ? props.top : "auto")};
  // background: #00c745;
  box-shadow: 0px 4px 20px 4px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  border: none;

  > span {
    font-weight: 500;
    // font-family: "Titillium Web, sans-serif";
    font-size: 30px;
    line-height: 30px;
    display: flex;
    align-items: center;
    color: #ffffff;
    margin: auto;
    text-align: start;
    margin-left: 12px;

    > svg {
      width: 42px;
      height: 42px;
      color: white;
    }
  }
`;

const Title = styled.div`
  /* Como posso te ajudar? */
  // rgb(12, 51, 159
  position: absolute;
  width: 425px;
  height: 85px;
  left: 195px;
  top: 250px;

  // font-family: Roboto;
  // font-family: "Titillium Web, sans-serif";
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 85px;
  /* identical to box height, or 212% */

  display: flex;
  align-items: center;

  color: #000000;
`;

export default TotemHome;