import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/operations";
import {
  selectVisibleUsers,
  selectError,
  selectIsLoading,
} from "../../redux/selectors";
import { TweetCardList, Loader, StatusFilter } from "components";

const TweetsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const users = useSelector(selectVisibleUsers);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <StatusFilter />
      <TweetCardList users={users} />
      {isLoading && !error && <Loader />}
    </>
  );
};

export default TweetsPage;
