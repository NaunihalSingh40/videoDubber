"use client";
import "@mantine/core/styles.css";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import Head from "next/head";
import { BiMenuAltLeft } from "react-icons/bi";
import Sidebar from "../components/sidebar";
import "../app/globals.css";
import { useState } from "react";
import TitleUpdater from "@/components/titleUpdater";

export default function RootLayout({ children }) {
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar((prevShow) => !prevShow);
  };

  return (
    <>
      {/* Body content */}
      <html lang="en">
        <head>
          <link rel='icon' href="/favicon.png"/>
        </head>
        {/* Use Head to dynamically set page properties */}
        <Head>
          <title>Default App Title</title>
          {/* Other meta tags as needed */}
        </Head>
        <body>
          {/* Mantine color scheme script */}
          <ColorSchemeScript />
          <MantineProvider>
            {/* Title updater component */}

            {/* Button to toggle sidebar visibility */}
            <div className="m-btn">
              <button onClick={toggleSidebar}>
                <BiMenuAltLeft size={35} />
              </button>
              <Sidebar show={showSidebar} toggleSidebar={toggleSidebar} />
            </div>
            <TitleUpdater/>
            {/* Render children */}
            {children}
          </MantineProvider>
        </body>
      </html>
    </>
  );
}
