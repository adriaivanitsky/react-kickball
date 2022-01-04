import { client, checkError } from './client';

export async function getTeams() {
  let request = await client.from('teams').select().order('name');
  return request;
}

export async function getTeamsById() {
  let request = await client.from('teams').select('*, players(*)').match({ id });
  return request;
}
