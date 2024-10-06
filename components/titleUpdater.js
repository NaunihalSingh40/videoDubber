"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import { getTitleForPath } from "./setTitle";

export default function TitleUpdater() {
  const pathname = usePathname(); // Get the current path from Next.js

  useEffect(() => {
    const title = getTitleForPath(pathname);
    document.title = title; // Set the document title
  }, [pathname]); // Run effect whenever pathname changes

  return null; // This component doesn't render anything
}
