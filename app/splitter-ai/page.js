import Dashboard from "@/components/page";
import React from "react";

export default function page() {
  const infoData = [
    {
      title: "AI-Powered Music Separator",
      description: "This app allows to separate music into an individual streams such as vocal, bass, percussion, and lets you rebalance their individual volumes. This is the simplest way to get multitracks from any song. Once you choose a song, artificial intelligence will separate music into stems: vocals, bass, drums, others. Processing usually takes about 1 minute.",
    },
  ]
  return (
    <div>
      <Dashboard
        title="Splitter AI"
        subtitle="Split music into separated parts with AI-Powered algorithms"
        links={[
          { href: "#subMain2", label: "HOW IT WORKS" },
          { href: "#", label: "DONATE" },
        ]}
        imageSrc="/splitter1.png"
        infoData={infoData}
      />
    </div>
  );
}
