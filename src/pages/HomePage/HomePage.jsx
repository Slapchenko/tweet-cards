import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <p>HomePage</p>
      <Link to="/tweets">
        tweets
      </Link>
    </>
  );
};

export default HomePage;
