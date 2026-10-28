import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { VideoClip } from "./VideoClip";
import { CtaCard } from "./CtaCard";

// Timeline (fps=30):
// A Gancho              0.0s -> 3.5s   (105f) mic, zoom in            <- clip_hook.mp4
// B Cumprimento efusivo  3.5s -> 5.7s   (66f)  fonte 29.5-31.7s        <- clip_greet.mp4
// C Aperto de mao firme  5.7s -> 7.5s   (54f)  fonte 31.7-33.5s        <- clip_handshake.mp4
// D Atencao / sorrisos   7.5s -> 10.2s  (81f)  fonte 36.0-38.7s        <- clip_applause.mp4
// E Volta ao orador     10.2s -> 13.2s  (90f)  fonte 12.0-15.0s        <- clip_climax.mp4
// F CTA                 13.2s -> 16.2s  (90f)

const HOOK = 105;
const GREET = 66;
const HANDSHAKE = 54;
const APPLAUSE = 81;
const CLIMAX = 90;
const CTA = 90;

export const StoryReel: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "black" }}>
      <Sequence from={0} durationInFrames={HOOK} layout="none">
        <VideoClip src="clip_hook.mp4" durationInFrames={HOOK} zoom />
      </Sequence>
      <Sequence from={HOOK} durationInFrames={GREET} layout="none">
        <VideoClip src="clip_greet.mp4" durationInFrames={GREET} />
      </Sequence>
      <Sequence from={HOOK + GREET} durationInFrames={HANDSHAKE} layout="none">
        <VideoClip src="clip_handshake.mp4" durationInFrames={HANDSHAKE} />
      </Sequence>
      <Sequence
        from={HOOK + GREET + HANDSHAKE}
        durationInFrames={APPLAUSE}
        layout="none"
      >
        <VideoClip src="clip_applause.mp4" durationInFrames={APPLAUSE} />
      </Sequence>
      <Sequence
        from={HOOK + GREET + HANDSHAKE + APPLAUSE}
        durationInFrames={CLIMAX}
        layout="none"
      >
        <VideoClip src="clip_climax.mp4" durationInFrames={CLIMAX} />
      </Sequence>
      <Sequence
        from={HOOK + GREET + HANDSHAKE + APPLAUSE + CLIMAX}
        durationInFrames={CTA}
        layout="none"
      >
        <CtaCard text={"JUNTE-SE A NÓS"} />
      </Sequence>
    </AbsoluteFill>
  );
};

export const STORY_REEL_DURATION =
  HOOK + GREET + HANDSHAKE + APPLAUSE + CLIMAX + CTA;
