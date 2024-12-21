type SelectTemplateProps = {
  data: {
    model: "blue-white" | "red-orange" | null;
  };
  handleTemplateChange: (template: "blue-white" | "red-orange") => void;
};

function SelectTemplate({ data, handleTemplateChange }: SelectTemplateProps) {
  return (
    <div className="border-b border-gray-900/10 pb-12">
      <h3 className="scale-y-95 text-2xl font-medium tracking-tight text-gray-800 antialiased">
        Sélectionnez un modèle
      </h3>
      <p className="scale-y-95 text-lg tracking-tight text-gray-600 antialiased">
        Choisissez parmi les modèles de CV disponibles
      </p>

      {/* Grille pour les options de modèles */}
      <div className="mt-6 grid grid-cols-4 gap-6">
        {/* Option Blue and White */}
        <div
          onClick={() => handleTemplateChange("blue-white")}
          className={`transform cursor-pointer border-2 p-1 text-center transition-transform hover:scale-105 ${
            data.model === "blue-white" ? "border-blue-500" : "border-gray-300"
          }`}
        >
          <div className="h-full bg-blue-100"></div>
        </div>

        {/* Option Red and Orange */}
        <div
          onClick={() => handleTemplateChange("red-orange")}
          className={`transform cursor-pointer border-2 p-1 text-center transition-transform hover:scale-105 ${
            data.model === "red-orange"
              ? "border-orange-500"
              : "border-gray-300"
          }`}
        >
          <div className="h-44 bg-orange-100"></div>
        </div>
      </div>
    </div>
  );
}

export default SelectTemplate;
