import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type HTMLMotionProps,
} from "framer-motion";
import type { ReactNode } from "react";

interface MagneticButtonProps extends Omit<HTMLMotionProps<"a">, "children"> {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export function MagneticButton({
  children,
  className = "",
  variant = "primary",
  ...props
}: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 18 });
  const springY = useSpring(y, { stiffness: 180, damping: 18 });
  const glowX = useTransform(springX, (value) => `${50 + value / 3}%`);
  const glowY = useTransform(springY, (value) => `${50 + value / 3}%`);

  return (
    <motion.a
      {...props}
      className={`relative inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${
        variant === "primary"
          ? "bg-white text-black hover:bg-zinc-200"
          : "border border-white/15 bg-white/[0.04] text-white hover:bg-white/[0.08]"
      } ${className}`}
      style={{ x: springX, y: springY }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - rect.left - rect.width / 2) * 0.18);
        y.set((event.clientY - rect.top - rect.height / 2) * 0.18);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      whileTap={{ scale: 0.97 }}
    >
      <motion.span
        className="pointer-events-none absolute h-24 w-24 rounded-full bg-white/25 blur-2xl"
        style={{ left: glowX, top: glowY, translateX: "-50%", translateY: "-50%" }}
      />
      <span className="relative inline-flex items-center gap-2">{children}</span>
    </motion.a>
  );
}
