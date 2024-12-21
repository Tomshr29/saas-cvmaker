import { Link, useForm } from "@inertiajs/react";

export default function Login() {
  const { post, data, setData } = useForm({
    email: "",
    password: "",
  });

  function submit(e: React.FormEvent) {
    e.preventDefault();
    post("/login");
  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 scale-y-95 transform text-center text-3xl font-semibold tracking-tight text-gray-900 antialiased">
          Login to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={submit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-gray-700">
              <span className="mb-0.5 block scale-y-90 font-bold uppercase tracking-tight antialiased">
                Adresse e-mail
              </span>
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                value={data.email}
                onChange={(e) => setData("email", e.target.value)}
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700">
              <span className="mb-0.5 block scale-y-90 font-bold uppercase tracking-tight antialiased">
                Mot de passe
              </span>
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                value={data.password}
                onChange={(e) => setData("password", e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full rounded-md bg-[#fae100] px-11 py-2 text-[17px] font-bold uppercase tracking-tight text-black/90 transition duration-300"
            >
              <span className="inline-block scale-y-90 transform">Login</span>
            </button>
          </div>
        </form>

        <div className="mt-10">
          <button
            onClick={() => (window.location.href = "/auth/google")}
            className="w-full rounded-md border px-11 py-2 text-[17px] font-bold uppercase tracking-tight transition duration-300"
          >
            <span className="inline-block scale-y-90 transform">
              Auth with Google
            </span>
          </button>
        </div>

        <p className="mt-10 text-center">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="bg-[#fae100] font-medium antialiased"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
