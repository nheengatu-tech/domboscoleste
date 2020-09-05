import styled from "styled-components";

const StyledButton = styled.button`
  display: block;
  border: 0;
  cursor: pointer;
  border-radius: 4px;
  width: 100%;
  padding: 16px;
  font-weight: bold;
  font-size: 15px;
  transition: background-color 0.2s;
  margin-top: 40px;
  background: white;
  color: rgb(12,51,159);
  border: solid 1px rgb(12,51,159); 
  
  &:hover {
    background: rgb(12,51,159);
    color: white;
    border: solid 1px white; 
  }
`;

export { StyledButton };
