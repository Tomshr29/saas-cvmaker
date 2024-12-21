import ResumeRedOrange from "~/components/models/ResumeRedOrange";
import ResumeBlueWhite from "~/components/models/ResumeBlueWhite";
import { Link, useForm } from "@inertiajs/react";

function ResumeCardItem({ post }: any) {
  const SelectedResume =
    post?.model === "red-orange" ? ResumeRedOrange : ResumeBlueWhite;

  const { delete: destroy } = useForm();

  function submit(e: React.FormEvent) {
    e.preventDefault();
    destroy(`/resume/${post.id}`);
  }

  return (
    <div>
      <Link href={`/resume/${post.id}`}>
        <div className="relative flex h-60 w-full max-w-xs border bg-gray-100 p-3 shadow-md hover:shadow-lg">
          <div className="flex h-full w-full items-center justify-center overflow-hidden">
            <div className="scale-[0.20] transform">
              <SelectedResume resumeInfo={post} />
            </div>
          </div>
        </div>
      </Link>
      <form onSubmit={submit}>
        <span>{post.title}</span>
        <div className="flex justify-between py-2">
          <span>
            Last :{" "}
            {new Date(post.updatedAt).toLocaleString("fr-FR", {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            })}
          </span>
          <button className="text-red-500" type="submit">
            Delete
          </button>{" "}
        </div>
      </form>
    </div>
  );
}

export default ResumeCardItem;
