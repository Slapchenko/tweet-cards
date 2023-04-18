import { useDispatch } from "react-redux";
import { toggleFollow } from "../../redux/operations";
import logoIcon from "../../images/logoImg.png";
import bgImg from "../../images/bgImg.png";
import {
  BackgroundImage,
  LogoImage,
  CardDivider,
  UserAvatarWrapper,
  UserAvatarImage,
  TweetCount,
  FollowerCount,
  SubscribeButton,
} from "./TweetCardItem.styled";

const TweetCardItem = ({
  user: { id, user, tweets, followers, avatar, follow },
}) => {
  const dispatch = useDispatch();

  const handleFollowToggle = () => {
    dispatch(toggleFollow(id));
  };

  return (
    <>
      <BackgroundImage src={bgImg} alt="avatar" />
      <LogoImage src={logoIcon} alt="Logo" />
      <CardDivider />
      <UserAvatarWrapper>
        <UserAvatarImage src={avatar} alt={`Avatar of ${user.name}`} />
      </UserAvatarWrapper>
      <TweetCount>{`${tweets.toLocaleString("en-US")} tweets`}</TweetCount>
      <FollowerCount>{`${(followers + 100000).toLocaleString(
        "en-US"
      )} followers`}</FollowerCount>
      <SubscribeButton follow={follow} onClick={handleFollowToggle}>
        {follow ? "Following" : "Follow"}
      </SubscribeButton>
    </>
  );
};

export default TweetCardItem;
