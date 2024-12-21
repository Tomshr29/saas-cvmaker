import { Link, useForm } from "@inertiajs/react";

export default function Register() {
  const { data, setData, post, processing, errors } = useForm({
    email: "",
    password: "",
  });

  function submit(e: React.FormEvent) {
    e.preventDefault();
    post("/register");
  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 scale-y-95 transform text-center text-3xl font-semibold tracking-tight text-gray-900 antialiased">
          Register for an account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={submit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-gray-900">
              Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                value={data.email}
                onChange={(e) => setData("email", e.target.value)}
              />
            </div>
            {errors.email && <div className="text-red-500">{errors.email}</div>}
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-900">
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                value={data.password}
                onChange={(e) => setData("password", e.target.value)}
              />
            </div>
            {errors.password && (
              <div className="text-red-500">{errors.password}</div>
            )}
          </div>

          <div>
            <button
              type="submit"
              disabled={processing}
              className="w-full rounded-md bg-[#fae100] px-11 py-2 text-[17px] font-bold uppercase tracking-tight text-black/90 transition duration-300"
            >
              <span className="inline-block scale-y-90 transform">
                Register
              </span>
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
          Already have an account?{" "}
          <Link href="/login" className="bg-[#fae100] font-medium antialiased">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
