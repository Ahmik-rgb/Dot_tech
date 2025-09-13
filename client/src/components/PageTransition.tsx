import { motion } from "framer-motion";
import { useEffect, ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -20,
  }
};

const pageTransition = {
  type: "tween",
  ease: "easeOut",
  duration: 0.5
};

const PageTransition = ({ children, className = "" }: PageTransitionProps) => {
  useEffect(() => {
    // Scroll to top on page transition
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className={`min-h-screen ${className}`}
      data-testid="page-transition-wrapper"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;