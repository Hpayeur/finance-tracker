"use client";
import "./globals.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "@/app/components/Navigation";
import FinanceContextProvider from "@/app/lib/store/finance-context";
import AuthContextProvider from "@/app/lib/store/auth-context";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <head> will contain the components returned by the nearest parent head.js */}
      <head />
      <body>
        <AuthContextProvider>
          <FinanceContextProvider>
            <ToastContainer />
            <Nav />
            {children}
          </FinanceContextProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
