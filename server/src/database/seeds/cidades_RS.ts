import * as Knex from "knex";

export async function seed(knex: Knex): Promise<any> {
	return knex("cities").insert([
{ name: 'Vista Gaúcha', name_order: 'Vista Gaucha', uf: 'RS' },
			{ name: 'Vitória Das Missões', name_order: 'Vitoria Das Missoes', uf: 'RS' },
			{ name: 'Westfalia', name_order: 'Westfalia', uf: 'RS' },
			{ name: 'Xangri-lá', name_order: 'Xangrila', uf: 'RS' },
	]);
};
