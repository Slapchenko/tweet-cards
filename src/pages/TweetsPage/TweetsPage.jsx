import { TweetCardList } from "../../components";
import users from "../../data/users.json";

const TweetsPage = () => {
  return (
    <>
      <p>TweetsPage</p>
      <TweetCardList users={users} />
    </>
  );
};

export default TweetsPage;
