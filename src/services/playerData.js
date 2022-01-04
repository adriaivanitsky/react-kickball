import { client, checkError } from './client';

export async function getPlayers() {
  let request = await client.from('players').select().order('name');
  return checkError(request);
}

export async function getPlayerById(id) {
  let request = await client.from('players').select('*, teams(*)').match({ id });
  return checkError(request);
}
