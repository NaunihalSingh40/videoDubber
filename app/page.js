import Dashboard from "@/components/page";
import MyComponent from "@/components/title";
import React from "react";

export default function page() {
  const infoData = [
    {
      title: "Remove vocals from a song",
      description: "This free online application will help remove vocals from a song by creating karaoke. Once you choose a song, artificial intelligence will separate the vocals from the instrumental ones. You will get two tracks - a karaoke version of your song (no vocals) and acapella version (isolated vocals). Despite the complexity and high cost of service, you can use it absolutely free. Processing usually takes about 10 seconds.",
    },
  ]
  return (
    <div>
      <Dashboard
        title="Vocal Remover and Isolation"
        subtitle="Separate voice from music out of a song free with powerful AI algorithms"
        links={[
          { href: "#subMain2", label: "HOW IT WORKS" },
          { href: "#", label: "DONATE" },
        ]}
        imageSrc="/player_en.png"
        infoData={infoData}
      />
    </div>
  );
}
