import { createContext } from "react";
import { ResumeInfo } from "../../types/resume";

interface ResumeContextType {
  resumeInfo: ResumeInfo | null;
  setResumeInfo: React.Dispatch<React.SetStateAction<ResumeInfo | null>>;
}

export const ResumeInfoContext = createContext<ResumeContextType | null>(null);
