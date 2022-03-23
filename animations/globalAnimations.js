export const pageAnimation = {
  hidden: { opacity: 0, y: -100 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, when: 'beforeChildren', staggerChildren: 0.2 } },
  exit: { opacity: 0, y: 100, transition: { duration: 0.5 } },
};

export const textAnimation = {
  hidden: { y: -150 },
  show: { y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export const headerAnimation = {
  hidden: { y: '50vh' },
  show: { y: 0, transition: { duration: 0.4, ease: 'easeOut', when: 'beforeChildren' }  }
};
