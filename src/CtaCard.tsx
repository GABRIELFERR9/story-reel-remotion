import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, Easing } from "remotion";
import { loadFont } from "@remotion/google-fonts/ArchivoBlack";

const { fontFamily } = loadFont("normal", {
  weights: ["400"],
  subsets: ["latin"],
});

export const CtaCard: React.FC<{ text: string }> = ({ text }) => {
  const frame = useCurrentFrame();

  const scale = interpolate(frame, [0, 20], [0.85, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const opacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #046A38 0%, #0a8a4a 45%, #FFCC29 100%)",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(circle, rgba(0,0,0,0) 40%, rgba(0,0,0,0.35) 100%)",
        }}
      />
      <div
        style={{
          fontFamily,
          fontSize: 110,
          color: "white",
          textAlign: "center",
          padding: "0 80px",
          lineHeight: 1.1,
          textShadow: "0 6px 24px rgba(0,0,0,0.35)",
          opacity,
          scale,
        }}
      >
        {text}
      </div>
    </AbsoluteFill>
  );
};
