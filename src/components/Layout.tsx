import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => (
  <div className="flex flex-col h-screen">
    <div className="relative flex-1 overflow-y-auto z-10">
      <div className="flex flex-col mx-auto min-h-full px-6 py-16 max-w-7xl">
        {children}
      </div>
    </div>
  </div>
);
