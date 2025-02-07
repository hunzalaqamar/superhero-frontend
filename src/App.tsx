import React, { useState, useEffect } from "react";
import SuperheroForm from "./components/SuperheroForm";
import SuperheroList, { Superhero } from "./components/SuperheroList";
import "./App.css";

const App: React.FC = () => {
  const [superheroes, setSuperheroes] = useState<Superhero[]>([]);

  const fetchSuperheroes = async () => {
    try {
      const res = await fetch("http://localhost:5000/superheroes");
      const data = await res.json();
      setSuperheroes(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchSuperheroes();
  }, []);

  const addSuperhero = async (heroData: {
    name: string;
    superpower: string;
    humility: number;
  }) => {
    try {
      const res = await fetch("http://localhost:5000/superheroes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(heroData),
      });
      if (!res.ok) {
        const errorData = await res.json();
        console.error(errorData.error || "Error adding superhero");
        return;
      }
      fetchSuperheroes();
    } catch (err) {
      console.error("Error adding superhero:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container card">
        <h1 className="text-3xl font-bold text-center mb-6">
          Superhero Registry
        </h1>
        <SuperheroForm onAdd={addSuperhero} />
        <h2 className="text-2xl font-semibold mb-4">Superheroes</h2>
        <SuperheroList superheroes={superheroes} />
      </div>
    </div>
  );
};

export default App;
