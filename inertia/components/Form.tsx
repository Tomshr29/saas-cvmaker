import { useForm, usePage } from "@inertiajs/react";
import PersonalDetails from "./forms/PersonalDetails";
import { ResumeInfo } from "../../types/resume";
import PersonalProfile from "./forms/PersonalProfile";
import { ResumeInfoContext } from "~/context/ResumeInfoContext";
import { useContext } from "react";
import SelectTemplate from "./forms/SelectTemplate";
import { Button } from "./button";

interface FormProps {
  resume: ResumeInfo | null;
}

function FormSection({ resume }: FormProps) {
  const { user } = usePage<any>().props;
  const { setResumeInfo } = useContext(ResumeInfoContext) as any;

  const handleTemplateChange = (template: "blue-white" | "red-orange") => {
    setData("model", template); // Mettez à jour model dans `data`

    // Mettre à jour également le modèle dans `resumeInfo` via le contexte
    setResumeInfo((prev: ResumeInfo | null) => ({
      ...prev,
      model: template,
    }));
  };

  type FormData = {
    jobTitle: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    about: string;
    model: "blue-white" | "red-orange";
  };

  const { data, setData, post } = useForm<FormData>({
    jobTitle: resume?.jobTitle || "",
    firstName: resume?.firstName || "",
    lastName: resume?.lastName || "",
    email: resume?.email || user.email || "",
    phone: resume?.phone || "",
    about: resume?.about || "",
    model: resume?.model || "blue-white",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setData(name as keyof FormData, value);

    // Mise à jour du contexte `resumeInfo` avec les nouvelles valeurs
    setResumeInfo((prev: ResumeInfo | null) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    post(`/resume/${resume?.id}`, {
      preserveScroll: true,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        <SelectTemplate
          data={data}
          handleTemplateChange={handleTemplateChange}
        />
        <PersonalDetails data={data} handleInputChange={handleInputChange} />
        <PersonalProfile data={data} handleInputChange={handleInputChange} />
      </div>

      <div className="mt-6 flex items-center justify-end space-x-2">
        <Button>Back</Button>
        <Button variant="secondary" type="submit">
          Save
        </Button>
      </div>
    </form>
  );
}

export default FormSection;
