import Dashboard from "@/components/page";
import React from "react";

export default function page() {
  const infoData = [
    {
      title: "Free Online Pitch Shifter",
      description: "This app changes the song pitch and/or playback speed using one of the best pitch shifting algorithms. The musical key, scale, and bpm will be automatically detected. You can easily transpose music to a different key and change the tempo by adjusting the pitch shifter key and bpm sliders.",
    },
    {
      title: "Features",
      description: "Analyzes music and finds musical key, scale and bpm, Changes audio pitch, Speed up or slow down music playback speed",
    },
    {
      title: "Privacy and Security Guaranteed",
      description: "This is serverless app. Your files does not leave your device",
    },
  ]
  return (
    <div>
      <Dashboard
        title="Audio Speed and Pitch Changer"
        subtitle="Changes pitch and tempo of the song by adjusting musical key and bpm sliders"
        links={[ 
          { href: "#subMain2", label: "HOW IT WORKS" },
        ]}
        infoData={infoData}
      />
    </div>
  );
}
