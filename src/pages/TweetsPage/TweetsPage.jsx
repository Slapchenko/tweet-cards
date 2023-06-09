import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchUsers } from "../../redux/operations";
import {
  selectVisibleUsers,
  selectError,
  selectIsLoading,
} from "../../redux/selectors";
import { TweetCardList, Loader, StatusFilter, BackLinkBtn } from "components";
import { LoadMoreButton } from "./TweetsPage.styled";

const TweetsPage = () => {
  const [visible, setVisible] = useState(10);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const users = useSelector(selectVisibleUsers);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 10);
  };

  return (
    <>
      <BackLinkBtn to={backLinkHref}>Go back</BackLinkBtn>
      <StatusFilter />
      <TweetCardList users={users.slice(0, visible)} />
      {isLoading && !error && <Loader />}
      {visible < users.length && (
        <LoadMoreButton onClick={showMoreItems}>Load more</LoadMoreButton>
      )}
    </>
  );
};

export default TweetsPage;
