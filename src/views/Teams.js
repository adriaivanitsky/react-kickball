import React from 'react';
import { useEffect, useState } from 'react';
import { getTeams } from '../services/teamData';
import TeamList from '../components/TeamList';
//do fetch call to get list of teams from supabase
//map through teams and render component for each team
//useState & useEffect go here
export default function Teams() {
  const [loading, setLoading] = useState(true);
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTeams();
      setTeams(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <h1>Loading teams...</h1>;

  return <TeamList teams={teams} />;
}
