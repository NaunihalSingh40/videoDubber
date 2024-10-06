"use client";

import Link from "next/link";
import "./Sidebar.css";
import { MdContactSupport } from "react-icons/md";
import { BiMenuAltLeft } from "react-icons/bi";
import Image from "next/image";
import { GiUsaFlag } from "react-icons/gi";
import { useState } from "react";
import Language from "./lang";

const Sidebar = ({ show, toggleSidebar }) => {
  const [showLanguages, setShowLanguages] = useState(false);

  // Function to toggle the language selection visibility
  const toggleLanguages = () => {
    setShowLanguages(!showLanguages);
  };

  return (
    <>
      <div className={`sidebar ${show ? "show" : ""}`}>
        <div>
          <button onClick={toggleSidebar}>
            <BiMenuAltLeft size={35} />
          </button>

          <ul>
            <li>
              <Link href="/">
                <Image
                  src="/remover.png"
                  alt="Remover image"
                  width={38}
                  height={30}
                />
              </Link>
              <h2>Remover</h2>
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

        <div>
          <ul>
            <li>
              <MdContactSupport />
              <h2>Support</h2>
            </li>
            <li>
              <button onClick={toggleLanguages} className="flag-button">
                <GiUsaFlag size={30} />
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Render the Language component as a full-page modal */}
      <Language show={showLanguages} onClose={toggleLanguages} />
    </>
  );
};

export default Sidebar;
