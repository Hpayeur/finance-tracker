import "./globals.css";

import Nav from "@/app/components/Navigation";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <head> will contain the components returned by the nearest parent head.js */}
      <head />
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
