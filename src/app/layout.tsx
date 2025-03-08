import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "EZ BRAND BUILDERS",
  description: "Pakistan Top provided services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body
          className={` antialiased`}
        >
          {children}
        </body>
      </html>
  );
}
