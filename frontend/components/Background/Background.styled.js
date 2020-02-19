import styled from 'styled-components';

export const Bg = styled.div`
  width: 100vw;
  height: 100vh;
  ${P => {
    if (P.image) {
      return `background-image: url(${P.src})`
    } else {
      return `background-color: ${P.theme.colors.midnightBlue}`
    }
  }};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-blend-mode: darken;
  padding: 0;
`;