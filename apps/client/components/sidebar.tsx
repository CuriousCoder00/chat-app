import React from "react";

type SidebarProps = {
  children: React.ReactNode;
};

export const Sidebar = ({ children }: SidebarProps) => {
  return <div className="flex items-start justify-start max-sm:hidden">{children}</div>;
};

export const SidebarItems = ({ children }: SidebarProps) => {
  return <div className="flex flex-col items-start px-3">{children}</div>;
};
