import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "RV Corporate Needs",
  description:
    "Corporate and industrial procurement solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#0b1220]">
        <Navbar />
        {children}
      </body>
    </html>
  );
}