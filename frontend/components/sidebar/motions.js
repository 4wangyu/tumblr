export const blogBar = {
  variants: {
    enter: {
      y: direction > '2rem',
      opacity: 0
    },
    center: {
      y: 0,
      opacity: 1
    },
    exit: {
      zIndex: 0,
      x: '-100%',
      opacity: 0
    }
  },
  transitions: {
    delay: .1,
    duration: .2,
    type: 'tween',
    ease: 'easeInOut'
  }
};