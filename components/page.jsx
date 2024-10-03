// components/AudioTool.js

// This is a client-side component, as indicated by "use client"
"use client";

// Import the CSS file for styling and other dependencies
import "./page.css"; // Import external CSS for styling
import { useState } from "react"; // Import useState hook for managing component state
import { FileButton, Button } from "@mantine/core"; // Import Mantine components for file input and button
import Image from "next/image"; // Import Next.js optimized Image component
import Link from "next/link"; // Import Link for navigation between pages

// Dashboard component definition
// Receives props: title, subtitle, links, imageSrc, and infoData to render content dynamically
const Dashboard = ({ title, subtitle, links, imageSrc, infoData }) => {
  const [file, setFile] = useState(null); // State to manage the selected file

  return (
    <div className="main">
      {/* SubMain Container */}
      <div className="subMain">
        {/* Navigation Links */}
        <div className="smainA">
          {links && links.map((link, index) => (
            <Link key={index} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
        
        {/* Title */}
        <div className="smainB">
          <h1>{title}</h1>
        </div>

        {/* Subtitle */}
        <div className="smainC">
          <h3>{subtitle}</h3>
        </div>

        {/* Optional Image Display */}
        <div className="smainD">
          {imageSrc && (
            <Image
              alt="image" // Alt text for accessibility
              height={200}
              width={500}
              src={imageSrc} // Dynamic image source
            />
          )}
        </div>

        {/* File Button for File Upload */}
        <div className="smainE">
          <FileButton onChange={setFile}>
            {(props) => (
              <Button {...props} className="filebtn">
                Browse my files
              </Button>
            )}
          </FileButton>
          {file && <p>Selected file: {file.name}</p>} {/* Display selected file name */}
        </div>
      </div>

      {/* Info Sections */}
      <div id="subMain2">
        {infoData &&
          infoData.map((item, index) => (
            <div className="infoSection" key={index}>
              {/* Title and description for each info section */}
              <h2 className="title">{item.title}</h2>
              <p className="description">{item.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

// Export the Dashboard component for reuse in other parts of the app
export default Dashboard;
