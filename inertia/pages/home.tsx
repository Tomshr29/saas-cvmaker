import { Link, usePage } from "@inertiajs/react";
import { Button } from "~/components/button";

export default function Home() {
  const { user } = usePage<any>().props;

  return (
    <main className="mx-auto mt-20 max-w-7xl space-y-10 px-10">
      <div className="flex scale-y-95 flex-col space-y-10 text-6xl antialiased">
        <span className="font-semibold tracking-tighter">
          Build your CV as simply as possible with our builder app
        </span>
        <span className="text-xl font-medium tracking-tight text-neutral-700">
          Create a professional resume in minutes with our easy-to-use builder
          and download it in PDF format.
        </span>
      </div>
      {user ? (
        <div>
          <Link href="/resumes">
            <Button variant="secondary">Get Started</Button>
          </Link>
        </div>
      ) : (
        <div>
          <Link href="/login">
            <Button variant="secondary">Login</Button>
          </Link>
        </div>
      )}
    </main>
  );
}
