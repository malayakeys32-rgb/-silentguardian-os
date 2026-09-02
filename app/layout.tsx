import type { Metadata } from "next";
import type { ReactNode } from "react";
import "../style/hologram.css";
import MainLayout from "../components/MainLayout";
import { headers } from "next/headers";

export const metadata: Metadata = {
  title: "Silent Guardian"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const path = headers().get("x-pathname") || "/";
  const isPublic = path === "/";

  return (
    <html lang="en">
      <body className="sg-body">
        {isPublic ? (
          <main>{children}</main>
        ) : (
          <MainLayout>{children}</MainLayout>
        )}
      </body>
    </html>
  );
}
