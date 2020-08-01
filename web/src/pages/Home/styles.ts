import styled, { css } from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  justify-content: space-between;
  align-items: center;
  display: flex;
  @media(max-width: 600px){
    flex-direction: column;
    & > div {
      margin: 0px;
      margin-top: 40px;
      margin-bottom: 40px;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  button + button {
    margin-top: 20px;
  }
  margin-left: 20px;
  margin-right: 80px;
`;

export const Button = styled.button`
  width: 180px;
  height: 40px;
  border: none;
  border-radius: 6px;
  text-align: center;
  font-size: 16px;  

  :hover{
    transition: background-color 0.3s;
    background-color: #192D38;
  }
`;

export const Response = styled.ol`
  list-style: none;
  overflow:auto;
  
  li + li {
    margin-top: 12px; 
  }


`;

export const Item = styled.li`
  padding: 8px;
  border-color: #ccc;
  border-radius: 6px;
  border-style: solid;
  border-width: 2px;
  background-color: #f0f0f0;
  color: #000;

  h4{
    margin-right: 12px;
  }
  p{
    margin-top: 4px;
    font-size: 14px;
  }
`;

export const NavigationBar = styled.div<{isVisible: boolean}>`
  ${({ isVisible }) => css`
    display: ${isVisible ? 'flex' : 'none'};
  `}
  flex: 1;
  justify-content: space-between;
  margin-top: 20px;

  svg {
    cursor: pointer;
  }
`;

export const Content = styled.div`
  align-items: center;
  max-height: 90%;
  overflow: scroll;
  flex: 1;
  max-width: 700px;
  margin-right: 20px;
  @media(max-width: 600px){
    width: 80%;
  }
`;
