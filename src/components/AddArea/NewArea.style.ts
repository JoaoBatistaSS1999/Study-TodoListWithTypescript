import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  padding: 10px;
  margin: 20px 0;
  border: 1px solid #555;
  border-radius: 5px;

  input {
    border: none;
    background-color: transparent;
    height: 30px;
    width: 300px;
    outline: 0;
    font-size: 18px;
    flex: 1;
    color: aliceblue;
  }
`;
