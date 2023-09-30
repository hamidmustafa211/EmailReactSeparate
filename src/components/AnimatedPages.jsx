import { motion } from "framer-motion";
const animations = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  //
  // initial: { x: -100, opacity: 0 },
  // animate: { x: 0, opacity: 1 },
  // exit: { x: -100, opacity: 0 },
};

const AnimatedPages = ({ children }) => {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPages;
