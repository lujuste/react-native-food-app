import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: #e5e5e5;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.View`
  display: flex;
  width: 100%;
  flex-direction: row;
  height: 70px;
  justify-content: space-between;
  margin-top: 50px;
  align-items: center;
  padding: 0 20px;
`;

export const InputBar = styled.View`
  width: 314px;
  height: 60px;
  background-color: #efeeee;
  margin: 0 auto;
  border-radius: 30px;
  margin-top: 20px;
  display: flex;
`;
