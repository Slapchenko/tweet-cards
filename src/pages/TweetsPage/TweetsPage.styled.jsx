import styled from "styled-components";


export const LoadMoreButton = styled.button`
  width: 100%;
  margin: 20px 0;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  border: none;
  color: #373737;
  background-color: ${({ follow }) => (follow ? "#5cd3a8" : "#ebd8ff")};
  padding: 14px 28px;
  border-radius: 10px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #5cd3a8;
  }
`;