import TweetCardItem from "../TweetCardItem/TweetCardItem";
import { TweetList, TweetCard } from "./TweetCardList.styled";

const TweetCardList = ({ users }) => {
  return (
    <>
      <TweetList>
        {users.map((user) => (
          <TweetCard key={user.id}>
            <TweetCardItem user={user} />
          </TweetCard>
        ))}
      </TweetList>
    </>
  );
};

export default TweetCardList;
