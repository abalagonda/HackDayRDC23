import { styled } from "styled-components";

export const MainContainer = styled.div`
  height: 100vh; /* Sets the height of the parent container to the full viewport height */
  display: flex;
  align-items: center; /* Vertically aligns the content */
  justify-content: center;
`;

export const SmallContainer = styled.div`
  width: 80%;
  height: 100%;
  justify-content: center;
  background-color: #8ebf42;
  display: flex;
  align-items: center;
`;

// export const MC = styled.div`
// `;
// html, body {
//   height: 100%;
//   margin: 0;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

// .container {
//   text-align: center;
// }

.centered {
  display: inline-block;
}

