import styled, { css } from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  justify-content: space-between;
  align-items: center;
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  button + button {
    margin-top: 20px;
  }
  margin-left: 20px;
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
  max-height: 80%;
  overflow:scroll;
  margin-right: 20px;
  li + li {
    margin-top: 12px; 
  }
`;

export const Item = styled.li`
  width: 480px;
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
