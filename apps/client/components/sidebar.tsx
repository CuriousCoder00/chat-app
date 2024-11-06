import React from "react";

type SidebarProps = {
  children: React.ReactNode;
};

export const Sidebar = ({ children }: SidebarProps) => {
  return <div className="flex items-start justify-start w-40 max-sm:hidden">{children}</div>;
};

export const SidebarItems = ({ children }: SidebarProps) => {
  return <div className="flex flex-col items-start w-40 px-3">{children}</div>;
};
