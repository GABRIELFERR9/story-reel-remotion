import "./index.css";
import { Composition } from "remotion";
import { StoryReel, STORY_REEL_DURATION } from "./StoryReel";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="StoryReel"
        component={StoryReel}
        durationInFrames={STORY_REEL_DURATION}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
