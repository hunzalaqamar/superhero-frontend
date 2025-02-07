import { useState, FormEvent, ChangeEvent } from "react";

interface SuperheroFormProps {
  onAdd: (heroData: {
    name: string;
    superpower: string;
    humility: number;
  }) => Promise<void>;
}

const SuperheroForm: React.FC<SuperheroFormProps> = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    name: "",
    superpower: "",
    humility: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    const humilityVal = Number(formData.humility);
    if (isNaN(humilityVal) || humilityVal < 1 || humilityVal > 10) {
      setError("Humility score must be a number between 1 and 10");
      return;
    }
    await onAdd({
      name: formData.name,
      superpower: formData.superpower,
      humility: humilityVal,
    });
    setFormData({ name: "", superpower: "", humility: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      {error && <div className="text-red-500 mb-2">{error}</div>}
      <div className="mb-2">
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>
      <div className="mb-2">
        <label className="block text-gray-700">Superpower</label>
        <input
          type="text"
          name="superpower"
          value={formData.superpower}
          onChange={handleChange}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>
      <div className="mb-2">
        <label className="block text-gray-700">Humility Score (1-10)</label>
        <input
          type="number"
          name="humility"
          value={formData.humility}
          onChange={handleChange}
          min="1"
          max="10"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
      >
        Add Superhero
      </button>
    </form>
  );
};

export default SuperheroForm;
