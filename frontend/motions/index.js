export const slider = {
  variants: {
    enter: direction => ({
      zIndex: 0,
      x: direction > 0 ? '50vw' : '-50vw',
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: direction => ({
      zIndex: 0,
      x: direction < 0 ? '50vw' : '-50vw',
      opacity: 0
    })
  },
  transitions: {
    delay: .1,
    duration: .2,
    type: 'tween',
    ease: 'easeInOut'
  }
};

export const descendAscend = {
  variants: {
    enterExit: {
      y: '-3rem',
      height: '0%',
      lineHeight: '0',
      padding: '0rem',
      opacity: 0
    },
    center: {
      y: '0rem',
      height: '100%',
      lineHeight: '1.15',
      padding: '1.5rem',
      opacity: 1,
    }
  },
  transitions: {
    delay: .1,
    duration: .5,
    type: 'tween',
    ease: 'easeInOut'
  }
};

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
    duration: .2,
    type: 'tween',
    ease: 'easeInOut'
  }
};