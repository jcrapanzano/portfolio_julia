import React from "react";
import { icons } from "../assets/icons";

function Icon({ name, size = "w-12 h-12", color = "text-black", animation = "", className = "" }) {
  const SvgIcon = icons[name];

  if (!SvgIcon) return null; // Si l'icône n'existe pas

  return <SvgIcon className={`${size} ${color} ${animation} ${className}`} fill="currentColor" />;
}

export default Icon;
