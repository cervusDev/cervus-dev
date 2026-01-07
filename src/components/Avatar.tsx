import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AvatarContent() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        animate={{
          y: hovered ? -14 : 0,
          scale: hovered ? 1.08 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 16,
          mass: 0.8,
        }}
        className="cursor-pointer"
      >
        <Avatar className="size-36 shadow-lg ring-2 ring-primary/30 transition-all">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </motion.div>

      <AnimatePresence>
        {hovered && (
          <motion.div
            key="tooltip"
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            style={{ top: -100 }}
            className="absolute left-1/2 -translate-x-1/2 rounded-lg bg-primary px-0  text-primary-foreground shadow-xl
                       max-w-[220px] break-words whitespace-normal text-center"
          >
            <span>Programar é bom demais né</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
