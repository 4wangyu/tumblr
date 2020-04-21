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
  duration: 0.2,
  ease: "easeInOut"
};

export const barVariants = {
  start: {
    height: '1.8rem',
    opacity: 0.45
  },
  end: {
    height: '3rem',
    opacity: 1
  }
};

export const barTransition = {
  duration: 0.3,
  yoyo: Infinity,
  ease: "easeInOut"
};