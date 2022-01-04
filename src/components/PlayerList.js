import { Link } from 'react-router-dom';

export default function PlayerList({ players }) {
  return (
    <>
      <h1>Players</h1>
      <div>
        {players.map((player) => (
          <Link key={player.id} to={`./players/${player.id}`}>
            {player.name}
          </Link>
        ))}
      </div>
    </>
  );
}
