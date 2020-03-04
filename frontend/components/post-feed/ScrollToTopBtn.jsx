import React, { useState, useEffect } from 'react';
import { ScrollToTopIcon } from './PostFeed.styled';

const ScrollToTopBtn = () => {
  const [revealBtn, setRevealBtn] = useState(false);

  const getViewportHeight = () => Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setRevealBtn(window.scrollY > (getViewportHeight() * 1.5));
    });
  });

  const handleScroll = () => $("html, body").animate({ scrollTop: 0 }, 1000);

  return revealBtn && <ScrollToTopIcon onClick={handleScroll} />
}

export default ScrollToTopBtn;