import { FancyHeader, Nav, Link } from "./Header.styled";

const Header = () => {
  return (
    <FancyHeader>
      <Nav>
        <Link to="/" end>
          Home
        </Link>
        <Link to="/tweets">Tweets</Link>
      </Nav>
    </FancyHeader>
  );
};

export default Header;
