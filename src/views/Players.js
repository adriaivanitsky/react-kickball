import React from 'react';
import { useEffect, useState } from 'react';
import { getPlayers } from '../services/playerData';
import PlayerList from '../components/PlayerList';

export default function Players() {
  const [loading, setLoading] = useState(true);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPlayers();
      setPlayers(data);
      setLoading(false);
    };
    fetchData();
  }, []);
  if (loading) return <h1>Loading...</h1>;

  return <PlayerList players={players} />;
}
