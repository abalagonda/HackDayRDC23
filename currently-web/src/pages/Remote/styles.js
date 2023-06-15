import { styled } from "styled-components";

export const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  background-color: white;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: #252525;
  font-family: inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
    "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
`;

export const SmallContainer = styled.div`
  width: 80%;
  height: 100%;
  justify-content: center;
  background-color: #8ebf42;
  display: flex;
  align-items: center;
`;

export const MC = styled.html`
  height: 100%;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SC = styled.body`
  height: 100%;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.div`
  text-align: center;
  display: inline-block;
`;
