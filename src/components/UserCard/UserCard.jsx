const UserCard = ({users}) => {
  return (
    <>
      <p>UserCard</p>
      {users.map(({ id, user, tweets, followers, avatar }) => (
        <ul key={id}>
          <li>
              <p>{user}</p>
              <p>{tweets}</p>
              <p>{followers}</p>
              <p>{avatar}</p>
          </li>
        </ul>
      ))}
    </>
  );
};

export default UserCard;
