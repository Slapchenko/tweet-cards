import styled from "styled-components";

export const Title = styled.p``;

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

export const FilterButton = styled.button`
  min-width: 100px;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  border: none;
  color: #373737;
  background-color: ${({ follow }) => (follow ? "#5cd3a8" : "#ebd8ff")};
  padding: 10px 20px;
  border-radius: 10px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #5cd3a8;
  }
`;
