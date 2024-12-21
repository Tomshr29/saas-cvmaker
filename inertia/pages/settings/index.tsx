import { usePage } from "@inertiajs/react";
import { LayoutAccount } from "~/components/layout/layout-account";

export default function Settings() {
  const { user } = usePage<any>().props;
  return (
    <LayoutAccount>
      <div className="p-10 md:px-20 lg:px-32">
        <h2 className="scale-y-95 transform text-3xl font-semibold tracking-tight antialiased">
          My Settings
        </h2>
        <p>Update your account settings</p>
      </div>
      <div className="p-10 md:px-20 lg:px-32">
        <div className="overflow-hidden bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Personal Information
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Use a permanent address where you can receive mail.
            </p>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Email address
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                  {user.email}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </LayoutAccount>
  );
}
