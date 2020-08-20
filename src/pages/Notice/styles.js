import styled from 'styled-components'

export const TitleContainer = styled.div`
  display: flex;
  min-height: 200px;
  background: #f4f4f4;
  position: relative;
  overflow: hidden;
  font-family: 'Dekar', sans-serif;
  color: #1c3f95;

  &:before{
    content: '';
    position: absolute;
    width: 100%;
    height: 25%;
    background: #fff;
    transform: rotate(-1.5deg);
    top: -15%;
  }

  &:after{
    content: '';
    position: absolute;
    width: 100%;
    height: 33%;
    background: #fff;
    transform: rotate(2deg);
    bottom: -15%;
  }
`