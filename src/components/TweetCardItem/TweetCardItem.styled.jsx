import styled from "styled-components";

export const BackgroundImage = styled.img`
  width: 308px;
  height: 168px;
  margin-bottom: 88px;
`;

export const CardDivider = styled.div`
  position: absolute;
  top: 214px;
  left: 0;
  width: 100%;
  height: 8px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const UserAvatarWrapper = styled.div`
  position: absolute;
  left: calc(50% - 40px);
  top: 174px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 8px solid #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserAvatarImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  scale: 1;
  transition: scale 0.3s ease-in-out;

  &:hover {
    scale: 1.5;
  }
`;

export const TweetCount = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
  margin-bottom: 16px;
`;

export const FollowerCount = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
  margin-bottom: 26px;
`;

export const SubscribeButton = styled.button`
  min-width: 196px;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  border: none;
  color: #373737;
  background-color: #ebd8ff;
  padding: 14px 28px;
  border-radius: 10px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #5cd3a8;
  }
`;
