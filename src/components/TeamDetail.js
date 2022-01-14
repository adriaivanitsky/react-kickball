import { Link } from 'react-router-dom';

export default function TeamDetail({ team }) {
  return (
    <>
      <h1>{team.name}</h1>
      <div>
        {team.players.map((player) => (
          <Link key={player.id} to={`/players/${player.id}`}>
            {player.name}
          </Link>
        ))}
      </div>
    </>
  );
}
