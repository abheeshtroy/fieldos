import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "fieldOS",
  description: "Tools for understanding and integrating customer environments.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
