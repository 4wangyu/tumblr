export const fade = {
  variants: {
    enterExit: {
      opacity: 0
    },
    center: {
      opacity: 1,
    }
  },
  transitions: {
    duration: .15,
    type: 'tween',
    ease: 'easeInOut'
  }
};