import { useEffect, useState } from "react";
import Form from "~/components/Form";
import { ResumeInfoContext } from "~/context/ResumeInfoContext";
import { ResumeInfo } from "../../../types/resume";
import { Link } from "@inertiajs/react";
import cvModels from "~/components/cvModel";
import { CVModelType } from "~/components/cvModel";

interface ResumeProps {
  post?: ResumeInfo | null;
}

export default function Create({ post }: ResumeProps) {
  const [resumeInfo, setResumeInfo] = useState<ResumeInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (post) {
      setResumeInfo(post);
      setLoading(false);
    }
  }, [post]);

  if (loading) {
    return <div>Chargement...</div>;
  }

  const SelectedResume =
    resumeInfo?.model && cvModels[resumeInfo.model as CVModelType];

  if (!SelectedResume) {
    return <div>Modèle de CV introuvable</div>;
  }

  return (
    <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
      <div className="flex h-screen flex-col">
        <header className="fixed top-0 z-10 flex h-16 w-full items-center bg-white shadow-md">
          <div className="container mx-auto px-6">
            <h1 className="text-2xl font-bold">Créer un CV</h1>
          </div>
          <Link href="/resumes" className="absolute right-6">
            Retour
          </Link>
        </header>

        <div className="flex flex-1 flex-row pt-16 sm:flex-col">
          <div className="w-full p-6 sm:w-1/2">
            <Form resume={resumeInfo} />
          </div>

          <div className="right-0 top-16 flex w-full justify-center bg-blue-100 p-6 sm:fixed sm:h-[calc(100%-4rem)] sm:w-1/2">
            <span className="fixed bottom-10 text-2xl font-bold">
              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Download
                </button>
              </div>
            </span>
            {/* CVPreview */}
            <div className="origin-top scale-[0.50] md:scale-[0.60]">
              <SelectedResume resumeInfo={resumeInfo} />
            </div>
          </div>
        </div>
      </div>
    </ResumeInfoContext.Provider>
  );
}
