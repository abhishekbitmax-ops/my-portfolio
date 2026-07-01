import { motion } from "framer-motion";
import { useMousePosition } from "../hooks/useMousePosition";

export function MouseGlow() {
  const { x, y } = useMousePosition();

  return (
    <motion.div
      className="pointer-events-none fixed z-30 hidden h-72 w-72 rounded-full bg-white/[0.055] blur-3xl md:block"
      animate={{ x: x - 144, y: y - 144 }}
      transition={{ type: "spring", stiffness: 80, damping: 28, mass: 0.35 }}
      aria-hidden="true"
    />
  );
}
