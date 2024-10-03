// components/VoiceRecorder.jsx
"use client";

import { useState } from "react";
import { Button, Title, Center } from "@mantine/core";
import "./voiceRecorder.css";

export default function VoiceRecorder() {
  const [isRecording, setIsRecording] = useState(false);

  const toggleRecording = () => {
    setIsRecording((prev) => !prev);
  };

  return (
    <div className="recorder-container">
      <Center>
        <Title order={1} className="recorder-title">Voice Recorder</Title>
      </Center>
      <div className="recorder-timeline">
        {/* You can add a progress bar component or custom timeline UI here */}
        <div className="timeline-progress"></div>
      </div>
      <Center>
        <p>press button to start recording</p>
      </Center>
      <Center>
        <Button
          className="recorder-button"
          onClick={toggleRecording}
          color={isRecording ? "red" : "blue"}
          radius="xl"
          size="xl"
        >
          {isRecording ? "Stop Recording" : "Start Recording"}
        </Button>
      </Center>
    </div>
  );
}
