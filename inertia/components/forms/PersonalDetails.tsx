import { Disclosure } from "@headlessui/react";

type PersonalDetailsProps = {
  data: {
    jobTitle: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function PersonalDetails({ data, handleInputChange }: PersonalDetailsProps) {
  return (
    <div className="border-b border-gray-900/10 pb-12">
      <h3 className="scale-y-95 text-2xl font-medium tracking-tight text-gray-800 antialiased">
        Information personnelle
      </h3>
      <p className="scale-y-95 text-lg tracking-tight text-gray-600 antialiased">
        Veuillez saisir vos informations personnelles
      </p>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-6">
          <label htmlFor="jobTitle" className="block text-gray-700">
            <span className="mb-0.5 block scale-y-90 font-bold uppercase tracking-tight antialiased">
              Titre du poste
            </span>
          </label>
          <div className="mt-1">
            <input
              id="jobTitle"
              name="jobTitle"
              type="text"
              value={data.jobTitle}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="firstName" className="block text-gray-700">
            <span className="mb-0.5 block scale-y-90 font-bold uppercase tracking-tight antialiased">
              Prénom
            </span>
          </label>
          <div className="mt-1">
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={data.firstName}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="lastName" className="block text-gray-700">
            <span className="mb-0.5 block scale-y-90 font-bold uppercase tracking-tight antialiased">
              Nom
            </span>
          </label>
          <div className="mt-1">
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={data.lastName}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="sm:col-span-6">
          <label htmlFor="email" className="block text-gray-700">
            <span className="mb-0.5 block scale-y-90 font-bold uppercase tracking-tight antialiased">
              Adresse e-mail
            </span>
          </label>
          <div className="mt-1">
            <input
              id="email"
              name="email"
              type="email"
              value={data.email}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>

      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="mt-4 text-sm font-semibold text-blue-600 hover:text-blue-800 focus:outline-none">
              {open ? "Hide More" : "Show More"}
            </Disclosure.Button>
            <Disclosure.Panel className="mt-4 grid grid-cols-2 gap-6">
              <div className="col-span-2">
                <label htmlFor="phone" className="block text-gray-700">
                  <span className="mb-0.5 block scale-y-90 font-bold uppercase tracking-tight antialiased">
                    Numéro de téléphone
                  </span>
                </label>
                <div className="mt-1">
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={data.phone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}

export default PersonalDetails;
