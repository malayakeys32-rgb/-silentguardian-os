'use client';

import React from "react";
import SideMenu from "./SideMenu";
import TopNav from "./TopNav";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="sg-layout">
      <TopNav />
      <div className="sg-layout-body">
        <SideMenu />
        <main className="sg-main-content">
          {children}
        </main>
      </div>
    </div>
  );
}
