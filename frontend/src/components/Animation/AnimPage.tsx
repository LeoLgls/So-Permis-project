// AnimatedPage.ts
import React, { ReactNode, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

interface AnimatedPageProps {
  children: ReactNode;
}

const pageVariantsFirst = {
  initial: { opacity: 1 },
  animate: { opacity: 0 },
  exit: { opacity: 0 },
};

const pageTransitionFirst = {
  duration: 1,
};

const pageVariantsSecond = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const pageTransitionSecond = {
  duration: 0.5,

};

const AnimatedPage: React.FC<AnimatedPageProps> = ({ children }) => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // La nouvelle page devient visible après le délai
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 0.1);

    // Nettoie le timeout lors du démontage du composant
    return () => clearTimeout(timeoutId);
  }, [location.pathname]);

  return (
    <>
      <motion.div
        key={location.pathname}
        variants={pageVariantsFirst}
        initial="initial"
        animate={isVisible ? "animate" : "initial"}
        exit="exit"
        transition={pageTransitionFirst}
      />
      {isVisible && (
        <motion.div
          key={`${location.pathname}-second`}
          variants={pageVariantsSecond}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={pageTransitionSecond}
        >
          {children}
        </motion.div>
      )}
    </>
  );
};

export default AnimatedPage;
