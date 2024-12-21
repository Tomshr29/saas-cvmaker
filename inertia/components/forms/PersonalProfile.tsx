type PersonalProfileProps = {
  data: {
    about: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

function PersonalProfile({ data, handleInputChange }: PersonalProfileProps) {
  return (
    <div className="border-b border-gray-900/10 pb-12">
      <h3 className="scale-y-95 text-2xl font-medium tracking-tight text-gray-800 antialiased">
        Description
      </h3>
      <p className="scale-y-95 text-lg tracking-tight text-gray-600 antialiased">
        Veuillez saisir une description de vous-même
      </p>
      <div className="mt-6 grid grid-cols-2 gap-6">
        <div className="col-span-2">
          <label className="block text-gray-700">
            <span className="mb-0.5 block scale-y-90 font-bold uppercase tracking-tight antialiased">
              Description
            </span>
          </label>
          <textarea
            name="about"
            value={data.about}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
}

export default PersonalProfile;
