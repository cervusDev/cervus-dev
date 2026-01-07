import { motion, useSpring, useScroll } from "motion/react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  
  return (
    <motion.div
      id="scroll-indicator"
      style={{
        scaleX,
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1,
        right: 0,
        height: 10,
        originX: 0,
        backgroundColor: "#f97316",
      }}
    />
  );
}
