import React from 'react';
import { useEffect, useState } from 'react';
import { getTeamById } from '../services/teamData';
import TeamDetail from '../components/TeamDetail';

//fetch call to get team id from params
export default function TeamId(props) {
  const id = props.match.params.id;
  const [loading, setLoading] = useState(true);
  const [team, setTeam] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTeamById(id);
      setTeam(data[0]);
      setLoading(false);
    };
    fetchData();
  }, [id]);
  if (loading) return <h1>Loading...</h1>;

  return <TeamDetail team={team} />;
}
