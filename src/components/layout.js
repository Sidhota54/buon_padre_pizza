import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div>
        {children}
        <Footer />
      </div>
    </div>
  );
}
