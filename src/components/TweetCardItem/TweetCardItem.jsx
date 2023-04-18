import { useDispatch } from "react-redux";
import { toggleFollow } from "../../redux/operations"
import {
  BackgroundImage,
  CardDivider,
  UserAvatarWrapper,
  UserAvatarImage,
  TweetCount,
  FollowerCount,
  SubscribeButton,
} from "./TweetCardItem.styled";

import bg from "./bg.png"; //!

const TweetCardItem = ({
  user: { id, user, tweets, followers, avatar, follow },
}) => {
  const dispatch = useDispatch();

  const handleFollowToggle = () => {
    dispatch(toggleFollow(id));
  };

  return (
    <>
      <BackgroundImage src={bg} alt="avatar" />
      <CardDivider />
      <UserAvatarWrapper>
        <UserAvatarImage src={avatar} alt={`Avatar of ${user.name}`} />
      </UserAvatarWrapper>
      <TweetCount>{`${tweets} tweets`}</TweetCount>
      <FollowerCount>{`${followers} followers`}</FollowerCount>
      <SubscribeButton follow={follow} onClick={handleFollowToggle}>
        {follow ? "Following" : "Follow"}
      </SubscribeButton>
    </>
  );
};

export default TweetCardItem;
