import type { Metadata } from "next";
import type { ReactNode } from "react";
import SideMenu from "../components/SideMenu";
import "../globals.css";

export const metadata: Metadata = {
  title: "Silent Guardian",
  description: "Protective Intelligence System",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="sg-body">
        <div className="sg-shell">
          <SideMenu />
          <main className="sg-main">{children}</main>
        </div>
      </body>
    </html>
  );
}