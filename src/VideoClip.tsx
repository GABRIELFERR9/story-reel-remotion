import React from "react";
import { Video } from "@remotion/media";
import { interpolate, staticFile, useCurrentFrame, Easing } from "remotion";
import { ColorGrade } from "./ColorGrade";

const AUDIO_FADE_FRAMES = 4;

export const VideoClip: React.FC<{
  src: string;
  durationInFrames: number;
  zoom?: boolean;
}> = ({ src, durationInFrames, zoom = false }) => {
  const frame = useCurrentFrame();

  const scale = zoom
    ? interpolate(frame, [0, durationInFrames], [1, 1.08], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: Easing.bezier(0.16, 1, 0.3, 1),
      })
    : 1.02;

  const volume = interpolate(
    frame,
    [0, AUDIO_FADE_FRAMES, durationInFrames - AUDIO_FADE_FRAMES, durationInFrames],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  return (
    <ColorGrade>
      <Video
        src={staticFile(src)}
        volume={volume}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          scale,
        }}
      />
    </ColorGrade>
  );
};
