import React from "react";
import { AbsoluteFill } from "remotion";

export const ColorGrade: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <AbsoluteFill>
      <AbsoluteFill
        style={{
          filter: "contrast(1.16) saturate(1.28) brightness(0.96) sepia(0.06)",
        }}
      >
        {children}
      </AbsoluteFill>
      {/* Warm tint to make skin tones feel warmer/more inviting */}
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(ellipse at center, #ff9a3c00 50%, #ff9a3c22 100%)",
          mixBlendMode: "soft-light",
        }}
      />
      {/* Vignette: darkens edges/ceiling lamps, focuses attention on center */}
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0) 60%, rgba(0,0,0,0.5) 100%)",
          mixBlendMode: "multiply",
        }}
      />
    </AbsoluteFill>
  );
};
