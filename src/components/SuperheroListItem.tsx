import { Superhero } from "./SuperheroList";

interface SuperheroListItemProps {
  hero: Superhero;
}

const SuperheroListItem: React.FC<SuperheroListItemProps> = ({ hero }) => {
  return (
    <li className="card">
      <div className="font-bold text-lg">{hero.name}</div>
      <div>Superpower: {hero.superpower}</div>
      <div>Humility: {hero.humility}</div>
    </li>
  );
};

export default SuperheroListItem;
