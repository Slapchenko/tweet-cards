import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/operations";
import {
  selectUsers,
  selectError,
  selectIsLoading,
} from "../../redux/selectors";
import { TweetCardList } from "../../components";
import { Loader } from "../../components";

const TweetsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const users = useSelector(selectUsers);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <p>TweetsPage</p>
      <TweetCardList users={users} />
      {isLoading && !error && <Loader />}
    </>
  );
};

export default TweetsPage;
