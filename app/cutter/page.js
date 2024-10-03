import Dashboard from "@/components/page";
import React from "react";

export default function page() {
  const infoData = [
    {
      title: "How to cut audio",
      description: "This app can be used to trim and/or cut audio tracks, remove an audio fragments. Fade in and fade out your music easily to make the audio harmoniously. It fast and easy to use. You can save the audio file in any format (codec parameters are configured) It works directly in the browser, no needs to install any software, is available for mobile devices.",
    },
    {
      title: "Privacy and Security Guaranteed",
      description: "This is serverless app. Your files does not leave your device",
    },
  ]
  return (
    <div>
      <Dashboard
        title="Audio Cutter"
        subtitle="Free editor to trim and cut any audio file online"
        links={[
          { href: "#subMain2", label: "HOW IT WORKS" },
          { href: "#", label: "JOINER" },
        ]}
        infoData={infoData}
      />
    </div>
  );
}
