import {
  BackgroundImage,
  CardDivider,
  UserAvatarWrapper,
  UserAvatarImage,
  TweetCount,
  FollowerCount,
  SubscribeButton,
} from "./TweetCardItem.styled";

import bg from "./bg.png";

const TweetCardItem = ({ user: { user, tweets, followers, avatar } }) => {
  return (
    <>
      <BackgroundImage src={bg} alt="avatar" />
      <CardDivider />
      <UserAvatarWrapper>
        <UserAvatarImage src={avatar} alt={`Avatar of ${user.name}`} />
      </UserAvatarWrapper>
      <TweetCount>{`${tweets} tweets`}</TweetCount>
      <FollowerCount>{`${followers} followers`}</FollowerCount>
      <SubscribeButton>Follow</SubscribeButton>
    </>
  );
};

export default TweetCardItem;
