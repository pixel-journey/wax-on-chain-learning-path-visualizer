import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ready only after the required lesson",
  description: "intro is done, so schema is ready. blend still requires schema, so it stays locked. No lesson is stored.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
