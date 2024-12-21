import { ResumeInfo } from "../../../types/resume";

interface ResumeBlueWhiteProps {
  resumeInfo: ResumeInfo | null;
}

const ResumeBlueWhite: React.FC<ResumeBlueWhiteProps> = ({ resumeInfo }) => {
  return (
    <div className="z-10 h-[1123px] w-[794px] bg-gradient-to-tr from-blue-500 to-white p-10">
      <h1 className="text-6xl font-semibold antialiased">
        {resumeInfo?.firstName} {resumeInfo?.lastName}
      </h1>
      <p className="mt-3 text-3xl text-gray-600">{resumeInfo?.jobTitle}</p>
      <div className="mt-5">
        <p className="text-xl text-gray-600">{resumeInfo?.address}</p>
        <p className="text-xl text-gray-600">{resumeInfo?.email}</p>
        <p className="text-xl text-gray-600">{resumeInfo?.phone}</p>
        <p className="text-xl text-gray-600">{resumeInfo?.drivingLicense}</p>
        <p className="text-xl text-gray-600">{resumeInfo?.gender}</p>
      </div>
      <p>{resumeInfo?.about}</p>
    </div>
  );
};

export default ResumeBlueWhite;
