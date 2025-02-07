import SuperheroListItem from "./SuperheroListItem";

export interface Superhero {
  id: number;
  name: string;
  superpower: string;
  humility: number;
}

interface SuperheroListProps {
  superheroes: Superhero[];
}

const SuperheroList: React.FC<SuperheroListProps> = ({ superheroes }) => {
  if (!superheroes || superheroes.length === 0) {
    return <p>No superheroes available.</p>;
  }
  return (
    <ul>
      {superheroes.map((hero) => (
        <SuperheroListItem key={hero.id} hero={hero} />
      ))}
    </ul>
  );
};

export default SuperheroList;
