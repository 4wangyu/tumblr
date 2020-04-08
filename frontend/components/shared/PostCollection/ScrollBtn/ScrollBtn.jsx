import React, { useState, useEffect } from 'react';
import { ScrollBtnContainer, UpArrow } from './ScrollBtn.styled';
import { AnimatePresence, motion } from 'framer-motion';
import { fade } from 'motions';

const ScrollBtn = () => {
  const [revealBtn, setRevealBtn] = useState(false);

  const getViewportHeight = () => Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setRevealBtn(window.scrollY > (getViewportHeight() * 1.5));
    });
  });

  const handleScroll = () => $("html, body").animate({ scrollTop: 0 }, 1000);

  return (
    <AnimatePresence>
      {revealBtn && <ScrollBtnContainer
        onClick={handleScroll}
        as={motion.button}
        variants={fade.variants}
        initial="enterExit"
        animate="center"
        exit="enterExit"
        transition={fade.transitions}
      >
        <UpArrow />
      </ScrollBtnContainer>}
    </AnimatePresence>
  )
}

export default ScrollBtn;