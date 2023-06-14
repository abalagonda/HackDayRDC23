import { MainContainer, StyledNavLink } from "./styles";
const Header = () => {
  return (
    <MainContainer>
      <StyledNavLink to="/remote">Remote</StyledNavLink>&nbsp;
      <StyledNavLink to="/online">Online</StyledNavLink>&nbsp;
      <StyledNavLink to="/collaborative">Collaborative</StyledNavLink>
    </MainContainer>
  );
};
export default Header;
