import { NavLink } from "react-router-dom";
import styled from "styled-components";
export const MainContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  font-weight: bold;
  font-family: inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
    "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #252525;
  margin: 20px;
  a:link,
  a:visited {
    text-decoration: none;
    color: #252525;
  }
  a:hover {
    text-decoration: none;
  }
  a:active {
    text-decoration: none;
  }
`;
// styled.NavL
