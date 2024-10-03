import Dashboard from "@/components/page";
import React from "react";

export default function page() {

  const infoData = [
    {
      title: "How to find Key & BPM",
      description: "This app analyzes music and estimates pitch and tempo [e.g. Ab major, 120 bpm]. You can upload multiple files at once. Processing time takes a few seconds.",
    },
    {
      title: "Change Key & BPM",
      description: "Using Pitch Shifter tool you can transpose song to a different key and tempo.",
    },
    {
      title: "Tap tempo",
      description: "Tap tempo tool allows you to calculate tempo beats per minute by tapping space key to the rhythm or beat.",
    },
    {
      title: "Privacy and Security Guaranteed",
      description: "This is a serverless app. Your files do not leave your device.",
    },
  ];
  
  return (

    <div>
      <Dashboard
        title="Song Key and BPM Finder"
        subtitle="Analyzes music and finds Key, Scale and BPM for any song"
        links={[
          { href: "#subMain2", label: "HOW IT WORKS" },
          { href: "#", label: "TAP TEMPO" },
        ]}
        infoData={infoData}
      />
    </div>
  );
}
