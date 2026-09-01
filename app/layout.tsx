import type { Metadata } from "next";
import type { ReactNode } from "react";
import "../style/hologram.css";
import HaloFrame from "../components/HaloFrame";
import { headers } from "next/headers";

export const metadata: Metadata = {
  title: "Silent Guardian"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const path = headers().get("x-pathname") || "/";
  const isDashboard = path.startsWith("/dashboard");

  return (
    <html lang="en">
      <body className="sg-body">
        {isDashboard ? (
          <HaloFrame>{children}</HaloFrame>
        ) : (
          <main>{children}</main>
        )}
      </body>
    </html>
  );
}
