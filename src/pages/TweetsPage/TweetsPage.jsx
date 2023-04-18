import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/operations";
import {
  selectVisibleUsers,
  selectError,
  selectIsLoading,
} from "../../redux/selectors";
import { TweetCardList, Loader, StatusFilter } from "components";

const TweetsPage = () => {
  const [visible, setVisible] = useState(10)
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const users = useSelector(selectVisibleUsers);

 useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

const showMoreItems = () => {setVisible((prevValue) => prevValue + 10)}

  return (
    <>
      <StatusFilter />
      <TweetCardList users={users.slice(0, visible)} />
      {isLoading && !error && <Loader />}
      {visible < users.length && (
  <button onClick={showMoreItems}>Load more</button>
)}
    </>
  );
};

export default TweetsPage;

// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchUsers } from "../../redux/operations";
// import {
//   selectVisibleUsers,
//   selectError,
//   selectIsLoading,
// } from "../../redux/selectors";
// import { TweetCardList, Loader, StatusFilter } from "components";

// const TweetsPage = () => {
//   const [items, setItems] = useState(10)
//   const [visible, setVisible] = useState(10)
//   const dispatch = useDispatch();
//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);
//   const users = useSelector(selectVisibleUsers);

//   useEffect(() => {
//     dispatch(fetchUsers());
//   }, [dispatch]);

//   return (
//     <>
//       <StatusFilter />
//       <TweetCardList users={users} />
//       {isLoading && !error && <Loader />}
//     </>
//   );
// };

// export default TweetsPage;
