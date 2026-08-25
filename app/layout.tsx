import "../styles/hologram.css";
import HoloFrame from "../components/HaloFrame";

export const metadata = {
  title: "Silent Guardian",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="sg-body">
        <HoloFrame>{children}</HoloFrame>
      </body>
    </html>
  );
}
