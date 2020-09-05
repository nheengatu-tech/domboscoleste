import styled from "styled-components";
import { Input } from "../../components/Input";

const FormField = styled(Input)``;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px auto;
  width: 500px;
  height: 400px;
  border: solid 2px rgb(12,51,159);
  border-radius: 20px;
`;

const Button = styled.button`
  display: block;
  background: white;
  color: black;
  border: 0;
  cursor: pointer;
  border-radius: 4px;
  width: 100%;
  padding: 16px;
  font-weight: bold;
  font-size: 15px;
  transition: background-color 0.2s;
  margin-top: 40px;

  &:hover {
    background-color: #7c848f;
  }
`;

export { Button, Container, FormField };
