"use client";
import "./globals.css";

import FinanceContextProvider from "@/app/lib/store/finance-context";

import Nav from "@/app/components/Navigation";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <head> will contain the components returned by the nearest parent head.js */}
      <head />
      <body>
        <FinanceContextProvider>
          <Nav />
          {children}
        </FinanceContextProvider>
      </body>
    </html>
  );
}
