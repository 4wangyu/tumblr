
import React from 'react'
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
  padding: 10px 0;
`;


const Background = ({ isLoggedIn, children, location: { pathname } }) => {
  const sources = ["https://66.media.tumblr.com/eb343f7d720f33c6ea00461e7c858b2b/55d1789ecb7ff744-16/s2048x3072/601295b24402ca73b34572763b1b5e9a285089a7.png"]

  const approvedPaths = ['/login', '/', '/register']

  return (
    <Bg image={approvedPaths.includes(pathname)} src={sources[0]}>
      {children}
    </Bg>
  )

}

export default Background;