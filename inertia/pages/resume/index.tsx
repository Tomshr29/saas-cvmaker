import { LayoutAccount } from "~/components/layout/layout-account";
import AddResume from "~/components/AddResume";
import ResumeCardItem from "~/components/ResumeCardItem";

export default function Index({ posts }: any) {
  return (
    <LayoutAccount>
      <div className="p-10 md:px-20 lg:px-32">
        <h2 className="scale-y-95 transform text-3xl font-semibold tracking-tight antialiased">
          My Resume
        </h2>
        <p>Start Creating AI resume for your next Job role</p>
        <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">
          <AddResume />
          {posts.map((post: any) => (
            <ResumeCardItem key={post.id} post={post} />
          ))}
        </div>
      </div>
    </LayoutAccount>
  );
}
