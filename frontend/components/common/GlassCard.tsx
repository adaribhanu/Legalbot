import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function Card({
  children,
  className = "",
}: Props) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-sm border border-gray-200 ${className}`}
    >
      {children}
    </div>
  );
}