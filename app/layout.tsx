import "../styles/hologram.css";
import HoloFrame from "../components/HoloFrame";

export const metadata = {
  title: "Silent Guardian",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="sg-body">
        <HoloFrame>{children}</HoloFrame>
      </body>
    </html>
  );
}


