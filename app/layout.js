"use client"
import "@mantine/core/styles.css";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import Head from "next/head";
import { BiMenuAltLeft } from "react-icons/bi";
import Sidebar from "../components/sidebar";
import "../app/globals.css";
import { useState } from "react";

export default function RootLayout({ children }) {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar((prevShow) => !prevShow);
  };
  return (
    <html lang="en">
      <Head>
        <ColorSchemeScript />
      </Head>
      <body>
        <MantineProvider>
        <div className="m-btn">
        <button onClick={toggleSidebar}><BiMenuAltLeft size={35} /></button>
        <Sidebar show={showSidebar} toggleSidebar={toggleSidebar} />
      </div>
      {children}
      </MantineProvider>
      </body>
    </html>
  );
}
