import { HiArrowLeft } from "react-icons/hi";
import { StyledLink } from "./BackLinkBtn.styled";

const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <HiArrowLeft size="24" />
      {children}
    </StyledLink>
  );
};

export default BackLink;
