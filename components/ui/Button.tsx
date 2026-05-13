"use client";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
  href?: string;
  onClick?: () => void;
  variant?: "filled" | "outline" | "outline-white";
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
};

export default function Button({
  href,
  onClick,
  variant = "filled",
  children,
  className = "",
  type = "button",
  disabled,
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 px-7 py-3 text-sm font-semibold tracking-widest uppercase transition-all duration-300 rounded-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8860B] focus-visible:ring-offset-2";

  const styles = {
    filled:
      "bg-[#D4A017] text-[#1C1209] hover:bg-[#B8860B] shadow-md hover:shadow-[0_4px_20px_rgba(184,134,11,0.4)]",
    outline:
      "border-2 border-[#B8860B] text-[#B8860B] hover:bg-[#B8860B] hover:text-[#1C1209]",
    "outline-white":
      "border-2 border-white text-white hover:bg-white hover:text-[#1C1209]",
  };

  const classes = `${base} ${styles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileTap={{ scale: 0.97 }}
      className={classes}
    >
      {children}
    </motion.button>
  );
}
