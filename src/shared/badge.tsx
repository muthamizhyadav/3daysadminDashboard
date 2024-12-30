import React from "react";

interface BadgeInterface {
  width: number;
  border: boolean;
  backgroundColor: string;
  borderRadius: string;
  textColor: string;
  text: string;
  height: number;
}

const Badge: React.FC<BadgeInterface> = ({
  backgroundColor = "#d1fae5",
  width = 100,
  border = false,
  borderRadius = "5px",
  textColor = "#065f46",
  text,
  height = 40,
}) => {
  return (
    <button
      className={`bg-[${backgroundColor}] text-[${textColor}] ${
        border ? "border border-gray-300" : "capitalize"
      } ${borderRadius} w-[${width}px] h-[${height}px] py-2 px-4 font-semibold`}
      style={{ borderRadius, backgroundColor, color: textColor }}
    >
      {text}
    </button>
  );
};

export default Badge;
