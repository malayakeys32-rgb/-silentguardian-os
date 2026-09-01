import "../style/hologram.css";
import HoloFrame from "../components/HoloFrame";
import { headers } from "next/headers";

export const metadata = {
  title: "Silent Guardian",
};

export default function RootLayout({ children }) {
  const path = headers().get("x-pathname") || "/";

  const isDashboard = path.startsWith("/dashboard");

  return (
    <html lang="en">
      <body className="sg-body">
        {isDashboard ? (
          <HoloFrame>{children}</HoloFrame>
        ) : (
          <main>{children}</main>
        )}
      </body>
    </html>
  );
}

