export const motionVariantForStaggerParent = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.05,
      staggerChildren: 0.55,
    },
  },
};

export const motionVariantForStaggerChild = {
  hidden: {
    opacity: 0,
    y: "-10px",
    // color: "#0055FF",
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
  },
  visible: {
    opacity: 1,
    y: 0,
    // color: "rgba(255, 255, 255, 0.08)",
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
  },
};
export const parentVariantWithStagger = {
  hidden: { opacity: 1, y: "-10px" },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.025,
      staggerChildren: 0.25,
    },
  },
};

export const childVariantWithStagger = {
  hidden: {
    opacity: 0,
    y: "-10px",
    // color: "#0055FF",
    transition: { type: "spring", duration: 0.85 },
  },
  visible: {
    opacity: 1,
    y: 0,
    // color: "rgba(255, 255, 255, 0.08)",
    transition: { type: "spring", duration: 0.75 },
  },
};

export const motionValuesForModalFlip = {
  hidden: {
    transform: "scale(0) rotateX(-360deg)",
    opacity: 0,
    transition: {
      delay: 0.3,
    },
  },
  visible: {
    transform: " scale(1) rotateX(0deg)",
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    transform: "scale(0) rotateX(360deg)",
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const motionValuesForModalNewspaper = {
  hidden: {
    transform: "scale(0) rotate(720deg)",
    opacity: 0,
    transition: {
      delay: 0.3,
    },
  },
  visible: {
    transform: " scale(1) rotate(0deg)",
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    transform: "scale(0) rotate(-720deg)",
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

//Bad Suspension -Make it look like something is broken, great for error messages.
export const motionValuesForModalBadSuspension = {
  hidden: {
    y: "-100vh",
    opacity: 0,
    transform: "scale(0) rotateX(-360deg)",
  },
  visible: {
    y: "-25vh",
    opacity: 1,
    transition: {
      duration: 0.2,
      type: "spring",
      damping: 15,
      stiffness: 500,
    },
  },
  exit: {
    y: "-100vh",
    opacity: 0,
  },
};

export const motionValuesForModalDropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.3,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

export const motionValuesForModalFadeIn = {
  hidden: {
    // y: "-100vh",
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    // y: "0",
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 0.2,
      ease: [0, 0.71, 0.2, 1.01],
      // duration: 0.35,
      // type: "tween",
      // damping: 25,
      // stiffness: 500,
    },
  },
  exit: {
    y: "-100vh",
    opacity: 0,
    transition: {
      duration: 0.1,
      type: "spring",
      // mass: 2, // mass of the object
      damping: 25, // strength of opposing force : 10
      stiffness: 500, // higher values create more sudden movement
    },
  },
};
