export const containerVariants = {
  start: {
    opacity: 0,
    transition: {
      staggerChildren: 0.15
    }
  },
  end: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  },
  leave: {
    opacity: 0
  }
};

export const containerTransition = {
  duration: 0.25,
  ease: "easeInOut"
};

export const barVariants = {
  start: size => ({
    height: size === 'small' ? '0.9rem' : '1.8rem',
    opacity: 0.45
  }),
  end: size => ({
    height: size === 'small' ? '1.5rem' : '3rem',
    opacity: 1
  })
};

export const barTransition = {
  duration: 0.3,
  yoyo: Infinity,
  ease: "easeInOut"
};