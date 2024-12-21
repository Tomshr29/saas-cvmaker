// cvModels.ts
import ResumeBlueWhite from "./models/ResumeBlueWhite";
import ResumeRedOrange from "./models/ResumeRedOrange";

export type CVModelType = "blue-white" | "red-orange";

const cvModels: Record<
  CVModelType,
  React.ComponentType<{ resumeInfo: any }>
> = {
  "blue-white": ResumeBlueWhite,
  "red-orange": ResumeRedOrange,
};

export default cvModels;
