import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Silent Guardian",
  description: "Protective Intelligence System",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          backgroundColor: "#050509",
          color: "#f5f5f5",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <header
            style={{
              padding: "16px 24px",
              borderBottom: "1px solid #111827",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background:
                "linear-gradient(90deg, #020617 0%, #0b1120 40%, #020617 100%)",
            }}
          >
            <div>
              <div style={{ fontSize: "20px", fontWeight: 700 }}>
                Silent Guardian
              </div>
              <div style={{ fontSize: "12px", opacity: 0.7 }}>
                Protective Intelligence System
              </div>
            </div>
            <nav style={{ display: "flex", gap: "12px", fontSize: "14px" }}>
              <a href="/" style={{ color: "#9ca3af", textDecoration: "none" }}>
                Home
              </a>
              <a
                href="/dashboard"
                style={{ color: "#9ca3af", textDecoration: "none" }}
              >
                Dashboard
              </a>
              <a
                href="/emergency"
                style={{ color: "#9ca3af", textDecoration: "none" }}
              >
                Emergency
              </a>
            </nav>
          </header>
          <main style={{ flex: 1, padding: "24px" }}>{children}</main>
        </div>
      </body>
    </html>
  );
}
