import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "My Portfolio",
  description: "Personal Portfolio built with Next.js",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className="bg-gray-50 text-gray-900 scroll-smooth">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
