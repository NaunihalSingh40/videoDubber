// Import necessary dependencies and components
"use client";

import Link from "next/link"; // Import Link for navigation between routes
import "./Sidebar.css"; // Import external CSS for styling
import { MdContactSupport } from "react-icons/md"; // Import support icon from react-icons
import { BiMenuAltLeft } from "react-icons/bi"; // Import menu icon from react-icons
import Image from "next/image"; // Import Next.js optimized Image component
import { GiUsaFlag } from "react-icons/gi"; // Import USA flag icon from react-icons

// Sidebar component definition
// Receives `show` (whether to show the sidebar) and `toggleSidebar` (function to toggle the sidebar visibility)
const Sidebar = ({ show, toggleSidebar }) => {
  return (
    <div className={`sidebar ${show ? "show" : ""}`}> {/* Conditionally add the `show` class to open the sidebar */}
      <div>
        {/* Menu button to toggle sidebar */}
        <button onClick={toggleSidebar}>
          <BiMenuAltLeft size={35} /> {/* Menu icon */}
        </button>

        {/* Sidebar list of navigation items */}
        <ul>
          {/* Each item contains a link and an image/icon with descriptive text */}
          <li>
            <Link href="/">
              <Image
                src="/remover.png"
                alt="Remover image"
                width={38}
                height={30}
              />
            </Link>
            <h2>Remover</h2> {/* Label for the sidebar item */}
          </li>
          <li>
            <Link href="/splitter-ai">
              <Image
                src="/splitter.png"
                alt="Splitter image"
                width={38}
                height={30}
              />
            </Link>
            <h2>Splitter</h2>
          </li>
          <li>
            <Link href="/pitch">
              <Image
                src="/pitcher.png"
                alt="Pitcher image"
                width={38}
                height={30}
              />
            </Link>
            <h2>Pitcher</h2>
          </li>
          <li>
            <Link href="/key-bpm-finder">
              <Image
                src="/bpm.png"
                alt="BPM Finder"
                width={38}
                height={30}
              />
            </Link>
            <h2>Key BPM Finder</h2>
          </li>
          <li>
            <Link href="/cutter">
              <Image
                src="/cutter.png"
                alt="Cutter image"
                width={38}
                height={30}
              />
            </Link>
            <h2>Cutter</h2>
          </li>
          <li>
            <Link href="/joiner">
              <Image
                src="/joiner.png"
                alt="Joiner image"
                width={38}
                height={30}
              />
            </Link>
            <h2>Joiner</h2>
          </li>
          <li>
            <Link href="/voice-recorder">
              <Image
                src="/recorder.png"
                alt="Recorder image"
                width={38}
                height={30}
              />
            </Link>
            <h2>Recorder</h2>
          </li>
          <li>
            <Link href="/karaoke">
              <Image
                src="/karyoke.png"
                alt="Karaoke image"
                width={38}
                height={30}
              />
            </Link>
            <h2>Karaoke</h2>
          </li>
        </ul>
      </div>
      
      {/* Bottom section of the sidebar for additional items */}
      <div>
        <ul>
          {/* Support section */}
          <li>
            <MdContactSupport /> {/* Support icon */}
            <h2>Support</h2>
          </li>
          {/* Flag icon for language selection */}
          <li>
            <GiUsaFlag />
          </li>
        </ul>
      </div>
    </div>
  );
};

// Export the Sidebar component for reuse in other parts of the app
export default Sidebar;
