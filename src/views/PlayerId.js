import React from 'react';
import { useEffect, useState } from 'react';
import { getPlayerById } from '../services/playerData';
import PlayerDetail from '../components/PlayerDetail';

export default function PlayerId(props) {
  const id = props.match.params.id;
  const [loading, setLoading] = useState(true);
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPlayerById(id);
      setPlayer(data[0]);
      setLoading(false);
    };
    fetchData();
  }, [id]);
  if (loading) return <h1>Loading...</h1>;

  return <PlayerDetail player={player} />;
}
