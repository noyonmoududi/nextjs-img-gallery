import Navbar from "./components/Navbar";
import "./globals.css";
import type { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "NEXT Js Image Gallery ",
  description: "Parctic Tutorial For Next Js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="max-w-6xl mx-auto">{children}</main>
      </body>
    </html>
  );
}

//(Net Ninja)Build an Image Gallery with Next.js 13 #8  --Done
