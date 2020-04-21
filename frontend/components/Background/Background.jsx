
import React from 'react'
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from 'store/selectors';
import { BackgroundContainer } from './Background.styled';


const Background = ({ children }) => {

  const { pathname } = useLocation();
  const isLoggedIn = useSelector(state => Boolean(selectCurrentUser(state)));

  const sources = ["https://66.media.tumblr.com/eb343f7d720f33c6ea00461e7c858b2b/55d1789ecb7ff744-16/s2048x3072/601295b24402ca73b34572763b1b5e9a285089a7.png"]

  const approvedPaths = ['/login', '/', '/register']

  return (
    <BackgroundContainer>
      {children}
    </BackgroundContainer>
  )

}

export default Background;