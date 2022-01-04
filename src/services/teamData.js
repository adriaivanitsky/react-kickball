import { client, checkError } from './client';

export async function getTeams() {
  let request = await client.from('teams').select().order('name');
  return checkError(request);
}

export async function getTeamsById(id) {
  let request = await client.from('teams').select('*, players(*)').match({ id });
  return checkError(request);
}
