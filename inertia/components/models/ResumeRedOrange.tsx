import { ResumeInfo } from "../../../types/resume";

interface ResumeRedOrangeProps {
  resumeInfo: ResumeInfo | null;
}

const ResumeRedOrange: React.FC<ResumeRedOrangeProps> = ({ resumeInfo }) => {
  return (
    <div className="z-10 w-[794px] rounded-xl bg-gradient-to-tr from-red-500 to-orange-100 shadow-lg sm:h-[1123px]">
      {/* Header Section: Name and Job Title */}
      <div className="text-center">
        <h1 className="text-6xl font-semibold text-white antialiased">
          {resumeInfo?.firstName} {resumeInfo?.lastName}
        </h1>
        <p className="mt-2 text-3xl text-gray-800">{resumeInfo?.jobTitle}</p>
      </div>

      {/* Contact Information Section */}
      <div className="mt-8 grid grid-cols-2 gap-6">
        <div>
          <h3 className="text-2xl font-semibold text-gray-800">
            Contact Information
          </h3>
          <div className="mt-3 space-y-2 text-lg text-gray-600">
            <p>
              <strong>Email:</strong> {resumeInfo?.email}
            </p>
            <p>
              <strong>Phone:</strong> {resumeInfo?.phone}
            </p>
          </div>
        </div>

        {/* About Me Section */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800">About Me</h3>
          <p className="mt-3 text-lg text-gray-600">{resumeInfo?.about}</p>
        </div>
      </div>

      {/* Footer with a signature or personal message */}
      <div className="mt-10 text-center text-sm text-gray-600">
        <p>Created with 💻 by {resumeInfo?.firstName}</p>
      </div>
    </div>
  );
};

export default ResumeRedOrange;
