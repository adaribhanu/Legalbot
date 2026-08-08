"use client";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Button({
  children,
  onClick,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`rounded-xl px-5 py-3 font-semibold transition-all duration-200 ${
        variant === "primary"
          ? "bg-blue-600 text-white hover:bg-blue-700"
          : "bg-gray-100 text-slate-700 hover:bg-gray-200"
      } ${className}`}
    >
      {children}
    </button>
  );
}